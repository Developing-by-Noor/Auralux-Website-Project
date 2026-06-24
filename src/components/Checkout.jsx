import React, { useEffect, useState } from "react";
import {
  collection,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { fireDB, auth } from "../FirebaseConfig";
import { useNavigate, useLocation } from "react-router-dom";
import {
  ShoppingBag,
  CreditCard,
  Banknote,
  Gift,
} from "lucide-react";

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);

  /* ================= DELIVERY INFO ================= */
  const [form, setForm] = useState({
    name: "",
    email: "",
    fatherName: "",
    phone: "",
    address: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [discountCode, setDiscountCode] = useState("");
  const [discountApplied, setDiscountApplied] = useState(0);
  const [loading, setLoading] = useState(false);

  /* ================= NEW ================= */
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const [cardData, setCardData] = useState({
    name: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const navigate = useNavigate();
  const { state } = useLocation();

  const items = state?.items || [];

  /* ================= LIVE CART ================= */
  useEffect(() => {
    const user = auth.currentUser;
    if (!user) return;

    const unsub = onSnapshot(collection(fireDB, "cart"), (snap) => {
      const data = snap.docs
        .map((d) => ({
          id: d.id,
          ...d.data(),
        }))
        .filter((item) => item.userid === user.uid);

      setCartItems(data);
    });

    return () => unsub();
  }, []);

  /* ================= PRICE FIX ================= */
  const getPrice = (price) => {
    if (!price) return 0;
    return Number(String(price).replace(/[^0-9.]/g, ""));
  };

  const subtotal = cartItems.reduce(
    (sum, item) =>
      sum + getPrice(item.price) * (item.quantity || 1),
    0
  );

  const total = subtotal - discountApplied;

  /* ================= FORM ================= */
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  /* ================= DISCOUNT ================= */
  const applyDiscount = () => {
    if (discountCode === "SAVE10") {
      setDiscountApplied(subtotal * 0.1);
    } else if (discountCode === "SAVE20") {
      setDiscountApplied(subtotal * 0.2);
    } else {
      alert("Invalid Code");
    }
  };

  /* ================= CARD VALIDATION ================= */
  const handleCardPayment = () => {
    if (!cardData.name.trim()) {
      return alert("Enter Card Holder Name");
    }

    if (
      cardData.cardNumber.replace(/\s/g, "").length !== 16
    ) {
      return alert("Invalid Card Number");
    }

    if (cardData.expiry.length !== 5) {
      return alert("Invalid Expiry Date");
    }

    if (cardData.cvv.length !== 3) {
      return alert("Invalid CVV");
    }

    setPaymentSuccess(true);
  };

  /* ================= ORDER ================= */
  const placeOrder = async () => {
    const user = auth.currentUser;

    if (!user) {
      return alert("Login required");
    }

    if (!form.name || !form.phone || !form.address) {
      return alert("Fill required fields");
    }

    if (paymentMethod === "card") {
      if (
        !cardData.name ||
        !cardData.cardNumber ||
        !cardData.expiry ||
        !cardData.cvv
      ) {
        return alert("Please fill card details");
      }
    }

    setLoading(true);

    try {
      await addDoc(collection(fireDB, "orders"), {
        userid: user.uid,
        customer: form,
        items: cartItems,
        subtotal,
        discount: discountApplied,
        total,
        paymentMethod,
        cardDetails:
          paymentMethod === "card"
            ? cardData
            : null,
        status: "pending",
        createdAt: new Date(),
      });

      for (let item of cartItems) {
        await deleteDoc(
          doc(fireDB, "cart", item.id)
        );
      }

      alert("Order Placed 🎉");
      navigate("/dashboard");
    } catch (err) {
      console.log(err);
      alert("Order Failed");
    }

    setLoading(false);
  };

  /* ================= PART 2 STARTS HERE =========
  ======== */
    return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-violet-50 to-cyan-50 pt-28 pb-20 px-4">

      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <h1 className="text-4xl text-violet-700 font-black text-center mb-10">
          Checkout <span className="text-black">Now</span>
        </h1>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* ================= LEFT ================= */}
          <div className="bg-white p-6 rounded-3xl shadow-xl">

            <h2 className="text-xl font-bold mb-4">
              Delivery Information
            </h2>

            <input
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              className="w-full p-3 border rounded-xl mb-3"
            />

            <input
              name="email"
              placeholder="Email"
              onChange={handleChange}
              className="w-full p-3 border rounded-xl mb-3"
            />

            <input
              name="fatherName"
              placeholder="Father Name"
              onChange={handleChange}
              className="w-full p-3 border rounded-xl mb-3"
            />

            <input
              name="phone"
              placeholder="Phone"
              onChange={handleChange}
              className="w-full p-3 border rounded-xl mb-3"
            />

            <textarea
              name="address"
              placeholder="Full Address"
              onChange={handleChange}
              rows="3"
              className="w-full p-3 border rounded-xl mb-4"
            />

            {/* PAYMENT METHOD */}
            <h3 className="font-bold mb-2">Payment Method</h3>

            <div className="space-y-2">

              <button
                onClick={() => {
                  setPaymentMethod("cod");
                  setPaymentSuccess(false);
                }}
                className={`w-full flex items-center gap-2 py-3 px-4 rounded-xl border ${
                  paymentMethod === "cod"
                    ? "bg-black text-white"
                    : ""
                }`}
              >
                🏠 Cash on Delivery
              </button>

              <button
                onClick={() => setPaymentMethod("card")}
                className={`w-full flex items-center gap-2 py-3 px-4 rounded-xl border ${
                  paymentMethod === "card"
                    ? "bg-blue-600 text-white"
                    : ""
                }`}
              >
                💳 Card Payment
              </button>
            </div>

            {/* CARD SECTION */}
            {paymentMethod === "card" && (
              <div className="mt-5 p-4 border rounded-2xl bg-slate-50 space-y-3">

                <h4 className="font-bold">Enter Card Details</h4>

                <input
                  placeholder="Card Holder Name"
                  className="w-full p-2 border rounded-lg"
                  value={cardData.name}
                  onChange={(e) =>
                    setCardData({
                      ...cardData,
                      name: e.target.value,
                    })
                  }
                />

                <input
                  placeholder="1234 5678 9012 3456"
                  maxLength={19}
                  className="w-full p-2 border rounded-lg"
                  value={cardData.cardNumber}
                  onChange={(e) => {
                    const value = e.target.value
                      .replace(/\D/g, "")
                      .replace(/(.{4})/g, "$1 ")
                      .trim();

                    setCardData({
                      ...cardData,
                      cardNumber: value,
                    });
                  }}
                />

                <div className="flex gap-2">

                  <input
                    placeholder="MM/YY"
                    maxLength={5}
                    className="w-1/2 p-2 border rounded-lg"
                    value={cardData.expiry}
                    onChange={(e) => {
                      let value = e.target.value.replace(/\D/g, "");

                      if (value.length > 2) {
                        value =
                          value.slice(0, 2) +
                          "/" +
                          value.slice(2, 4);
                      }

                      setCardData({
                        ...cardData,
                        expiry: value,
                      });
                    }}
                  />

                  <input
                    placeholder="CVV"
                    maxLength={3}
                    className="w-1/2 p-2 border rounded-lg"
                    value={cardData.cvv}
                    onChange={(e) =>
                      setCardData({
                        ...cardData,
                        cvv: e.target.value.replace(/\D/g, ""),
                      })
                    }
                  />
                </div>

               

                {/* PAY BUTTON */}
                <button
                  onClick={handleCardPayment}
                  className="w-full bg-green-600 text-white py-3 rounded-xl font-bold"
                >
                  Pay Securely
                </button>

                {/* SUCCESS MESSAGE */}
                {paymentSuccess && (
                  <div className="mt-3 bg-green-50 border border-green-200 p-3 rounded-xl text-center">
                    <p className="text-green-600 font-bold">
                      ✅ Payment Successful
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* DISCOUNT */}
            <div className="mt-6">
              <h3 className="font-bold mb-2 flex items-center gap-2">
                <Gift size={18} /> Discount Code
              </h3>

              <div className="flex gap-2">
                <input
                  value={discountCode}
                  onChange={(e) =>
                    setDiscountCode(e.target.value)
                  }
                  placeholder="Enter code"
                  className="w-full p-2 border rounded-xl"
                />
                <button
                  onClick={applyDiscount}
                  className="bg-violet-600 text-white px-4 rounded-xl"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>

          {/* ================= RIGHT ================= */}
          <div className="bg-white p-6 rounded-3xl shadow-xl">

            <h2 className="text-xl font-bold mb-4">
              Order Summary
            </h2>

            <div className="space-y-3 max-h-64 overflow-auto">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between border-b pb-2"
                >
                  <span>
                    {item.title} × {item.quantity}
                  </span>
                  <span className="font-semibold">
                    Rs{" "}
                    {getPrice(item.price) *
                      (item.quantity || 1)}
                  </span>
                </div>
              ))}
            </div>

            {/* TOTAL */}
            <div className="mt-6 space-y-2 text-lg">

              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>Rs {subtotal}</span>
              </div>

              <div className="flex justify-between text-red-500">
                <span>Discount</span>
                <span>Rs {discountApplied}</span>
              </div>

              <div className="flex justify-between text-2xl font-black">
                <span>Total</span>
                <span>Rs {total}</span>
              </div>
            </div>

            {/* FINAL BUTTON (COD + CARD FLOW) */}
            {paymentMethod === "cod" && (
              <button
                onClick={placeOrder}
                disabled={loading}
                className="w-full mt-6 bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-500 text-white py-4 rounded-2xl font-bold"
              >
                {loading ? "Processing..." : "Buy Now"}
              </button>
            )}

            {paymentMethod === "card" && paymentSuccess && (
              <button
                onClick={placeOrder}
                disabled={loading}
                className="w-full mt-6 bg-gradient-to-r from-emerald-500 to-green-600 text-white py-4 rounded-2xl font-bold"
              >
                {loading ? "Confirming..." : "Confirm Order"}
              </button>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
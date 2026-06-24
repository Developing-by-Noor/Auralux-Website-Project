import React, { useEffect, useState } from "react";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";

import {
  collection,
  query,
  where,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

import { fireDB, auth } from "../Firebaseconfig";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  /* ================= AUTH CHECK ================= */
  useEffect(() => {
    const unsubAuth = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
    });

    return () => unsubAuth();
  }, []);

  /* ================= REALTIME CART ================= */
  useEffect(() => {
    if (!user) return;

    const q = query(
      collection(fireDB, "cart"),
      where("userid", "==", user.uid)
    );

    const unsub = onSnapshot(q, (snap) => {
      const list = snap.docs.map((doc) => ({
        firestoreId: doc.id,
        ...doc.data(),
      }));

      setCartItems(list);
    });

    return () => unsub();
  }, [user]);

  /* ================= UPDATE QTY ================= */
  const updateQty = async (id, type, qty) => {
    const ref = doc(fireDB, "cart", id);

    await updateDoc(ref, {
      quantity: type === "inc" ? qty + 1 : qty > 1 ? qty - 1 : 1,
    });
  };

  /* ================= REMOVE ITEM ================= */
  const removeItem = async (id) => {
    await deleteDoc(doc(fireDB, "cart", id));
  };

  /* ================= TOTAL ================= */
  const totalAmount = cartItems.reduce((acc, item) => {
    const price =
      typeof item.price === "string"
        ? Number(item.price.replace("$", ""))
        : item.price;

    return acc + price * item.quantity;
  }, 0);

  /* ================= LOADING ================= */
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading cart...
      </div>
    );
  }

  /* ================= LOGIN REQUIRED ================= */
  if (!user) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">🔒 Login Required</h1>
        <p className="text-slate-500 mt-2">
          Please login to view your cart
        </p>

        <button
          onClick={() => navigate("/login")}
          className="mt-5 bg-black text-white px-6 py-3 rounded-xl"
        >
          Go to Login
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-28 px-4">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-3xl font-black    mb-8">
           Your Cart
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* LEFT SIDE */}
          <div className="lg:col-span-2 space-y-5">

            {cartItems.map((item) => (
              <div
                key={item.firestoreId}
                className="bg-white p-5 rounded-2xl shadow flex gap-4"
              >

                <img
                  src={item.image}
                  className="w-24 h-24 rounded-xl object-cover"
                />

                <div className="flex-1">

                  <h2 className="font-bold">{item.title}</h2>
                  <p>{item.description}</p>

                  <p className="text-violet-600 font-black">
                    ${typeof item.price === "string"
                      ? item.price
                      : item.price}
                  </p>

                  {/* QTY */}
                  <div className="flex items-center gap-3 mt-3">

                    <button
                      onClick={() =>
                        updateQty(item.firestoreId, "dec", item.quantity)
                      }
                      className="p-2 bg-slate-100 rounded-lg"
                    >
                      <Minus size={16} />
                    </button>

                    <span className="font-bold">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() =>
                        updateQty(item.firestoreId, "inc", item.quantity)
                      }
                      className="p-2 bg-slate-100 rounded-lg"
                    >
                      <Plus size={16} />
                    </button>

                  </div>

                </div>

                <button
                  onClick={() => removeItem(item.firestoreId)}
                  className="text-red-500"
                >
                  <Trash2 />
                </button>

              </div>
            ))}

          </div>

          {/* RIGHT SIDE */}
          <div className="bg-white p-6 rounded-2xl shadow h-fit">

            <h2 className="text-xl font-bold">
              Order Summary
            </h2>

            <div className="mt-5 space-y-3">

              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${totalAmount}</span>
              </div>

              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Free</span>
              </div>

              <div className="flex justify-between">
                <span>Tax</span>
                <span>$0</span>
              </div>

              <hr />

              <div className="flex justify-between font-black text-lg">
                <span>Total</span>
                <span>${totalAmount}</span>
              </div>

            </div>

            <button
              onClick={() =>
                navigate("/checkout", {
                  state: { totalAmount, cartItems },
                })
              }
              className="w-full mt-6  bg-gradient-to-r
    from-fuchsia-500
    via-violet-500
    to-cyan-500
     text-white py-4 rounded-2xl font-bold hover:opacittext-white py-3 rounded-xl"
            >
              <ShoppingBag className="inline mr-2" size={18} />
              Buy Now
            </button>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Cart;

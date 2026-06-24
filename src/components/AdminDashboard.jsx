import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
  onSnapshot,
} from "firebase/firestore";
import { fireDB } from "../FirebaseConfig";

export default function AdminDashboard() {
  const user = JSON.parse(localStorage.getItem("users"));

  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);

  const [form, setForm] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
  });

  const [editId, setEditId] = useState(null);

  /* ---------------- PRODUCTS LIVE ---------------- */
  useEffect(() => {
    const unsub = onSnapshot(collection(fireDB, "products"), (snap) => {
      setProducts(
        snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    });

    return () => unsub();
  }, []);

  /* ---------------- ORDERS LIVE ---------------- */
  useEffect(() => {
    const unsub = onSnapshot(collection(fireDB, "orders"), (snap) => {
      setOrders(
        snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    });

    return () => unsub();
  }, []);

  /* ---------------- ADD PRODUCT ---------------- */
  const addProduct = async () => {
    if (!form.title || !form.price) return;

    await addDoc(collection(fireDB, "products"), {
      ...form,
      createdAt: new Date(),
    });

    setForm({ title: "", price: "", description: "", image: "" });
  };

  /* ---------------- DELETE ---------------- */
  const deleteProduct = async (id) => {
    await deleteDoc(doc(fireDB, "products", id));
  };

  /* ---------------- EDIT ---------------- */
  const editProduct = (item) => {
    setForm(item);
    setEditId(item.id);
  };

  /* ---------------- UPDATE ---------------- */
  const updateProduct = async () => {
    await updateDoc(doc(fireDB, "products", editId), form);
    setEditId(null);
    setForm({ title: "", price: "", description: "", image: "" });
  };

  /* ---------------- STATUS UPDATE ---------------- */
  const updateStatus = async (id, status) => {
    await updateDoc(doc(fireDB, "orders", id), { status });
  };

  return (
    <div className="min-h-screen bg-white pt-24 px-4 md:px-10">

      {/* ================= ADMIN HEADER ================= */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-500 text-white p-8 rounded-3xl shadow-2xl"
      >
        <h1 className="text-4xl font-black">Auralux Admin Panel</h1>
        <p className="mt-2 text-white/80">
          Welcome {user?.name} • {user?.email} • {user?.role}
        </p>
      </motion.div>

      {/* ================= STATS ================= */}
      <div className="grid md:grid-cols-3 gap-6 mt-8">

        <div className="bg-white border rounded-3xl p-6 shadow-lg">
          <h2 className="text-lg font-semibold">Total Products</h2>
          <p className="text-4xl font-black text-violet-600">
            {products.length}
          </p>
        </div>

        <div className="bg-white border rounded-3xl p-6 shadow-lg">
          <h2 className="text-lg font-semibold">Live Orders</h2>
          <p className="text-4xl font-black text-cyan-600">
            {orders.length}
          </p>
        </div>

        <div className="bg-white border rounded-3xl p-6 shadow-lg">
          <h2 className="text-lg font-semibold">Revenue (Mock)</h2>
          <p className="text-4xl font-black text-pink-600">
            ₹ {orders.length * 299}
          </p>
        </div>

      </div>

      {/* ================= PROFILE CARD ================= */}
      <div className="mt-8 bg-white border rounded-3xl p-6 shadow-lg flex items-center gap-6">
        <img
          src={user?.photo || "https://i.pravatar.cc/150"}
          className="w-20 h-20 rounded-full object-cover border"
        />
        <div>
          <h2 className="text-2xl font-bold">{user?.name}</h2>
          <p className="text-slate-500">{user?.email}</p>
          <p className="text-sm text-violet-600">{user?.role}</p>
        </div>
      </div>

      {/* ================= ADD PRODUCT FORM ================= */}
      <div className="mt-10 bg-white border rounded-3xl p-6 shadow-lg">

        <h2 className="text-2xl font-bold mb-4">
          {editId ? "Update Product" : "Add Product"}
        </h2>

        <div className="grid md:grid-cols-2 gap-4">

          <input
            className="border p-3 rounded-xl"
            placeholder="Product Title"
            value={form.title}
            onChange={(e) =>
              setForm({ ...form, title: e.target.value })
            }
          />

          <input
            className="border p-3 rounded-xl"
            placeholder="Price"
            value={form.price}
            onChange={(e) =>
              setForm({ ...form, price: e.target.value })
            }
          />

          <input
            className="border p-3 rounded-xl"
            placeholder="Image URL (Google/Unsplash)"
            value={form.image}
            onChange={(e) =>
              setForm({ ...form, image: e.target.value })
            }
          />

          <input
            className="border p-3 rounded-xl"
            placeholder="Description"
            value={form.description}
            onChange={(e) =>
              setForm({ ...form, description: e.target.value })
            }
          />
        </div>

        <button
          onClick={editId ? updateProduct : addProduct}
          className="mt-5 px-6 py-3 bg-violet-600 text-white rounded-xl"
        >
          {editId ? "Update Product" : "Add Product"}
        </button>

      </div>

      {/* ================= PRODUCTS GRID ================= */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">

        {products.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.03 }}
            className="bg-white border rounded-3xl overflow-hidden shadow-lg"
          >
            <img
              src={item.image}
              className="h-52 w-full object-cover"
            />

            <div className="p-5">
              <h2 className="text-xl font-bold">{item.title}</h2>
              <p className="text-slate-500 text-sm">
                {item.description}
              </p>

              <p className="text-violet-600 font-bold mt-2">
                ₹ {item.price}
              </p>

              <div className="flex gap-2 mt-4">

                <button
                  onClick={() => editProduct(item)}
                  className="px-4 py-2 bg-cyan-100 text-cyan-700 rounded-xl"
                >
                  Edit
                </button>

                <button
                  onClick={() => deleteProduct(item.id)}
                  className="px-4 py-2 bg-red-100 text-red-700 rounded-xl"
                >
                  Delete
                </button>

              </div>
            </div>
          </motion.div>
        ))}

      </div>

      {/* ================= ORDERS ================= */}
      <div className="mt-12 bg-white border rounded-3xl p-6 shadow-lg">

        <h2 className="text-2xl font-bold mb-4">
          Live Orders
        </h2>

        {orders.map((order) => (
          <div
            key={order.id}
            className="border rounded-xl p-4 mb-4 flex flex-col md:flex-row justify-between"
          >
            <div>
              <p className="font-bold">User: {order.userid}</p>
              <p>Total: ₹ {order.totalAmount}</p>
              <p>Status: {order.status}</p>
            </div>

            <div className="flex gap-2 mt-3 md:mt-0">

              <button
                onClick={() => updateStatus(order.id, "pending")}
                className="px-3 py-2 bg-yellow-100 rounded-xl"
              >
                Pending
              </button>

              <button
                onClick={() => updateStatus(order.id, "shipped")}
                className="px-3 py-2 bg-blue-100 rounded-xl"
              >
                Shipped
              </button>

              <button
                onClick={() => updateStatus(order.id, "delivered")}
                className="px-3 py-2 bg-green-100 rounded-xl"
              >
                Delivered
              </button>

            </div>
          </div>
        ))}

      </div>

    </div>
  );
}
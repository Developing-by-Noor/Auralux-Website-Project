import React, { useEffect, useState } from "react";
import {
  collection,
  onSnapshot,
  query,
  where,
  doc,
  updateDoc,
} from "firebase/firestore";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, fireDB } from "../Firebaseconfig";
import { motion } from "framer-motion";

import {
  LayoutDashboard,
  Package,
  User,
  LogOut,
  TrendingUp,
  Clock,
  CheckCircle2,
} from "lucide-react";

const UserDashboard = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [orders, setOrders] = useState([]);
  const [tab, setTab] = useState("dashboard");

  /* ================= AUTH ================= */
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return () => unsub();
  }, []);

  /* ================= PROFILE ================= */
  useEffect(() => {
    if (!currentUser?.uid) return;

    const q = query(
      collection(fireDB, "users"),
      where("uid", "==", currentUser.uid)
    );

    const unsub = onSnapshot(q, (snap) => {
      snap.forEach((doc) => setProfile(doc.data()));
    });

    return () => unsub();
  }, [currentUser]);

  /* ================= ORDERS ================= */
  useEffect(() => {
    if (!currentUser?.uid) return;

    const q = query(
      collection(fireDB, "orders"),
      where("userid", "==", currentUser.uid)
    );

    const unsub = onSnapshot(q, (snap) => {
      const list = snap.docs.map((d) => ({
        id: d.id,
        ...d.data(),
      }));
      setOrders(list);
    });

    return () => unsub();
  }, [currentUser]);

  /* ================= LOGOUT ================= */
  const handleLogout = async () => {
    await signOut(auth);
    localStorage.clear();
    window.location.href = "/login";
  };

  /* ================= STATUS UPDATE ================= */
  const updateStatus = async (id, status) => {
    await updateDoc(doc(fireDB, "orders", id), {
      status,
    });
  };

  const totalSpent = orders.reduce((acc, i) => acc + (i.price || 0), 0);

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-slate-50 via-violet-50 to-cyan-50 pt-24">

      {/* ================= SIDEBAR ================= */}
      <div className="w-72 bg-gray-50 shadow-xl p-6 hidden md:block">
        <h1 className="text-3xl font-black font-['outfit-font'] text-violet-600 mb-8">
          Auralux Panel
        </h1>

        <div className="space-y-3">

          <button onClick={() => setTab("dashboard")}
            className="flex items-center gap-2 w-full p-3 rounded-xl hover:bg-violet-200">
            <LayoutDashboard size={18} /> Dashboard
          </button>

          <button onClick={() => setTab("orders")}
            className="flex items-center gap-2 w-full p-3 rounded-xl hover:bg-violet-200">
            <Package size={18} /> Orders
          </button>

          <button onClick={() => setTab("profile")}
            className="flex items-center gap-2 w-full p-3 rounded-xl hover:bg-violet-200">
            <User size={18} /> Profile
          </button>

          <button onClick={handleLogout}
            className="flex items-center gap-2 w-full p-3 rounded-xl text-red-500 hover:bg-red-50">
            <LogOut size={18} /> Logout
          </button>

        </div>
      </div>

      {/* ================= MAIN ================= */}
      <div className="flex-1 p-6 md:p-10">

        {/* HEADER */}
        <div className="bg-white p-6 rounded-3xl shadow-md flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-['outfit-font']  font-black">
              Welcome, {profile?.name || "User"}
            </h2>
            <p className="text-slate-500">{profile?.email}</p>
          </div>

          <img
            src={profile?.photoURL || "https://ui-avatars.com/api/?name=User"}
            className="w-14 h-14 rounded-full"
          />
        </div>

        {/* DASHBOARD */}
        {tab === "dashboard" && (
          <>
            <div className="grid md:grid-cols-3 gap-6 mt-6">

              <div className="bg-white p-6 rounded-3xl shadow">
                <TrendingUp className="text-violet-600" />
                <h2 className="text-2xl  font-['outfit-font'] font-black mt-2">
                  {orders.length}
                </h2>
                <p className="text-slate-500">Total Orders</p>
              </div>

              <div className="bg-white p-6 rounded-3xl shadow">
                <CheckCircle2 className="text-green-600" />
                <h2 className="text-2xl  font-['outfit-font'] font-black mt-2">
                  ${totalSpent}
                </h2>
                <p className="text-slate-500">Total Spent</p>
              </div>

              <div className="bg-white p-6 rounded-3xl shadow">
                <Clock className="text-orange-500" />
                <h2 className="text-2xl  font-['outfit-font'] font-black mt-2">
                  {orders.filter(o => o.status === "Pending").length}
                </h2>
                <p className="text-slate-500">Pending</p>
              </div>

            </div>
          </>
        )}

        {/* ORDERS */}
        {tab === "orders" && (
          <div className="grid md:grid-cols-2 gap-6 mt-6">

            {orders.map((o) => (
              <motion.div
                key={o.id}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-3xl shadow"
              >
                <h2 className="font-bold text-lg">
                  {o.productName}
                </h2>

                <p className="text-slate-500 text-sm mt-2">
                  {o.description}
                </p>

                <p className="text-violet-600 font-black mt-3">
                  ${o.price}
                </p>

                <span className="inline-block mt-3 px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-sm">
                  {o.status || "Pending"}
                </span>

                {/* STATUS CONTROL */}
                <div className="flex gap-2 mt-4 flex-wrap">

                  <button onClick={() => updateStatus(o.id, "Pending")}
                    className="text-xs px-3 py-1 bg-yellow-100 rounded-lg">
                    Pending
                  </button>

                  <button onClick={() => updateStatus(o.id, "Processing")}
                    className="text-xs px-3 py-1 bg-blue-100 rounded-lg">
                    Processing
                  </button>

                  <button onClick={() => updateStatus(o.id, "Delivered")}
                    className="text-xs px-3 py-1 bg-green-100 rounded-lg">
                    Delivered
                  </button>

                </div>

              </motion.div>
            ))}

          </div>
        )}

        {/* PROFILE */}
        {tab === "profile" && (
          <div className="bg-white p-6 rounded-3xl shadow mt-6 max-w-xl">
            <h2 className="text-xl font-black mb-4">Profile</h2>

            <p><b>Name:</b> {profile?.name}</p>
            <p><b>Email:</b> {profile?.email}</p>
            <p><b>Role:</b> {profile?.role}</p>
            
          </div>
        )}

      </div>
    </div>
  );
};

export default UserDashboard;

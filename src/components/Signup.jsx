import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { User, Mail, Lock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import Loader from "./Loader";
import MyContext from "../myContext";

// Firebase imports (adjust path if needed)
import { auth, fireDB } from "../FirebaseConfig";
import {
  createUserWithEmailAndPassword
} from "firebase/auth";

import {
  collection,
  addDoc,
  Timestamp
} from "firebase/firestore";

const Signup = () => {
  const { loading, setLoading } = useContext(MyContext) || {};

  const navigate = useNavigate();

  const [userSignup, setUserSignup] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });

  // SIGNUP FUNCTION
 const userSignupFunction = async (e) => {
  e.preventDefault();

  if (!userSignup.name || !userSignup.email || !userSignup.password) {
    return toast.error("All fields are required");
  }

  try {
    setLoading?.(true);

    const email = userSignup.email.trim();

    const users = await createUserWithEmailAndPassword(
      auth,
      email,
      userSignup.password
    );

    const userData = {
      name: userSignup.name,
      email: users.user.email,
      uid: users.user.uid,
      role: "user",
    };

    await addDoc(collection(fireDB, "users"), userData);

    // IMPORTANT FIRST SAVE
    localStorage.setItem("users", JSON.stringify(userData));

    toast.success("Signup successful");

    setLoading?.(false);

    // 🔥 IMPORTANT FIX: force instant redirect
    navigate("/user-dashboard");

  } catch (error) {
    console.log(error);

    if (error.code === "auth/email-already-in-use") {
      toast.error("Email already registered");
      navigate("/login");
    } else {
      toast.error("Signup failed");
    }

    setLoading?.(false);
    console.log(loading);
  }
};
  return (
    <div className="
      min-h-screen
      bg-gradient-to-br
      from-white
      via-violet-50
      to-cyan-50
      flex
      items-center
      justify-center
      px-4
      py-28
      overflow-hidden
    ">
         {loading && <Loader/>}
      {/* Background blur */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-violet-300/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-300/20 blur-[120px] rounded-full" />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative w-full max-w-xl rounded-[40px] bg-white/70 backdrop-blur-2xl border border-white shadow-[0_25px_80px_rgba(0,0,0,0.08)]"
      >
        <div className="p-8 sm:p-10 md:p-14">

          <span className="inline-block px-6 py-2 rounded-full bg-violet-100 text-violet-700 font-semibold">
            Create Account
          </span>

          <h2 className="mt-3 text-4xl md:text-3xl font-black font-['outfit-font']">
            Sign Up
          </h2>

          <p className="mt-3 text-slate-500">
            Create your Auralux account today.
          </p>

          <form onSubmit={userSignupFunction} className="mt-10 space-y-5">

            {/* NAME */}
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Full Name"
                value={userSignup.name}
                onChange={(e) =>
                  setUserSignup({ ...userSignup, name: e.target.value })
                }
                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 bg-white outline-none focus:border-violet-500"
              />
            </div>

            {/* EMAIL */}
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="email"
                placeholder="Email Address"
                value={userSignup.email}
                onChange={(e) =>
                  setUserSignup({ ...userSignup, email: e.target.value })
                }
                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 bg-white outline-none focus:border-violet-500"
              />
            </div>

            {/* PASSWORD */}
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="password"
                placeholder="Password"
                value={userSignup.password}
                onChange={(e) =>
                  setUserSignup({ ...userSignup, password: e.target.value })
                }
                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 bg-white outline-none focus:border-violet-500"
              />
            </div>
<button
  type="submit"
  disabled={loading}
  className="w-full py-3 rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-500 text-white font-bold flex items-center justify-center gap-2 hover:scale-[1.02] transition-all duration-300 shadow-xl disabled:opacity-60"
>
  {loading ? "Loading..." : "Signup"}
  {!loading && <ArrowRight size={18} />}
</button>
{loading && (
  <div className="fixed inset-0 flex items-center justify-center bg-white/40 backdrop-blur-sm z-50">
    <Loader />
  </div>
)}
     </form>

          <div className="mt-8 text-center">
            <p className="text-slate-600">
              Have an account?{" "}
              <NavLink to="/login" className="font-bold text-violet-600 hover:text-fuchsia-600">
                Login
              </NavLink>
            </p>
          </div>

        </div>
      </motion.div>
    </div>
  );
};

export default Signup;
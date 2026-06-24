import React, { useContext, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { Mail, Lock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import MyContext from "../MyContext";
import toast from "react-hot-toast";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, fireDB } from "../Firebaseconfig";
import  Loader  from "./Loader";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { getDocs } from "firebase/firestore";
const Login = () => {
    const context = useContext(MyContext);
    const { loading, setLoading } = context;

    // navigate 
    const navigate = useNavigate();

    // User Signup State 
    const [userLogin, setUserLogin] = useState({
        email: "",
        password: ""
    });

     /**========================================================================
     *                          User Login Function 
    *========================================================================**/

  const userLoginFunction = async (e) => {
  e.preventDefault();

  if (!userLogin.email || !userLogin.password) {
    return toast.error("All Fields are required");
  }

  setLoading(true);

  try {
    const res = await signInWithEmailAndPassword(
      auth,
      userLogin.email,
      userLogin.password
    );

    const q = query(
      collection(fireDB, "users"),
      where("uid", "==", res.user.uid)
    );

    const snapshot = await getDocs(q);
    console.log("Snapshot size:", snapshot.size);

let user = null;

snapshot.forEach((doc) => {
  user = doc.data();
});

console.log("Firebase Login:", res.user);

console.log("Firestore User:", user);

console.log("Role:", user?.role);

// 👇 ADD THIS LINE HERE;
    if (!user) {
      toast.error("User not found in DB");
      return;
    }

    localStorage.setItem("users", JSON.stringify(user));

    toast.success("Login Successfully");
    navigate("/");

    setUserLogin({ email: "", password: "" });

    // ROLE BASED NAVIGATION
    if (user.role === "admin") {
      navigate("/admin-dashboard");
    } else {
      navigate("/user-dashboard");
    }

  } catch (error) {
    console.log(error);
    toast.error(error.code || "Login Failed");
  } finally {
    setLoading(false);
  }
};

  return (
    <div
      className="
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
      "
    >
        {loading && <Loader />}
      {/* Background Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-violet-300/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-300/20 blur-[120px] rounded-full" />
<motion.div
  initial={{ opacity: 0, y: 60 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  className="
  relative
  w-full
  max-w-xl
  overflow-hidden
  rounded-[40px]
  bg-white/70
  backdrop-blur-2xl
  border
  border-white
  shadow-[0_25px_80px_rgba(0,0,0,0.08)]
  "
>
        

        {/* Right Side */}
        <div
          className="
          p-8
          sm:p-10
          md:p-14
          "
        >
          <div className="text-center lg:text-left">

            
          <h2
              className="
              mt-3
              text-4xl
              md:text-3xl
              font-black
               font-['outfit-font']
             
              "
            >
              Login
            </h2>

            <p className="mt-3 text-slate-500">
              Enter your credentials to continue.
            </p>

          </div>

        <form onSubmit={userLoginFunction} className="mt-10 space-y-5">

            <div className="relative">

              <Mail
                size={18}
                className="
                absolute
                left-4
                top-1/2
                -translate-y-1/2
                text-slate-400
                "
              />

              <input
                type="email"
                placeholder="Email Address"
                 value={userLogin.email}
                        onChange={(e) => {
                            setUserLogin({
                                ...userLogin,
                                email: e.target.value
                            })
                        }}
                className="
                w-full
                pl-12
                pr-4
                py-4
                rounded-2xl
                border
                border-slate-200
                bg-white
                outline-none
                focus:border-violet-500
                "
              />

            </div>

            <div className="relative">

              <Lock
                size={18}
                className="
                absolute
                left-4
                top-1/2
                -translate-y-1/2
                text-slate-400
                "
              />

              <input
                type="password"
                placeholder="Password"
                value={userLogin.password}
                        onChange={(e) => {
                            setUserLogin({
                                ...userLogin,
                                password: e.target.value
                            })
                        }}
                className="
                w-full
                pl-12
                pr-4
                py-4
                rounded-2xl
                border
                border-slate-200
                bg-white
                outline-none
                focus:border-violet-500
                "
              />

            </div>

            <div
              className="
              flex
              justify-between
              items-center
              text-sm
              "
            >
              <label className="flex items-center gap-2">

                <input type="checkbox" />

                <span className="text-slate-600">
                  Remember Me
                </span>

              </label>

              <button
                type="submit"
                className="
                text-violet-600
                font-semibold
                hover:text-fuchsia-600
                "
              >
                Forgot Password?
              </button>
            </div>

            <button
              type='submit'
                       
              className="
              w-full
              py-3
              rounded-full
              bg-gradient-to-r
              from-fuchsia-500
              via-violet-500
              to-cyan-500
              text-white
              font-bold
              flex
              items-center
              justify-center
              gap-2
              hover:scale-[1.02]
              transition-all
              duration-300
              
              shadow-xl
              "
            >
              LogIn
              <ArrowRight size={18} />
            </button> 
            {loading && (
  <div className="absolute inset-0 flex items-center justify-center bg-white/40 backdrop-blur-sm z-50">
    <Loader />
  </div>
)}

          </form>

      

          {/* Signup Link */}
          <div className="mt-8 text-center">

            <p className="text-slate-600">
              Don't have an account?{" "}
              <NavLink
                to="/signup"
                className="
                font-bold
                text-violet-600
                hover:text-fuchsia-600
                transition
                "
              >
                Sign Up
              </NavLink>
            </p>

          </div>

        </div>

      </motion.div>
    </div>
  );
};

export default Login;

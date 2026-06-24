import { useState, useEffect } from "react";
import { NavLink, useNavigate, useLocation, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";

import {
  Menu,
  X,
  ShoppingCart,
  UserCog,
  User,
  ChevronDown,
  Sparkles,
  Headset,
  HelpCircle,
  Truck,
} from "lucide-react";

import SearchBar from "./Searchbar";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
const isHome = location.pathname === "/";

let user = null;

try {
  user = JSON.parse(localStorage.getItem("users") || "null");
} catch (error) {
  localStorage.removeItem("users");
}
const logout = () => {
  localStorage.removeItem("users");
  window.location.href = "/login"; // hard reset session
};
 useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 500);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  const [showCategories, setShowCategories] = useState(false);
  const [showSupport, setShowSupport] = useState(false);


  const categories = [
    {
      name: "Headphones",
      slug: "headphones",
    },
    {
      name: "Earbuds",
      slug: "earbuds",
    },
    {
      name: "Smart Watches",
      slug: "smart-watches",
    },
    {
      name: "Speakers",
      slug: "speakers",
    },
    {
      name: "Smartphones",
      slug: "smartphones",
    },
    {
      name: "Gaming Gear",
      slug: "gaming-gear",
    },
    {
      name: "Accessories",
      slug: "accessories",
    },
    {
      name: "Chargers",
      slug: "chargers",
    },
    {
      name: "Power Banks",
      slug: "power-banks",
    },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav
     className={`
  fixed top-0 left-0 w-full z-50
  transition-all duration-500

  ${
    isHome && !scrolled
      ? "bg-transparent"
      : "bg-white shadow-lg backdrop-blur-xl"
  }
`}
    >

      
        {/* Premium Glow Effects */}

        <div className="absolute inset-0 pointer-events-none">

          <div
            className="
            absolute
            -top-20
            left-10
            w-60
            h-60
            rounded-full
            bg-fuchsia-300/20
            blur-3xl
            "
          />

          <div
            className="
            absolute
            -top-20
            right-10
            w-60
            h-60
            rounded-full
            bg-cyan-300/20
            blur-3xl
            "
          />

          <div
            className="
            absolute
            top-0
            left-1/2
            -translate-x-1/2
            w-60
            h-60
            rounded-full
            bg-violet-300/10
            blur-3xl
            "
          />

        </div>

        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="h-20 flex items-center justify-between">


            {/* Logo */}

            <NavLink
              to="/"
              className="flex items-center gap-3"
            >
              <motion.div
                whileHover={{
                  scale: 1.08,
                  rotate: 10,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="
                w-10
                h-10
                rounded-2xl

                bg-gradient-to-br
                from-fuchsia-500
                via-violet-500
                to-cyan-500

                flex
                items-center
                justify-center

                shadow-[0_15px_40px_rgba(168,85,247,0.35)]
                "
              >
                <Sparkles
                  size={18}
                  className="text-white"
                />
              </motion.div>

              <div >

                <h1
                  className="
                  text-3xl
                  font-black
                  font-['outfit-font']

                  bg-gradient-to-r
                  from-fuchsia-600
                  via-violet-600
                  to-cyan-600

                  bg-clip-text
                  text-transparent
                  "
                >
                  AURALUX
                </h1>

                <p
                  className="
                  text-[10px]
                  uppercase
                  tracking-[5px]
                  text-slate-800
                  "
                >
                  Premium Tech Store
                </p>

              </div>
            </NavLink>

            {/* Desktop Menu */}

          <div className="hidden lg:flex flex-1 justify-center gap-6 xl:gap-8">
              <NavLink
                to="/"
                className="
                font-medium
                text-slate-700
                hover:text-violet-600
                transition
                "
              >
                Home
              </NavLink>

              <NavLink
                to="/shop"
                className="
                font-medium
                text-slate-700
                hover:text-violet-600
                transition
                "
              >
                Shop
              </NavLink>

              {/* Categories */}
           {/* Categories */}


              <NavLink
                to="/blog"
                className="
                font-medium
                text-slate-700
                hover:text-violet-600
                transition
                "
              >
                Blog
              </NavLink>

              
                            {/* Support */}

              <div
                className="relative"
                onMouseEnter={() =>
                  setShowSupport(true)
                }
                onMouseLeave={() =>
                  setShowSupport(false)
                }
              >
                <button
                  className="
                  flex
                  items-center
                  gap-2

                  font-medium
                  text-slate-700

                  hover:text-violet-600
                  transition
                  "
                >
                  Support
                 
                </button>

                <AnimatePresence>
                  {showSupport && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 15,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        y: 15,
                      }}
                     className="
absolute
top-14
left-0

w-80
bg-white/60
 bg-transparent
backdrop-blur-2xl

rounded-3xl
border
border-slate-200/60

shadow-2xl
p-3
z-50
"
                    >
                     <NavLink
  to="/contact"
  className="
  flex
  items-center
  gap-3
  p-3
  rounded-xl
  transition-all
  duration-300
  hover:bg-gradient-to-r
  hover:from-fuchsia-200
  hover:via-violet-200
  hover:to-cyan-200
  "
>
  Contact Us
</NavLink>
<NavLink
  to="/faq"
  className="
  flex
  items-center
  gap-3
  p-3
  rounded-xl
  transition-all
  duration-300
  hover:bg-gradient-to-r
  hover:from-fuchsia-200
  hover:via-violet-200
  hover:to-cyan-200
  "
>
  FAQ
</NavLink>

                    <NavLink
  to="/track-order"
  className="
  flex
  items-center
  gap-3
  p-3
  rounded-xl
  transition-all
  duration-300
  hover:bg-gradient-to-r
  hover:from-fuchsia-200
  hover:via-violet-200
  hover:to-cyan-200
  "
>
  Track Order
</NavLink>
                    </motion.div>
    )}
  </AnimatePresence>
</div>

            </div>

            {/* Search + Actions */}

            <div className="hidden lg:flex items-center gap-2 xl:gap-3">

             <div className="w-[240px] xl:w-[380px] 2xl:w-[500px]">
  {/* <SearchBar /> */}
</div>
            <NavLink to="/cart">
  <motion.button
 
    whileTap={{ scale: 0.95 }}
    className="
      w-10 h-10
    rounded-full
    bg-white
   
    flex items-center justify-center
    hover:bg-slate-200
    transition
     
      shadow-md
    "
  >
    <ShoppingCart size={20} />
  </motion.button>
</NavLink>

{user?.role === "user" &&<NavLink to="/user-dashboard">
  <motion.button
    
    whileTap={{ scale: 0.95 }}
    className="
       w-10 h-10
    rounded-full
    bg-white
    flex items-center justify-center
    hover:bg-slate-200
    transition
    "
  >
    <User size={20} />
  </motion.button>
</NavLink>}

{user?.role === "admin" && <NavLink to="/admin-dashboard">
  <motion.button
    
    whileTap={{ scale: 0.95 }}
    className="
       w-10 h-10
    rounded-full
    bg-white
    flex items-center justify-center
    hover:bg-slate-200
    transition
    "
  >
    <UserCog size={20} />
  </motion.button>
</NavLink>}

       {!user ? <NavLink to="/signup">
  <motion.button
    whileHover={{ scale: 1.05, y: -2 }}
    whileTap={{ scale: 0.95 }}
    className="
    px-3 xl:px-3
    py-3 xl:py-3
    rounded-full
     text-slate-700
                hover:text-violet-600
                transition
                bg-white
    font-semibold
    text-sm xl:text-base
    shadow-[0_12px_40px_rgba(168,85,247,0.35)]
    "
  >
    Sign Up
  </motion.button>
</NavLink> : ""}

{user && <NavLink>
  <motion.button
    whileHover={{ scale: 1.05, y: -2 }}
    whileTap={{ scale: 0.95 }}
    onClick= {logout}
    className="
    px-4 xl:px-5
    py-3 xl:py-3
    rounded-2xl
    bg-gradient-to-r
    from-fuchsia-500
    via-violet-500
    to-cyan-500
    text-white
    font-semibold
    text-sm xl:text-base
    shadow-[0_12px_40px_rgba(168,85,247,0.35)]
    "
  >
    Logout
  </motion.button>
  </NavLink>}

            </div>

           

          </div>
        </div>

        {/* Mobile Menu */}
<div className="flex items-center gap-3 ml-auto lg:hidden absolute right-4 top-5">

  <NavLink
    to="/cart"
    className="
      p-2
      rounded-xl
      bg-white
      border
      border-slate-200
       hover:bg-slate-200
    transition
    "
  >
    <ShoppingCart size={19} />
  </NavLink>

  <button
    onClick={() => setMobileOpen(!mobileOpen)}
    className="
      p-1.5
      rounded-xl
      bg-white
      border
       hover:bg-slate-200
    transition
      border-slate-200
    "
  >
    {mobileOpen ? <X /> : <Menu />}
  </button>

</div>

{/* Mobile Menu */}

<AnimatePresence>
  {mobileOpen && (
    <motion.div
      initial={{
        opacity: 0,
        y: -20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: -20,
      }}
      className="
      lg:hidden

      bg-white/85
      
      backdrop-blur-2xl

      border-t
      border-slate-200
      "
    >
      <div className="p-6 flex flex-col gap-4">

        <SearchBar />
        {user?.role === "user" && <NavLink to="/user-dashboard"
          className="hover:bg-gradient-to-r p-3 rounded-xl from-fuchsia-200 via-violet-200 to-cyan-200 flex items-center gap-2"
          to="/user"
        >
          <User size={20} />
          Profile
        </NavLink>}

        {user?.role === "admin" && <NavLink to="/admin-dashboard"
          className="hover:bg-gradient-to-r p-3 rounded-xl from-fuchsia-200 via-violet-200 to-cyan-200 flex items-center gap-2"
          to="/admin"
        >
          <UserCog size={20} />
          Profile
        </NavLink>}

        <NavLink
          className="hover:bg-gradient-to-r p-3 rounded-xl from-fuchsia-200 via-violet-200 to-cyan-200"
          to="/"
        >
          Home
        </NavLink>

        <NavLink
          className="hover:bg-gradient-to-r p-3 rounded-xl from-fuchsia-200 via-violet-200 to-cyan-200"
          to="/shop"
        >
          Shop
        </NavLink>

        <NavLink
          className="hover:bg-gradient-to-r p-3 rounded-xl from-fuchsia-200 via-violet-200 to-cyan-200"
          to="/blog"
        >
          Blog
        </NavLink>

        <NavLink
          className="hover:bg-gradient-to-r p-3 rounded-xl from-fuchsia-200 via-violet-200 to-cyan-200"
          to="/contact"
        >
          Contact Us
        </NavLink>

        <NavLink
          className="hover:bg-gradient-to-r p-3 rounded-xl from-fuchsia-200 via-violet-200 to-cyan-200"
          to="/faq"
        >
          FAQ
        </NavLink>

        <NavLink
          className="hover:bg-gradient-to-r p-3 rounded-xl from-fuchsia-200 via-violet-200 to-cyan-200"
          to="/track-order"
        >
          Track Order
        </NavLink>

      

   {!user ? <NavLink to="/signup"
  onClick={() => setMobileOpen(false)}
  className="
    mt-3
    py-3
   
   rounded-full
     text-slate-700
                bg-gradient-to-r
    from-fuchsia-500
    via-violet-500
    to-cyan-500
    text-white
    
    shadow-[0_12px_40px_rgba(168,85,247,0.35)]
    font-semibold
    text-center
  "
>
  Sign Up
</NavLink>  : ""}


{user && <NavLink
  
    onClick= {logout}
    className="
    mt-3
    py-3
   
   rounded-full
     text-slate-700
                bg-gradient-to-r
    from-fuchsia-500
    via-violet-500
    to-cyan-500
    text-white
    
    shadow-[0_12px_40px_rgba(168,85,247,0.35)]
    font-semibold
    text-center
    "
  >
    Logout
 
  </NavLink>}

      </div>
    </motion.div>
  )}
</AnimatePresence>
      </nav>
    </header>
  );
}
export default Navbar;
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function Header() {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    const name = localStorage.getItem("userName");
    setIsLoggedIn(!!token);
    setUserName(name || "User");
  }, [location]);

  return (
    <header className="bg-white/80 backdrop-blur-xl border-b border-white/50 shadow-sm fixed top-0 w-full z-50 h-20">
      <nav className="flex justify-between items-center w-full px-4 lg:px-10 h-full max-w-[1280px] mx-auto">
        <Link to="/" className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-3xl">lens_blur</span>
          <span className="text-2xl font-bold text-primary">NutriGlass</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link 
            className={`text-sm transition-colors ${
              location.pathname === "/" 
                ? "text-primary font-bold border-b-2 border-primary pb-1" 
                : "text-on-surface-variant hover:text-primary"
            }`} 
            to="/"
          >
            Home
          </Link>
          <Link 
            className={`text-sm transition-colors ${
              location.pathname === "/planner" 
                ? "text-primary font-bold border-b-2 border-primary pb-1" 
                : "text-on-surface-variant hover:text-primary"
            }`} 
            to="/planner"
          >
            Diet Planner
          </Link>
          {isLoggedIn && (
            <Link 
              className={`text-sm transition-colors ${
                location.pathname === "/dashboard" 
                  ? "text-primary font-bold border-b-2 border-primary pb-1" 
                  : "text-on-surface-variant hover:text-primary"
              }`} 
              to="/dashboard"
            >
              Dashboard
            </Link>
          )}
          <Link 
            className={`text-sm transition-colors ${
              location.pathname === "/nutrition-tips" 
                ? "text-primary font-bold border-b-2 border-primary pb-1" 
                : "text-on-surface-variant hover:text-primary"
            }`} 
            to="/nutrition-tips"
          >
            Nutrition Tips
          </Link>
        </div>
        
        <div className="flex items-center gap-4">
          {isLoggedIn ? (
            <>
              <Link
                to="/settings"
                className="hidden sm:flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors"
              >
                <span className="material-symbols-outlined">settings</span>
              </Link>
              <Link
                to="/dashboard"
                className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full hover:bg-primary/20 transition-all"
              >
                <span className="material-symbols-outlined text-sm">person</span>
                <span className="font-semibold text-sm hidden sm:inline">{userName}</span>
              </Link>
            </>
          ) : (
            <>
              <Link 
                to="/login"
                className="text-on-surface-variant hover:text-primary transition-colors font-semibold text-sm"
              >
                Login
              </Link>
              <Link 
                to="/planner"
                className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all active:scale-95"
              >
                Get My Plan
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;

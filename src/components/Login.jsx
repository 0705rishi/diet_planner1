import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Validation
    if (!isLogin && formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      setLoading(false);
      return;
    }

    try {
      // Store user data in localStorage (no backend needed for MVP)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      localStorage.setItem("userToken", "demo_token_" + Date.now());
      localStorage.setItem("userName", formData.name || formData.email.split('@')[0]);
      localStorage.setItem("userEmail", formData.email);
      
      // Navigate to dashboard
      navigate("/dashboard");
    } catch (err) {
      setError("Authentication failed. Please try again.");
    }
    
    setLoading(false);
  };

  const handleGuestLogin = () => {
    // Create guest session
    const guestEmail = "guest" + Date.now() + "@nutriglass.com";
    localStorage.setItem("userToken", "guest_token_" + Date.now());
    localStorage.setItem("userName", "Guest User");
    localStorage.setItem("userEmail", guestEmail);
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-secondary-container/10 py-12 px-4">
      <div className="max-w-md w-full">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-block">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="material-symbols-outlined text-primary text-5xl">lens_blur</span>
            </div>
            <h1 className="text-3xl font-bold text-primary">NutriGlass</h1>
          </Link>
          <p className="text-on-surface-variant mt-2">Your Personalized Nutrition Journey</p>
        </div>

        {/* Login/Signup Card */}
        <div className="glass-card p-8 rounded-3xl shadow-xl">
          <div className="flex gap-2 mb-8">
            <button
              className={`flex-1 py-3 rounded-xl font-semibold text-sm transition-all ${
                isLogin
                  ? "bg-primary text-white shadow-md"
                  : "bg-surface-container text-on-surface-variant hover:bg-surface-container-high"
              }`}
              onClick={() => {
                setIsLogin(true);
                setError("");
                setFormData({ name: "", email: "", password: "", confirmPassword: "" });
              }}
            >
              Login
            </button>
            <button
              className={`flex-1 py-3 rounded-xl font-semibold text-sm transition-all ${
                !isLogin
                  ? "bg-primary text-white shadow-md"
                  : "bg-surface-container text-on-surface-variant hover:bg-surface-container-high"
              }`}
              onClick={() => {
                setIsLogin(false);
                setError("");
                setFormData({ name: "", email: "", password: "", confirmPassword: "" });
              }}
            >
              Sign Up
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <div className="space-y-2">
                <label className="text-sm font-semibold text-on-surface-variant">Full Name</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">person</span>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-surface-container-low border-none rounded-xl p-4 pl-12 focus:ring-2 focus:ring-primary/20 outline-none"
                    placeholder="John Doe"
                    required={!isLogin}
                  />
                </div>
              </div>
            )}

            <div className="space-y-2">
              <label className="text-sm font-semibold text-on-surface-variant">Email</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">mail</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-surface-container-low border-none rounded-xl p-4 pl-12 focus:ring-2 focus:ring-primary/20 outline-none"
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-on-surface-variant">Password</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">lock</span>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full bg-surface-container-low border-none rounded-xl p-4 pl-12 pr-12 focus:ring-2 focus:ring-primary/20 outline-none"
                  placeholder="••••••••"
                  required
                  minLength={6}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary"
                >
                  <span className="material-symbols-outlined">{showPassword ? "visibility_off" : "visibility"}</span>
                </button>
              </div>
            </div>

            {!isLogin && (
              <div className="space-y-2">
                <label className="text-sm font-semibold text-on-surface-variant">Confirm Password</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">lock</span>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="w-full bg-surface-container-low border-none rounded-xl p-4 pl-12 focus:ring-2 focus:ring-primary/20 outline-none"
                    placeholder="••••••••"
                    required={!isLogin}
                    minLength={6}
                  />
                </div>
              </div>
            )}

            {error && (
              <div className="bg-error/10 border border-error/20 text-error p-4 rounded-xl text-sm flex items-center gap-2">
                <span className="material-symbols-outlined">error</span>
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                  Processing...
                </span>
              ) : (
                <span>{isLogin ? "Login to Account" : "Create Account"}</span>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-outline-variant" />
            <span className="text-xs text-on-surface-variant font-semibold">OR CONTINUE WITH</span>
            <div className="flex-1 h-px bg-outline-variant" />
          </div>

          {/* Guest Access Button */}
          <button
            onClick={handleGuestLogin}
            className="w-full bg-primary/10 border border-primary/30 py-4 rounded-xl font-semibold flex items-center justify-center gap-3 hover:bg-primary/20 transition-all"
          >
            <span className="material-symbols-outlined text-primary">person_outline</span>
            Continue as Guest
          </button>

          {/* Google Login (Coming Soon) */}
          <div className="w-full bg-surface-container/50 border border-outline-variant/30 py-4 rounded-xl font-semibold flex items-center justify-center gap-3 opacity-60 cursor-not-allowed mt-2">
            <svg className="w-5 h-5 text-on-surface-variant" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span className="text-on-surface-variant text-sm">Google OAuth (Coming Soon)</span>
          </div>

          {!isLogin && (
            <p className="text-xs text-center text-on-surface-variant mt-6">
              By signing up, you agree to our{" "}
              <Link to="/terms" className="text-primary hover:underline font-semibold">Terms of Service</Link>
              {" "}and{" "}
              <Link to="/privacy" className="text-primary hover:underline font-semibold">Privacy Policy</Link>
            </p>
          )}
        </div>

        {/* Guest Access Link */}
        <div className="text-center mt-6">
          <button
            onClick={() => navigate("/")}
            className="text-on-surface-variant hover:text-primary transition-colors text-sm font-semibold flex items-center gap-1 mx-auto"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Continue as Guest
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;

import { useState, useEffect } from "react";
import Groq from "groq-sdk";
import "./App.css";

function App() {
  const [dietPlan, setDietPlan] = useState("");
  const [loading, setLoading] = useState(false);
  const [showDietPlan, setShowDietPlan] = useState(false);
  
  // BMI Calculator States
  const [height, setHeight] = useState(175);
  const [weight, setWeight] = useState(70);
  const [bmi, setBmi] = useState(22.9);
  const [bmiStatus, setBmiStatus] = useState("Healthy");
  const [bmiIndicatorPosition, setBmiIndicatorPosition] = useState(45.8);

  // Calculate BMI whenever height or weight changes
  useEffect(() => {
    const heightInMeters = height / 100;
    const calculatedBmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);
    setBmi(calculatedBmi);

    // Determine status and color
    if (calculatedBmi < 18.5) {
      setBmiStatus("Underweight");
      // Position in first segment (0-18.5%)
      const position = (calculatedBmi / 18.5) * 18.5;
      setBmiIndicatorPosition(position);
    } else if (calculatedBmi >= 18.5 && calculatedBmi < 25) {
      setBmiStatus("Healthy");
      // Position in second segment (18.5-50%)
      const position = 18.5 + ((calculatedBmi - 18.5) / (25 - 18.5)) * 31.5;
      setBmiIndicatorPosition(position);
    } else {
      setBmiStatus("Overweight");
      // Position in third segment (50-100%)
      const position = 50 + ((calculatedBmi - 25) / 15) * 50;
      setBmiIndicatorPosition(Math.min(position, 95));
    }
  }, [height, weight]);

  const generateDietPlan = async () => {
    setLoading(true);
    setShowDietPlan(true);

    try {
      const groq = new Groq({
        apiKey: import.meta.env.VITE_GROQ_API_KEY,
        dangerouslyAllowBrowser: true,
      });

      const chatCompletion = await groq.chat.completions.create({
        messages: [
          {
            role: "user",
            content: `
Generate a healthy vegetarian diet plan.

Details:
- Age: 20
- Weight: ${weight} kg
- Height: ${height} cm
- BMI: ${bmi}
- Goal: Muscle Gain
- Country: India
- Activity Level: Gym 5 days per week

Provide:
1. Daily calorie target
2. Macronutrients
3. Breakfast
4. Lunch
5. Evening Snack
6. Pre-Workout Meal
7. Post-Workout Meal
8. Dinner
9. Hydration Tips
            `,
          },
        ],
        model: "llama-3.3-70b-versatile",
      });

      setDietPlan(
        chatCompletion.choices[0]?.message?.content ||
          "No response received."
      );
    } catch (error) {
      console.error(error);
      setDietPlan("Error generating diet plan.");
    }

    setLoading(false);
  };

  const getBmiStatusClass = () => {
    if (bmiStatus === "Underweight") return "bg-secondary-container/20 text-secondary-container";
    if (bmiStatus === "Healthy") return "bg-primary/20 text-primary";
    return "bg-error/20 text-error";
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation Bar */}
      <header className="bg-white/80 backdrop-blur-xl border-b border-white/50 shadow-sm fixed top-0 w-full z-50 h-20">
        <nav className="flex justify-between items-center w-full px-4 lg:px-10 h-full max-w-[1280px] mx-auto">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-3xl">lens_blur</span>
            <span className="text-2xl font-bold text-primary">NutriGlass</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a className="text-primary font-bold border-b-2 border-primary pb-1 text-sm" href="#recipes">Recipes</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors text-sm" href="#plans">Meal Plans</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors text-sm" href="#tips">Nutrition Tips</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors text-sm" href="#guide">Health Guide</a>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setShowDietPlan(!showDietPlan)}
              className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all active:scale-95"
            >
              Get My Plan
            </button>
          </div>
        </nav>
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[870px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA2rdEri6Tg9MjeHRcpwvEmAw2ILTgMKwkO5xRhmUPWdCdhO2eY5NMSHd4uFfEjDoPe0aD7J6gdzdSg9aKSP3mPLoEv_q7_9Lyx_b9glo3KXSr6TB8wI2QIZNgqrgdDitJyaf5z-DbDUmV2XDuh1jjbczDWkM-kpitUWSDZjwrkW9vh2oyhJhTUHVRerQMVIdv78Q3RD7-nAwuhU5La1F1KjAhKZdizcQaHnCRZMoamTPT_rGQAnyPo')"
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/40 to-transparent" />
          </div>

          <div className="relative z-10 w-full max-w-[1280px] mx-auto px-4 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div className="max-w-2xl">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6">
                Smart Nutrition Intelligence
              </span>
              <h1 className="text-5xl lg:text-6xl font-bold text-on-background mb-6 leading-tight">
                Your Personalized Path to <span className="text-gradient">Better Nutrition</span>
              </h1>
              <p className="text-lg text-on-surface-variant mb-10 max-w-lg">
                Harness the power of glass-clear data to transform your eating habits. Tailored meal plans based on your unique body metrics.
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={generateDietPlan}
                  disabled={loading}
                  className="bg-primary text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-primary/20 transition-all disabled:opacity-50"
                >
                  {loading ? "Generating..." : "Start Your Journey"}
                </button>
                <button className="glass-card px-8 py-4 rounded-xl font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined">play_circle</span> Watch How It Works
                </button>
              </div>
            </div>

            {/* BMI Preview Widget */}
            <div className="lg:flex justify-end hidden">
              <div className="glass-card p-8 rounded-[2rem] w-full max-w-md">
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-2xl font-semibold">Quick BMI Check</h3>
                  <span className="material-symbols-outlined text-primary">monitoring</span>
                </div>
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm text-on-surface-variant font-semibold">Height (cm)</label>
                      <input 
                        className="w-full bg-surface-container-low border-none rounded-lg p-3 focus:ring-2 focus:ring-primary/20 outline-none"
                        type="number"
                        value={height}
                        onChange={(e) => setHeight(Number(e.target.value))}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-on-surface-variant font-semibold">Weight (kg)</label>
                      <input 
                        className="w-full bg-surface-container-low border-none rounded-lg p-3 focus:ring-2 focus:ring-primary/20 outline-none"
                        type="number"
                        value={weight}
                        onChange={(e) => setWeight(Number(e.target.value))}
                      />
                    </div>
                  </div>
                  <div className="pt-4 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-on-surface-variant font-semibold">Estimated BMI</p>
                      <p className="text-4xl font-bold text-primary">{bmi}</p>
                    </div>
                    <div className="text-right">
                      <span className={`px-3 py-1 rounded-full font-bold text-xs uppercase tracking-wider ${getBmiStatusClass()}`}>
                        {bmiStatus}
                      </span>
                    </div>
                  </div>
                  <div className="relative pt-4">
                    <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden flex">
                      <div className="h-full bg-secondary-container w-[18.5%]" />
                      <div className="h-full bg-primary w-[31.5%]" />
                      <div className="h-full bg-error w-[50%]" />
                    </div>
                    <div 
                      className="absolute top-2.5 w-1 h-4 bg-on-background rounded-full border-2 border-white transition-all duration-300"
                      style={{ left: `${bmiIndicatorPosition}%` }}
                    />
                  </div>
                  <button 
                    onClick={generateDietPlan}
                    disabled={loading}
                    className="w-full bg-primary text-white py-4 rounded-xl font-bold disabled:opacity-50"
                  >
                    {loading ? "Calculating..." : "Calculate Detailed Macros"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Diet Plan Display Section */}
        {showDietPlan && (
          <section className="py-24 bg-surface-bright">
            <div className="max-w-[1280px] mx-auto px-4 lg:px-10">
              <div className="glass-card p-8 lg:p-12 rounded-[2rem]">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-3xl font-bold">Your Personalized Diet Plan</h2>
                  <button 
                    onClick={() => setShowDietPlan(false)}
                    className="text-on-surface-variant hover:text-error transition-colors"
                  >
                    <span className="material-symbols-outlined text-3xl">close</span>
                  </button>
                </div>
                {loading ? (
                  <div className="flex flex-col items-center justify-center py-20">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary mb-4" />
                    <p className="text-on-surface-variant">Generating your personalized plan...</p>
                  </div>
                ) : (
                  <pre className="whitespace-pre-wrap text-left bg-surface-container-low p-6 rounded-xl overflow-auto max-h-[600px]">
                    {dietPlan || "Click 'Start Your Journey' or 'Calculate Detailed Macros' to generate your diet plan."}
                  </pre>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Features Bento Grid */}
        <section className="py-24 bg-surface-bright" id="plans">
          <div className="max-w-[1280px] mx-auto px-4 lg:px-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Precision Engineering for Your Health</h2>
              <p className="text-on-surface-variant max-w-2xl mx-auto">
                Everything you need to master your nutrition in one seamless, glassmorphic interface.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "restaurant", title: "Personalized Plans", desc: "AI-driven meal scheduling based on your biometric data and goals.", color: "primary" },
                { icon: "calculate", title: "Calorie Calc", desc: "Real-time calorie tracking with advanced database of 1M+ items.", color: "secondary-container" },
                { icon: "water_drop", title: "Hydration Log", desc: "Smart water tracking with automated reminders for peak performance.", color: "primary" },
                { icon: "bar_chart", title: "Macro Insights", desc: "Deep dive into your protein, carb, and fat ratios with visual charts.", color: "tertiary" },
                { icon: "grocery", title: "Smart Grocery", desc: "Generate optimized shopping lists from your weekly meal plan.", color: "primary" },
                { icon: "diversity_3", title: "Expert Coaching", desc: "Direct access to certified nutritionists within the glassmorphic hub.", color: "secondary-container" },
                { icon: "timer", title: "Fasting Tracker", desc: "Integrated intermittent fasting timers with phase notifications.", color: "primary" },
                { icon: "add", title: "Custom Goals", desc: "Define your own milestones and track what matters most to you.", color: "primary", dashed: true }
              ].map((feature, idx) => (
                <div key={idx} className={`glass-card p-6 rounded-2xl ${feature.dashed ? 'border-dashed border-2 border-primary/20 bg-primary/5 shadow-none hover:shadow-none' : ''}`}>
                  <div className={`w-12 h-12 bg-${feature.color}/10 rounded-xl flex items-center justify-center mb-6`}>
                    <span className={`material-symbols-outlined text-${feature.color}`}>{feature.icon}</span>
                  </div>
                  <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                  <p className="text-on-surface-variant">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Nutrition Tips Grid */}
        <section className="py-24 overflow-hidden" id="tips">
          <div className="max-w-[1280px] mx-auto px-4 lg:px-10">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-4xl font-bold">Daily Nutrition Wisdom</h2>
                <p className="text-on-surface-variant">Evidence-based insights for a healthier lifestyle.</p>
              </div>
              <button className="text-primary font-bold flex items-center gap-1 group">
                Explore All Tips <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCoglcyqt7-WzxdvOFQC_RSEqHIDxIXlYxkK25rlQmzCxs1U14lxcB1y-2ijD2lNM18jQPtNGd4JbnqncRWIbP3bPIhf3NgHucKOxrwI7cBXXewIHcldE6T-ZxkbMJ7rk__RBdlMX_0Ched76cbCI2Q-J9bda9T2BmdeoSh2xdDmS_zqaAv2UYWPh7W80dy_DfbdLcuh905eI6lRQhw-hOXU1ESdLQHpm-23sAAr5UneJzHpObP9BLe", tag: "PORTION CONTROL", title: "Mastering Plate Ratios", desc: "Learn the 'Half Plate' rule to naturally manage calories without counting everything." },
                { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAggkaxrojmPFACEqoMkDoMwEQBOUeNNwefVOopXXUlt4I03AWTay_E7okRr8cK3HN4_hC6XXBLWliANJTWbMwCQ9i2EwQqyuzG6aMhFcRrzkoCVn9ic6Wm-bYkQEWBVfPop_zJFuQYFRULuoJxhMsmnw4ADeHqLtCfTuOBFS_QZ51qnkjrbQJj--zXC1Wm-lzXEG4Ctn4kNcTsNWOdXBHLgSCyJtwcNnYT2PO5PM3Lqr1sQB7xFYWI", tag: "WEIGHT LOSS", title: "Protein for Satiety", desc: "Why starting your day with 30g of protein is the ultimate weight management hack." },
                { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuATFx8MMtaxXovRCreyAk9-hJVDqB0OwzWMPBQR-tIOvSZk86WYIxD553g6JmYXkIBRiOPm5AC3biX1E6FYPGHbKtopopvsimhvDZt2FLW5WiHbacxPw94JXaX-0xBRK7odjKYAlW23na1HSc-fHWw9fweW2Yr7O_y3hEoaIZkyWaLy_cCEowL3ca6xn5j4VaaGzoSzm8kJ6qYPmxna-WZiUAW6FSS3eZUIoEuXcTUgQJc79EhbOsGn", tag: "HYDRATION", title: "The Water-Metabolism Link", desc: "How optimal hydration can boost your resting metabolic rate by up to 30%." }
              ].map((tip, idx) => (
                <div key={idx} className="group cursor-pointer">
                  <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url('${tip.img}')` }}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary">{tip.tag}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{tip.title}</h3>
                  <p className="text-on-surface-variant">{tip.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5" />
          <div className="relative z-10 max-w-[1280px] mx-auto px-4 lg:px-10">
            <div className="glass-card p-12 lg:p-20 rounded-[3rem] text-center max-w-4xl mx-auto border-white/80">
              <span className="material-symbols-outlined text-5xl text-primary mb-6 inline-block">mail</span>
              <h2 className="text-4xl font-bold mb-6">Join the NutriGlass Community</h2>
              <p className="text-lg text-on-surface-variant mb-10">
                Get weekly meal prep guides, exclusive nutritional breakdowns, and 15% off your first premium plan.
              </p>
              <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
                <input 
                  className="flex-grow bg-white border border-outline-variant/30 rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary/20 outline-none"
                  placeholder="Your email address"
                  type="email"
                />
                <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold whitespace-nowrap hover:scale-[1.02] active:scale-95 transition-all">
                  Subscribe Now
                </button>
              </form>
              <p className="text-xs mt-6 text-on-surface-variant/60">We respect your privacy. Unsubscribe at any time.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-highest border-t border-outline-variant">
        <div className="w-full py-12 px-4 lg:px-10 max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-3xl">lens_blur</span>
              <span className="text-2xl font-black text-primary">NutriGlass</span>
            </div>
            <p className="text-sm text-on-surface-variant text-center md:text-left max-w-xs">
              © 2024 NutriGlass Premium. All rights reserved. Crafted for health-conscious living.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <a className="text-on-surface-variant hover:text-secondary transition-colors text-sm" href="#">Privacy Policy</a>
            <a className="text-on-surface-variant hover:text-secondary transition-colors text-sm" href="#">Terms of Service</a>
            <a className="text-on-surface-variant hover:text-secondary transition-colors text-sm" href="#">Cookie Policy</a>
            <a className="text-on-surface-variant hover:text-secondary transition-colors text-sm" href="#">Support Center</a>
          </div>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-outline-variant/30 hover:text-primary transition-colors cursor-pointer">
              <span className="material-symbols-outlined">public</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-outline-variant/30 hover:text-primary transition-colors cursor-pointer">
              <span className="material-symbols-outlined">smartphone</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
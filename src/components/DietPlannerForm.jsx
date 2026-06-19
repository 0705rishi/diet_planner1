import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Groq from "groq-sdk";

function DietPlannerForm() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  // Form data
  const [formData, setFormData] = useState({
    age: "",
    gender: "male",
    height: "",
    weight: "",
    activity: "1.2",
    goal: 0,
    diet: "anything"
  });

  // Calculated stats
  const [calories, setCalories] = useState(2450);
  const [protein, setProtein] = useState(153);
  const [carbs, setCarbs] = useState(306);
  const [fats, setFats] = useState(68);
  const [loading, setLoading] = useState(false);

  // Calculate macros using Mifflin-St Jeor Equation
  useEffect(() => {
    const age = parseFloat(formData.age) || 25;
    const weight = parseFloat(formData.weight) || 70;
    const height = parseFloat(formData.height) || 170;
    const gender = formData.gender;
    const activity = parseFloat(formData.activity) || 1.2;

    let bmr;
    if (gender === "male") {
      bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
    } else {
      bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
    }

    const maintenance = bmr * activity;
    const target = Math.round(maintenance + formData.goal);

    setCalories(target);

    // Macro breakdown (25% P, 50% C, 25% F)
    const proteinCalc = Math.round((target * 0.25) / 4);
    const carbsCalc = Math.round((target * 0.50) / 4);
    const fatsCalc = Math.round((target * 0.25) / 9);

    setProtein(proteinCalc);
    setCarbs(carbsCalc);
    setFats(fatsCalc);
  }, [formData]);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleGoalSelect = (goalValue) => {
    setFormData(prev => ({ ...prev, goal: goalValue }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const groq = new Groq({
        apiKey: import.meta.env.VITE_GROQ_API_KEY,
        dangerouslyAllowBrowser: true,
      });

      const goalText = formData.goal < 0 ? "Weight Loss" : formData.goal > 0 ? "Muscle Gain" : "Maintain Weight";

      const chatCompletion = await groq.chat.completions.create({
        messages: [
          {
            role: "user",
            content: `
Generate a personalized diet plan.

Details:
- Age: ${formData.age}
- Gender: ${formData.gender}
- Height: ${formData.height} cm
- Weight: ${formData.weight} kg
- Activity Level: ${formData.activity}
- Goal: ${goalText}
- Diet Type: ${formData.diet}
- Target Calories: ${calories} kcal
- Protein: ${protein}g
- Carbs: ${carbs}g
- Fats: ${fats}g

Provide a detailed plan with:
1. Daily calorie target and macro breakdown
2. Breakfast
3. Lunch
4. Dinner
5. Snacks
6. Hydration tips
7. Specific food recommendations based on diet type
            `,
          },
        ],
        model: "llama-3.3-70b-versatile",
      });

      const plan = chatCompletion.choices[0]?.message?.content || "No response received.";
      
      // Store the plan in localStorage and navigate to dashboard
      localStorage.setItem("dietPlan", plan);
      localStorage.setItem("userStats", JSON.stringify({
        calories,
        protein,
        carbs,
        fats,
        ...formData
      }));
      
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      alert("Error generating diet plan. Please try again.");
    }

    setLoading(false);
  };

  const progressWidth = (currentStep / totalSteps) * 100;

  return (
    <div className="flex-grow w-full max-w-[1280px] mx-auto px-4 lg:px-10 py-12 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-container/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 -left-24 w-80 h-80 bg-secondary-container/10 rounded-full blur-3xl -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Form */}
        <div className="lg:col-span-7 flex flex-col gap-10">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-on-surface">
              Craft Your Perfect <span className="text-primary">Metabolic Path</span>.
            </h1>
            <p className="text-lg text-on-surface-variant max-w-xl">
              Every body is unique. Tell us about yourself, and our engine will calculate the precise nutrition you need to thrive.
            </p>
          </div>

          {/* Multi-Step Form Container */}
          <div className="glass-card rounded-3xl p-8 md:p-10 relative overflow-hidden border border-white/50">
            {/* Progress Bar */}
            <div className="w-full h-1.5 bg-surface-container rounded-full mb-10 overflow-hidden">
              <div 
                className="h-full bg-primary transition-all duration-500 ease-out"
                style={{ width: `${progressWidth}%` }}
              />
            </div>

            <form className="space-y-8" onSubmit={handleSubmit}>
              {/* Step 1: Physical Data */}
              {currentStep === 1 && (
                <div className="step-transition">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="material-symbols-outlined text-primary">person</span>
                    <h3 className="text-2xl font-semibold">Your Profile</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm text-on-surface-variant block font-semibold">Age</label>
                      <input
                        className="w-full bg-surface-container-low border-none rounded-xl p-4 focus:bg-white transition-all outline-none focus:ring-2 focus:ring-primary/20"
                        type="number"
                        min="15"
                        max="100"
                        placeholder="e.g. 28"
                        value={formData.age}
                        onChange={(e) => handleInputChange("age", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-on-surface-variant block font-semibold">Gender</label>
                      <select
                        className="w-full bg-surface-container-low border-none rounded-xl p-4 focus:bg-white transition-all outline-none focus:ring-2 focus:ring-primary/20"
                        value={formData.gender}
                        onChange={(e) => handleInputChange("gender", e.target.value)}
                      >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-on-surface-variant block font-semibold">Height (cm)</label>
                      <input
                        className="w-full bg-surface-container-low border-none rounded-xl p-4 focus:bg-white transition-all outline-none focus:ring-2 focus:ring-primary/20"
                        type="number"
                        placeholder="e.g. 175"
                        value={formData.height}
                        onChange={(e) => handleInputChange("height", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-on-surface-variant block font-semibold">Weight (kg)</label>
                      <input
                        className="w-full bg-surface-container-low border-none rounded-xl p-4 focus:bg-white transition-all outline-none focus:ring-2 focus:ring-primary/20"
                        type="number"
                        placeholder="e.g. 70"
                        value={formData.weight}
                        onChange={(e) => handleInputChange("weight", e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Lifestyle */}
              {currentStep === 2 && (
                <div className="step-transition">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="material-symbols-outlined text-primary">fitness_center</span>
                    <h3 className="text-2xl font-semibold">Activity & Goals</h3>
                  </div>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-sm text-on-surface-variant block font-semibold">Activity Level</label>
                      <select
                        className="w-full bg-surface-container-low border-none rounded-xl p-4 focus:bg-white transition-all outline-none focus:ring-2 focus:ring-primary/20"
                        value={formData.activity}
                        onChange={(e) => handleInputChange("activity", e.target.value)}
                      >
                        <option value="1.2">Sedentary (Little to no exercise)</option>
                        <option value="1.375">Light (1-3 days/week)</option>
                        <option value="1.55">Moderate (3-5 days/week)</option>
                        <option value="1.725">Active (6-7 days/week)</option>
                        <option value="1.9">Very Active (Physical job/Pro athlete)</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-on-surface-variant block font-semibold">Health Goal</label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {[
                          { label: "Lose", value: -500 },
                          { label: "Maintain", value: 0 },
                          { label: "Gain", value: 500 },
                          { label: "Muscle", value: 300 }
                        ].map((goal) => (
                          <button
                            key={goal.value}
                            type="button"
                            className={`border-2 p-4 rounded-xl text-center hover:border-primary transition-all ${
                              formData.goal === goal.value
                                ? "border-primary bg-primary/10"
                                : "border-outline-variant"
                            }`}
                            onClick={() => handleGoalSelect(goal.value)}
                          >
                            <span className="block font-semibold text-sm">{goal.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Dietary Preferences */}
              {currentStep === 3 && (
                <div className="step-transition">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="material-symbols-outlined text-primary">restaurant</span>
                    <h3 className="text-2xl font-semibold">Food Philosophy</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: "Anything", value: "anything" },
                      { label: "Vegetarian", value: "vegetarian" },
                      { label: "Vegan", value: "vegan" },
                      { label: "Keto", value: "keto" }
                    ].map((diet) => (
                      <label
                        key={diet.value}
                        className="flex items-center gap-3 p-4 border border-outline-variant rounded-xl cursor-pointer hover:bg-surface-container transition-all"
                      >
                        <input
                          className="text-primary focus:ring-primary"
                          type="radio"
                          name="diet"
                          value={diet.value}
                          checked={formData.diet === diet.value}
                          onChange={(e) => handleInputChange("diet", e.target.value)}
                        />
                        <span className="font-semibold text-sm">{diet.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Form Navigation */}
              <div className="flex justify-between items-center pt-6">
                <button
                  type="button"
                  className={`text-on-surface-variant font-semibold text-sm hover:text-primary flex items-center gap-2 ${
                    currentStep === 1 ? "invisible" : ""
                  }`}
                  onClick={prevStep}
                >
                  <span className="material-symbols-outlined">arrow_back</span> Back
                </button>
                <div className="flex-grow" />
                {currentStep < totalSteps ? (
                  <button
                    type="button"
                    className="bg-primary text-white px-8 py-4 rounded-full font-semibold text-sm flex items-center gap-3 hover:shadow-lg transition-all active:scale-95 group"
                    onClick={nextStep}
                  >
                    Next Step <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-secondary text-white px-8 py-4 rounded-full font-semibold text-sm flex items-center gap-3 hover:shadow-lg transition-all active:scale-95 disabled:opacity-50"
                  >
                    {loading ? "Generating..." : "Generate My Plan"} <span className="material-symbols-outlined">auto_awesome</span>
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>

        {/* Right Column: Real-time Stats */}
        <div className="lg:col-span-5 flex flex-col gap-8 sticky top-28">
          <div className="glass-card rounded-3xl p-8 border border-primary/20 bg-primary/5">
            <div className="flex justify-between items-center mb-10">
              <h4 className="text-2xl font-semibold text-on-surface">Daily Pulse</h4>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-wider">
                Estimated
              </span>
            </div>
            <div className="flex flex-col items-center gap-8 mb-12">
              {/* Calorie Ring */}
              <div className="relative flex items-center justify-center w-48 h-48">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  <circle
                    className="text-primary/10 stroke-current"
                    cx="50"
                    cy="50"
                    fill="transparent"
                    r="40"
                    strokeWidth="8"
                  />
                  <circle
                    className="text-primary stroke-current transition-all duration-700"
                    cx="50"
                    cy="50"
                    fill="transparent"
                    r="40"
                    strokeLinecap="round"
                    strokeWidth="8"
                    strokeDasharray="251.2"
                    strokeDashoffset={251.2 - (Math.min(calories / 4000, 1) * 251.2)}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <span className="text-4xl font-bold leading-tight">{calories.toLocaleString()}</span>
                  <span className="text-on-surface-variant font-semibold text-sm">kcal / day</span>
                </div>
              </div>
            </div>

            {/* Macro Breakdown */}
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-on-surface-variant font-semibold">Protein</span>
                  <span className="text-sm font-bold">{protein}g</span>
                </div>
                <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden">
                  <div className="h-full bg-primary transition-all duration-700" style={{ width: "25%" }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-on-surface-variant font-semibold">Carbs</span>
                  <span className="text-sm font-bold">{carbs}g</span>
                </div>
                <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden">
                  <div className="h-full bg-secondary-container transition-all duration-700" style={{ width: "50%" }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-on-surface-variant font-semibold">Fats</span>
                  <span className="text-sm font-bold">{fats}g</span>
                </div>
                <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden">
                  <div className="h-full bg-tertiary-container transition-all duration-700" style={{ width: "25%" }} />
                </div>
              </div>
            </div>
          </div>

          {/* Info Card */}
          <div className="glass-card rounded-2xl p-6 flex gap-4 items-start">
            <div className="w-12 h-12 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined">lightbulb</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-on-surface">Did you know?</p>
              <p className="text-xs text-on-surface-variant mt-1">
                High protein intake helps preserve lean muscle mass even during a calorie deficit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DietPlannerForm;

import { useState } from "react";

function NutritionTips() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", name: "All Tips", icon: "grid_view" },
    { id: "weight-loss", name: "Weight Loss", icon: "trending_down" },
    { id: "muscle-gain", name: "Muscle Gain", icon: "fitness_center" },
    { id: "hydration", name: "Hydration", icon: "water_drop" },
    { id: "nutrition", name: "Nutrition", icon: "nutrition" },
    { id: "wellness", name: "Wellness", icon: "favorite" }
  ];

  const tips = [
    {
      id: 1,
      category: "weight-loss",
      title: "Mastering Plate Ratios",
      description: "Learn the 'Half Plate' rule to naturally manage calories without counting everything.",
      content: "Fill half your plate with non-starchy vegetables, one quarter with lean protein, and one quarter with complex carbohydrates. This simple visual guide helps control portions naturally.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCoglcyqt7-WzxdvOFQC_RSEqHIDxIXlYxkK25rlQmzCxs1U14lxcB1y-2ijD2lNM18jQPtNGd4JbnqncRWIbP3bPIhf3NgHucKOxrwI7cBXXewIHcldE6T-ZxkbMJ7rk__RBdlMX_0Ched76cbCI2Q-J9bda9T2BmdeoSh2xdDmS_zqaAv2UYWPh7W80dy_DfbdLcuh905eI6lRQhw-hOXU1ESdLQHpm-23sAAr5UneJzHpObP9BLe",
      readTime: "3 min",
      tips: [
        "Use smaller plates to naturally reduce portion sizes",
        "Start with vegetables to fill up on fewer calories",
        "Measure portions until you can eyeball accurately",
        "Avoid eating directly from packages"
      ]
    },
    {
      id: 2,
      category: "muscle-gain",
      title: "Protein for Satiety",
      description: "Why starting your day with 30g of protein is the ultimate weight management hack.",
      content: "High protein breakfast increases satiety hormones, reduces hunger, and helps preserve muscle mass during weight loss. Aim for 30g within an hour of waking.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAggkaxrojmPFACEqoMkDoMwEQBOUeNNwefVOopXXUlt4I03AWTay_E7okRr8cK3HN4_hC6XXBLWliANJTWbMwCQ9i2EwQqyuzG6aMhFcRrzkoCVn9ic6Wm-bYkQEWBVfPop_zJFuQYFRULuoJxhMsmnw4ADeHqLtCfTuOBFS_QZ51qnkjrbQJj--zXC1Wm-lzXEG4Ctn4kNcTsNWOdXBHLgSCyJtwcNnYT2PO5PM3Lqr1sQB7xFYWI",
      readTime: "4 min",
      tips: [
        "Include eggs, Greek yogurt, or protein shake",
        "Spread protein evenly throughout the day",
        "Aim for 1.6-2.2g per kg of body weight",
        "Combine with resistance training for best results"
      ]
    },
    {
      id: 3,
      category: "hydration",
      title: "The Water-Metabolism Link",
      description: "How optimal hydration can boost your resting metabolic rate by up to 30%.",
      content: "Drinking water increases energy expenditure. Studies show 500ml of water can boost metabolism by 30% for about an hour. Aim for 8-10 glasses daily.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuATFx8MMtaxXovRCreyAk9-hJVDqB0OwzWMPBQR-tIOvSZk86WYIxD553g6JmYXkIBRiOPm5AC3biX1E6FYPGHbKtopopvsimhvDZt2FLW5WiHbacxPw94JXaX-0xBRK7odjKYAlW23na1HSc-fHWw9fweW2Yr7O_y3hEoaIZkyWaLy_cCEowL3ca6xn5j4VaaGzoSzm8kJ6qYPmxna-WZiUAW6FSS3eZUIoEuXcTUgQJc79EhbOsGn",
      readTime: "3 min",
      tips: [
        "Drink water before meals to eat less",
        "Keep a water bottle with you always",
        "Set reminders every 2 hours",
        "Eat water-rich foods like cucumbers and watermelon"
      ]
    },
    {
      id: 4,
      category: "nutrition",
      title: "Micronutrient Magic",
      description: "Essential vitamins and minerals that most people are deficient in.",
      content: "Vitamin D, Magnesium, Omega-3, and B12 are commonly deficient. These play crucial roles in energy, mood, bone health, and immune function.",
      readTime: "5 min",
      tips: [
        "Get 15 minutes of sunlight daily for Vitamin D",
        "Include fatty fish twice weekly for Omega-3",
        "Eat dark leafy greens for Magnesium",
        "Consider supplements after blood tests"
      ]
    },
    {
      id: 5,
      category: "weight-loss",
      title: "Sleep and Weight Connection",
      description: "Why 7-9 hours of quality sleep is crucial for fat loss.",
      content: "Poor sleep disrupts hunger hormones (ghrelin and leptin), increases cravings for high-calorie foods, and reduces willpower. Prioritize sleep for better results.",
      readTime: "4 min",
      tips: [
        "Maintain consistent sleep schedule",
        "Avoid screens 1 hour before bed",
        "Keep bedroom cool (65-68°F)",
        "Stop caffeine after 2 PM"
      ]
    },
    {
      id: 6,
      category: "wellness",
      title: "Stress and Cortisol Management",
      description: "How chronic stress sabotages your health goals.",
      content: "Elevated cortisol from stress promotes belly fat storage, increases cravings, and impairs muscle recovery. Manage stress through meditation, exercise, and adequate rest.",
      readTime: "5 min",
      tips: [
        "Practice 10 minutes of meditation daily",
        "Include regular physical activity",
        "Take short breaks throughout day",
        "Maintain social connections"
      ]
    },
    {
      id: 7,
      category: "nutrition",
      title: "Meal Timing Matters",
      description: "Optimize your eating window for better results.",
      content: "Eating within a consistent 10-12 hour window aligns with circadian rhythm, improves digestion, and can enhance fat burning. Try eating between 8 AM and 6 PM.",
      readTime: "4 min",
      tips: [
        "Don't skip breakfast",
        "Avoid late-night eating",
        "Space meals 3-4 hours apart",
        "Consider intermittent fasting if suitable"
      ]
    },
    {
      id: 8,
      category: "muscle-gain",
      title: "Post-Workout Nutrition",
      description: "The 30-minute anabolic window explained.",
      content: "While not as critical as once thought, post-workout nutrition helps recovery. Aim for protein within 2 hours and carbs to replenish glycogen stores.",
      readTime: "3 min",
      tips: [
        "Consume 20-40g protein post-workout",
        "Add fast-digesting carbs after intense training",
        "Stay hydrated during and after exercise",
        "Time overall daily nutrition matters most"
      ]
    }
  ];

  const filteredTips = tips.filter(tip => {
    const matchesCategory = selectedCategory === "all" || tip.category === selectedCategory;
    const matchesSearch = tip.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tip.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-[1280px] mx-auto px-4 lg:px-10 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-on-surface mb-4">
          Nutrition <span className="text-primary">Tips & Insights</span>
        </h1>
        <p className="text-lg text-on-surface-variant max-w-3xl">
          Evidence-based nutrition guidance to help you achieve your health goals. Learn from experts and apply proven strategies.
        </p>
      </div>

      {/* Search Bar */}
      <div className="glass-card rounded-2xl p-4 mb-8">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-on-surface-variant">search</span>
          <input
            type="text"
            placeholder="Search tips..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none text-on-surface"
          />
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex gap-3 mb-8 overflow-x-auto pb-4 hide-scrollbar">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm whitespace-nowrap transition-all ${
              selectedCategory === category.id
                ? "bg-primary text-white shadow-lg"
                : "bg-surface-container text-on-surface-variant hover:bg-surface-container-high"
            }`}
          >
            <span className="material-symbols-outlined text-lg">{category.icon}</span>
            {category.name}
          </button>
        ))}
      </div>

      {/* Tips Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredTips.map((tip) => (
          <div key={tip.id} className="glass-card rounded-2xl overflow-hidden group cursor-pointer hover:shadow-xl transition-all">
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${tip.image}')` }}
              />
              <div className="absolute top-4 left-4">
                <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary uppercase">
                  {tip.category.replace('-', ' ')}
                </span>
              </div>
              <div className="absolute bottom-4 right-4">
                <span className="bg-black/60 backdrop-blur px-3 py-1 rounded-full text-xs text-white flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">schedule</span>
                  {tip.readTime}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {tip.title}
              </h3>
              <p className="text-on-surface-variant text-sm mb-4">
                {tip.description}
              </p>
              <p className="text-on-surface text-sm mb-4 line-clamp-3">
                {tip.content}
              </p>

              {/* Key Tips */}
              <div className="space-y-2 mb-4">
                <p className="text-xs font-bold text-on-surface-variant uppercase">Key Takeaways:</p>
                <ul className="space-y-1">
                  {tip.tips.slice(0, 2).map((keyTip, idx) => (
                    <li key={idx} className="text-sm text-on-surface-variant flex items-start gap-2">
                      <span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span>
                      <span className="flex-1">{keyTip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className="w-full py-3 rounded-xl border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2 group">
                Read Full Article
                <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredTips.length === 0 && (
        <div className="text-center py-20">
          <span className="material-symbols-outlined text-6xl text-on-surface-variant mb-4">search_off</span>
          <h3 className="text-2xl font-bold text-on-surface mb-2">No tips found</h3>
          <p className="text-on-surface-variant">Try adjusting your search or filter</p>
        </div>
      )}

      {/* Newsletter CTA */}
      <div className="glass-card rounded-3xl p-12 mt-16 text-center bg-primary/5">
        <span className="material-symbols-outlined text-5xl text-primary mb-4 inline-block">mail</span>
        <h2 className="text-3xl font-bold mb-4">Get Weekly Nutrition Tips</h2>
        <p className="text-on-surface-variant mb-8 max-w-2xl mx-auto">
          Subscribe to receive expert nutrition advice, healthy recipes, and exclusive wellness content directly in your inbox.
        </p>
        <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 bg-white border border-outline-variant rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary/20 outline-none"
          />
          <button className="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary/90 transition-all whitespace-nowrap">
            Subscribe
          </button>
        </form>
        <p className="text-xs text-on-surface-variant mt-4">
          Join 10,000+ health enthusiasts. Unsubscribe anytime.
        </p>
      </div>
    </div>
  );
}

export default NutritionTips;

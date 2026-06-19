import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const [dietPlan, setDietPlan] = useState("");
  const [userStats, setUserStats] = useState({
    calories: 2450,
    protein: 153,
    carbs: 306,
    fats: 68
  });

  useEffect(() => {
    const plan = localStorage.getItem("dietPlan");
    const stats = localStorage.getItem("userStats");
    
    if (plan) {
      setDietPlan(plan);
    }
    
    if (stats) {
      setUserStats(JSON.parse(stats));
    }
  }, []);

  return (
    <div className="max-w-[1280px] mx-auto flex min-h-screen px-4 lg:px-10 gap-6 py-8">
      {/* Sidebar Navigation */}
      <aside className="hidden lg:flex flex-col w-64 shrink-0 gap-6">
        <div className="glass-card rounded-xl p-6 flex flex-col gap-4">
          <h3 className="text-sm font-semibold text-on-surface-variant px-2">OVERVIEW</h3>
          <nav className="flex flex-col gap-1">
            <a className="sidebar-item-active flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary-container/10 text-primary font-semibold text-sm" href="#">
              <span className="material-symbols-outlined">dashboard</span>My Progress
            </a>
            <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors font-semibold text-sm" href="#">
              <span className="material-symbols-outlined">analytics</span>Advanced Stats
            </a>
            <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors font-semibold text-sm" href="#">
              <span className="material-symbols-outlined">restaurant</span>Log Meals
            </a>
            <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors font-semibold text-sm" href="#">
              <span className="material-symbols-outlined">fitness_center</span>Workouts
            </a>
          </nav>
          <h3 className="text-sm font-semibold text-on-surface-variant px-2 mt-4">ACCOUNT</h3>
          <nav className="flex flex-col gap-1">
            <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors font-semibold text-sm" href="#">
              <span className="material-symbols-outlined">settings</span>Settings
            </a>
            <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors font-semibold text-sm" href="#">
              <span className="material-symbols-outlined">help_outline</span>Support
            </a>
          </nav>
        </div>

        <div className="glass-card rounded-xl p-6 bg-primary-fixed-dim/5 relative overflow-hidden">
          <div className="relative z-10">
            <p className="text-sm text-primary font-bold">Premium Goal</p>
            <p className="text-xs text-on-surface-variant mt-1">Unlock expert-led macro tracking.</p>
            <button className="mt-4 w-full bg-primary text-white py-2 rounded-lg font-semibold text-sm">
              Upgrade Now
            </button>
          </div>
          <div className="absolute -right-4 -bottom-4 opacity-10">
            <span className="material-symbols-outlined text-8xl">military_tech</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col gap-8">
        {/* Hero Header */}
        <section className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="flex flex-col">
            <h1 className="text-4xl font-bold text-on-surface">Good Morning, Alex</h1>
            <p className="text-on-surface-variant max-w-xl mt-2">
              You've reached <span className="text-primary font-bold">85%</span> of your weekly hydration goal. Keep it up!
            </p>
          </div>
          <div className="flex items-center gap-3 glass-card rounded-full px-4 py-2 border border-outline-variant/30">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-primary/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary">person</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold">Alex Rivera</span>
              <span className="text-xs text-primary">Pro Member</span>
            </div>
          </div>
        </section>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Hydration */}
          <div className="glass-card rounded-2xl p-6 flex flex-col items-center justify-between min-h-[220px]">
            <div className="w-full flex justify-between items-center mb-4">
              <span className="text-sm text-on-surface-variant font-semibold">Hydration</span>
              <span className="material-symbols-outlined text-primary">water_drop</span>
            </div>
            <div className="relative flex items-center justify-center">
              <svg className="w-32 h-32 -rotate-90">
                <circle className="text-primary/10" cx="64" cy="64" fill="transparent" r="58" stroke="currentColor" strokeWidth="8" />
                <circle className="text-primary" cx="64" cy="64" fill="transparent" r="58" stroke="currentColor" strokeDasharray="364.4" strokeDashoffset="54.6" strokeLinecap="round" strokeWidth="8" />
              </svg>
              <div className="absolute flex flex-col items-center">
                <span className="text-2xl font-bold text-on-surface">2.1</span>
                <span className="text-xs text-on-surface-variant">/ 2.5L</span>
              </div>
            </div>
            <button className="mt-4 text-primary font-semibold text-sm hover:underline">+ Log 250ml</button>
          </div>

          {/* Daily Goal */}
          <div className="glass-card rounded-2xl p-6 flex flex-col items-center justify-between min-h-[220px]">
            <div className="w-full flex justify-between items-center mb-4">
              <span className="text-sm text-on-surface-variant font-semibold">Daily Goal</span>
              <span className="material-symbols-outlined text-secondary">emoji_events</span>
            </div>
            <div className="relative flex items-center justify-center">
              <svg className="w-32 h-32 -rotate-90">
                <circle className="text-secondary/10" cx="64" cy="64" fill="transparent" r="58" stroke="currentColor" strokeWidth="8" />
                <circle className="text-secondary" cx="64" cy="64" fill="transparent" r="58" stroke="currentColor" strokeDasharray="364.4" strokeDashoffset="91.1" strokeLinecap="round" strokeWidth="8" />
              </svg>
              <div className="absolute flex flex-col items-center">
                <span className="text-2xl font-bold text-on-surface">75%</span>
                <span className="text-xs text-on-surface-variant">Complete</span>
              </div>
            </div>
            <span className="mt-4 text-sm text-on-surface-variant">Step Goal: 8,421 / 10k</span>
          </div>

          {/* Calorie Intake */}
          <div className="glass-card rounded-2xl p-6 flex flex-col justify-between min-h-[220px]">
            <div className="w-full flex justify-between items-center mb-4">
              <span className="text-sm text-on-surface-variant font-semibold">Calorie Intake</span>
              <span className="material-symbols-outlined text-tertiary">nutrition</span>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-end">
                <span className="text-2xl font-bold text-on-surface">1,640</span>
                <span className="text-xs text-on-surface-variant">/ {userStats.calories} kcal</span>
              </div>
              <div className="w-full h-3 bg-surface-container-high rounded-full overflow-hidden">
                <div className="h-full bg-primary-container w-[78%] rounded-full" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 mt-4 text-center">
              <div>
                <p className="text-xs text-on-surface-variant">P</p>
                <p className="text-sm font-semibold">{userStats.protein}g</p>
              </div>
              <div>
                <p className="text-xs text-on-surface-variant">C</p>
                <p className="text-sm font-semibold">{userStats.carbs}g</p>
              </div>
              <div>
                <p className="text-xs text-on-surface-variant">F</p>
                <p className="text-sm font-semibold">{userStats.fats}g</p>
              </div>
            </div>
          </div>
        </div>

        {/* Your Diet Plan Section */}
        {dietPlan && (
          <div className="glass-card rounded-2xl p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Your Personalized Diet Plan</h2>
              <button 
                onClick={() => navigate("/planner")}
                className="text-primary font-semibold text-sm hover:underline"
              >
                Edit Plan
              </button>
            </div>
            <pre className="whitespace-pre-wrap text-left bg-surface-container-low p-6 rounded-xl overflow-auto max-h-[600px] text-sm">
              {dietPlan}
            </pre>
          </div>
        )}

        {/* Activity Feed */}
        <section className="glass-card rounded-2xl p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Activity Feed</h2>
            <button className="text-primary font-semibold text-sm hover:underline">View All</button>
          </div>
          <div className="flex flex-col gap-6">
            {/* Feed Item 1 */}
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-primary">restaurant</span>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h4 className="text-sm font-semibold">Lunch Logged: Mediterranean Salad</h4>
                  <span className="text-xs text-on-surface-variant">2h ago</span>
                </div>
                <p className="text-xs text-on-surface-variant mt-1">420 kcal • Rich in protein and healthy fats.</p>
              </div>
            </div>
            
            {/* Feed Item 2 */}
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-secondary">directions_run</span>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h4 className="text-sm font-semibold">Activity Sync: 45min Morning Run</h4>
                  <span className="text-xs text-on-surface-variant">5h ago</span>
                </div>
                <p className="text-xs text-on-surface-variant mt-1">380 kcal burned • Distance: 5.2 km • Avg Heart Rate: 138 bpm.</p>
              </div>
            </div>
            
            {/* Feed Item 3 */}
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-xl bg-tertiary/10 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-tertiary">menu_book</span>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h4 className="text-sm font-semibold">Article Read: Importance of Sleep</h4>
                  <span className="text-xs text-on-surface-variant">Yesterday</span>
                </div>
                <p className="text-xs text-on-surface-variant mt-1">Completed reading "Sleep Hygiene for Peak Metabolism."</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;

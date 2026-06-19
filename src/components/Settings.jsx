import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Settings() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("profile");
  const [saved, setSaved] = useState(false);
  
  const [profileData, setProfileData] = useState({
    name: localStorage.getItem("userName") || "John Doe",
    email: "john@example.com",
    age: "28",
    gender: "male",
    height: "175",
    weight: "75",
    targetWeight: "70",
    goal: "loss"
  });

  const [preferences, setPreferences] = useState({
    emailNotifications: true,
    pushNotifications: true,
    darkMode: false,
    language: "en",
    units: "metric"
  });

  const [reminderSettings, setReminderSettings] = useState({
    breakfastTime: "08:00",
    lunchTime: "13:00",
    dinnerTime: "19:00",
    waterReminder: true,
    waterInterval: "2",
    sleepReminder: true,
    sleepTime: "22:00",
    workoutReminder: true,
    workoutTime: "18:00"
  });

  const handleSave = () => {
    // TODO: Save to backend API
    localStorage.setItem("userName", profileData.name);
    localStorage.setItem("userPreferences", JSON.stringify(preferences));
    localStorage.setItem("reminderSettings", JSON.stringify(reminderSettings));
    
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("userName");
    navigate("/login");
  };

  return (
    <div className="max-w-[1280px] mx-auto px-4 lg:px-10 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-on-surface mb-2">Settings</h1>
        <p className="text-on-surface-variant">Manage your account and preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar Navigation */}
        <div className="lg:col-span-1">
          <div className="glass-card rounded-2xl p-4 sticky top-24">
            <nav className="flex flex-col gap-2">
              <button
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all ${
                  activeTab === "profile"
                    ? "bg-primary/10 text-primary font-semibold"
                    : "text-on-surface-variant hover:bg-surface-container"
                }`}
                onClick={() => setActiveTab("profile")}
              >
                <span className="material-symbols-outlined">person</span>
                Profile
              </button>
              <button
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all ${
                  activeTab === "reminders"
                    ? "bg-primary/10 text-primary font-semibold"
                    : "text-on-surface-variant hover:bg-surface-container"
                }`}
                onClick={() => setActiveTab("reminders")}
              >
                <span className="material-symbols-outlined">notifications</span>
                Reminders
              </button>
              <button
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all ${
                  activeTab === "preferences"
                    ? "bg-primary/10 text-primary font-semibold"
                    : "text-on-surface-variant hover:bg-surface-container"
                }`}
                onClick={() => setActiveTab("preferences")}
              >
                <span className="material-symbols-outlined">tune</span>
                Preferences
              </button>
              <button
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all ${
                  activeTab === "security"
                    ? "bg-primary/10 text-primary font-semibold"
                    : "text-on-surface-variant hover:bg-surface-container"
                }`}
                onClick={() => setActiveTab("security")}
              >
                <span className="material-symbols-outlined">lock</span>
                Security
              </button>
              <button
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-left text-error hover:bg-error/10 transition-all mt-4"
                onClick={handleLogout}
              >
                <span className="material-symbols-outlined">logout</span>
                Logout
              </button>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          <div className="glass-card rounded-2xl p-8">
            {/* Profile Tab */}
            {activeTab === "profile" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-6">Profile Information</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-on-surface-variant">Full Name</label>
                    <input
                      type="text"
                      value={profileData.name}
                      onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                      className="w-full bg-surface-container-low border-none rounded-xl p-4 focus:ring-2 focus:ring-primary/20 outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-on-surface-variant">Email</label>
                    <input
                      type="email"
                      value={profileData.email}
                      onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                      className="w-full bg-surface-container-low border-none rounded-xl p-4 focus:ring-2 focus:ring-primary/20 outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-on-surface-variant">Age</label>
                    <input
                      type="number"
                      value={profileData.age}
                      onChange={(e) => setProfileData({ ...profileData, age: e.target.value })}
                      className="w-full bg-surface-container-low border-none rounded-xl p-4 focus:ring-2 focus:ring-primary/20 outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-on-surface-variant">Gender</label>
                    <select
                      value={profileData.gender}
                      onChange={(e) => setProfileData({ ...profileData, gender: e.target.value })}
                      className="w-full bg-surface-container-low border-none rounded-xl p-4 focus:ring-2 focus:ring-primary/20 outline-none"
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-on-surface-variant">Height (cm)</label>
                    <input
                      type="number"
                      value={profileData.height}
                      onChange={(e) => setProfileData({ ...profileData, height: e.target.value })}
                      className="w-full bg-surface-container-low border-none rounded-xl p-4 focus:ring-2 focus:ring-primary/20 outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-on-surface-variant">Weight (kg)</label>
                    <input
                      type="number"
                      value={profileData.weight}
                      onChange={(e) => setProfileData({ ...profileData, weight: e.target.value })}
                      className="w-full bg-surface-container-low border-none rounded-xl p-4 focus:ring-2 focus:ring-primary/20 outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-on-surface-variant">Target Weight (kg)</label>
                    <input
                      type="number"
                      value={profileData.targetWeight}
                      onChange={(e) => setProfileData({ ...profileData, targetWeight: e.target.value })}
                      className="w-full bg-surface-container-low border-none rounded-xl p-4 focus:ring-2 focus:ring-primary/20 outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-on-surface-variant">Goal</label>
                    <select
                      value={profileData.goal}
                      onChange={(e) => setProfileData({ ...profileData, goal: e.target.value })}
                      className="w-full bg-surface-container-low border-none rounded-xl p-4 focus:ring-2 focus:ring-primary/20 outline-none"
                    >
                      <option value="loss">Weight Loss</option>
                      <option value="gain">Weight Gain</option>
                      <option value="muscle">Muscle Building</option>
                      <option value="maintain">Maintain</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Reminders Tab */}
            {activeTab === "reminders" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-6">Reminder Settings</h2>
                <p className="text-on-surface-variant mb-6">
                  Set up email reminders to help you stay on track with your health goals
                </p>

                <div className="space-y-6">
                  {/* Meal Reminders */}
                  <div className="border-b border-outline-variant pb-6">
                    <h3 className="text-lg font-semibold mb-4">Meal Reminders</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-on-surface-variant flex items-center gap-2">
                          <span className="material-symbols-outlined text-lg">breakfast_dining</span>
                          Breakfast Time
                        </label>
                        <input
                          type="time"
                          value={reminderSettings.breakfastTime}
                          onChange={(e) => setReminderSettings({ ...reminderSettings, breakfastTime: e.target.value })}
                          className="w-full bg-surface-container-low border-none rounded-xl p-4 focus:ring-2 focus:ring-primary/20 outline-none"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-on-surface-variant flex items-center gap-2">
                          <span className="material-symbols-outlined text-lg">lunch_dining</span>
                          Lunch Time
                        </label>
                        <input
                          type="time"
                          value={reminderSettings.lunchTime}
                          onChange={(e) => setReminderSettings({ ...reminderSettings, lunchTime: e.target.value })}
                          className="w-full bg-surface-container-low border-none rounded-xl p-4 focus:ring-2 focus:ring-primary/20 outline-none"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-on-surface-variant flex items-center gap-2">
                          <span className="material-symbols-outlined text-lg">dinner_dining</span>
                          Dinner Time
                        </label>
                        <input
                          type="time"
                          value={reminderSettings.dinnerTime}
                          onChange={(e) => setReminderSettings({ ...reminderSettings, dinnerTime: e.target.value })}
                          className="w-full bg-surface-container-low border-none rounded-xl p-4 focus:ring-2 focus:ring-primary/20 outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Water Reminder */}
                  <div className="border-b border-outline-variant pb-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary">water_drop</span>
                        Water Reminders
                      </h3>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={reminderSettings.waterReminder}
                          onChange={(e) => setReminderSettings({ ...reminderSettings, waterReminder: e.target.checked })}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-surface-container rounded-full peer peer-checked:after:translate-x-full peer-checked:bg-primary after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                      </label>
                    </div>
                    {reminderSettings.waterReminder && (
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-on-surface-variant">Reminder Interval (hours)</label>
                        <select
                          value={reminderSettings.waterInterval}
                          onChange={(e) => setReminderSettings({ ...reminderSettings, waterInterval: e.target.value })}
                          className="w-full bg-surface-container-low border-none rounded-xl p-4 focus:ring-2 focus:ring-primary/20 outline-none"
                        >
                          <option value="1">Every 1 hour</option>
                          <option value="2">Every 2 hours</option>
                          <option value="3">Every 3 hours</option>
                          <option value="4">Every 4 hours</option>
                        </select>
                      </div>
                    )}
                  </div>

                  {/* Sleep Reminder */}
                  <div className="border-b border-outline-variant pb-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary">bedtime</span>
                        Sleep Reminder
                      </h3>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={reminderSettings.sleepReminder}
                          onChange={(e) => setReminderSettings({ ...reminderSettings, sleepReminder: e.target.checked })}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-surface-container rounded-full peer peer-checked:after:translate-x-full peer-checked:bg-primary after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                      </label>
                    </div>
                    {reminderSettings.sleepReminder && (
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-on-surface-variant">Bedtime</label>
                        <input
                          type="time"
                          value={reminderSettings.sleepTime}
                          onChange={(e) => setReminderSettings({ ...reminderSettings, sleepTime: e.target.value })}
                          className="w-full bg-surface-container-low border-none rounded-xl p-4 focus:ring-2 focus:ring-primary/20 outline-none"
                        />
                      </div>
                    )}
                  </div>

                  {/* Workout Reminder */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary">fitness_center</span>
                        Workout Reminder
                      </h3>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={reminderSettings.workoutReminder}
                          onChange={(e) => setReminderSettings({ ...reminderSettings, workoutReminder: e.target.checked })}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-surface-container rounded-full peer peer-checked:after:translate-x-full peer-checked:bg-primary after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                      </label>
                    </div>
                    {reminderSettings.workoutReminder && (
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-on-surface-variant">Workout Time</label>
                        <input
                          type="time"
                          value={reminderSettings.workoutTime}
                          onChange={(e) => setReminderSettings({ ...reminderSettings, workoutTime: e.target.value })}
                          className="w-full bg-surface-container-low border-none rounded-xl p-4 focus:ring-2 focus:ring-primary/20 outline-none"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Preferences Tab */}
            {activeTab === "preferences" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-6">Preferences</h2>

                <div className="space-y-6">
                  <div className="flex items-center justify-between py-4 border-b border-outline-variant">
                    <div>
                      <h3 className="font-semibold">Email Notifications</h3>
                      <p className="text-sm text-on-surface-variant">Receive email updates and reminders</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.emailNotifications}
                        onChange={(e) => setPreferences({ ...preferences, emailNotifications: e.target.checked })}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-surface-container rounded-full peer peer-checked:after:translate-x-full peer-checked:bg-primary after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between py-4 border-b border-outline-variant">
                    <div>
                      <h3 className="font-semibold">Push Notifications</h3>
                      <p className="text-sm text-on-surface-variant">Receive push notifications on your device</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.pushNotifications}
                        onChange={(e) => setPreferences({ ...preferences, pushNotifications: e.target.checked })}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-surface-container rounded-full peer peer-checked:after:translate-x-full peer-checked:bg-primary after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between py-4 border-b border-outline-variant">
                    <div>
                      <h3 className="font-semibold">Dark Mode</h3>
                      <p className="text-sm text-on-surface-variant">Enable dark theme</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.darkMode}
                        onChange={(e) => setPreferences({ ...preferences, darkMode: e.target.checked })}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-surface-container rounded-full peer peer-checked:after:translate-x-full peer-checked:bg-primary after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                    </label>
                  </div>

                  <div className="space-y-2 py-4 border-b border-outline-variant">
                    <label className="font-semibold">Language</label>
                    <select
                      value={preferences.language}
                      onChange={(e) => setPreferences({ ...preferences, language: e.target.value })}
                      className="w-full bg-surface-container-low border-none rounded-xl p-4 focus:ring-2 focus:ring-primary/20 outline-none"
                    >
                      <option value="en">English</option>
                      <option value="es">Español</option>
                      <option value="fr">Français</option>
                      <option value="de">Deutsch</option>
                    </select>
                  </div>

                  <div className="space-y-2 py-4">
                    <label className="font-semibold">Units</label>
                    <select
                      value={preferences.units}
                      onChange={(e) => setPreferences({ ...preferences, units: e.target.value })}
                      className="w-full bg-surface-container-low border-none rounded-xl p-4 focus:ring-2 focus:ring-primary/20 outline-none"
                    >
                      <option value="metric">Metric (kg, cm)</option>
                      <option value="imperial">Imperial (lbs, inches)</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Security Tab */}
            {activeTab === "security" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-6">Security</h2>

                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold">Change Password</h3>
                    <div className="space-y-4">
                      <input
                        type="password"
                        placeholder="Current Password"
                        className="w-full bg-surface-container-low border-none rounded-xl p-4 focus:ring-2 focus:ring-primary/20 outline-none"
                      />
                      <input
                        type="password"
                        placeholder="New Password"
                        className="w-full bg-surface-container-low border-none rounded-xl p-4 focus:ring-2 focus:ring-primary/20 outline-none"
                      />
                      <input
                        type="password"
                        placeholder="Confirm New Password"
                        className="w-full bg-surface-container-low border-none rounded-xl p-4 focus:ring-2 focus:ring-primary/20 outline-none"
                      />
                      <button className="bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-all">
                        Update Password
                      </button>
                    </div>
                  </div>

                  <div className="border-t border-outline-variant pt-6">
                    <h3 className="font-semibold mb-4">Two-Factor Authentication</h3>
                    <p className="text-sm text-on-surface-variant mb-4">
                      Add an extra layer of security to your account
                    </p>
                    <button className="bg-surface-container text-on-surface px-6 py-3 rounded-xl font-semibold hover:bg-surface-container-high transition-all">
                      Enable 2FA
                    </button>
                  </div>

                  <div className="border-t border-outline-variant pt-6">
                    <h3 className="font-semibold mb-4 text-error">Danger Zone</h3>
                    <button className="bg-error/10 text-error px-6 py-3 rounded-xl font-semibold hover:bg-error/20 transition-all">
                      Delete Account
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Save Button */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-outline-variant">
              {saved && (
                <div className="flex items-center gap-2 text-primary">
                  <span className="material-symbols-outlined">check_circle</span>
                  <span className="font-semibold">Settings saved successfully!</span>
                </div>
              )}
              <div className="flex-1" />
              <button
                onClick={handleSave}
                className="bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-primary/90 transition-all active:scale-95"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;

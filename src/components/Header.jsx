import { Moon, Sun, Users, Settings } from "lucide-react";

const ViewButton = ({ view, currentView, setView, icon, label }) => (
  <button
    onClick={() => setView(view)}
    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
      currentView === view
        ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30"
        : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
    }`}
  >
    {icon}
    <span className="hidden md:inline">{label}</span>
  </button>
);

const ThemeToggle = ({ darkMode, toggleDarkMode }) => (
  <button
    onClick={toggleDarkMode}
    className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
  >
    {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
  </button>
);

const Header = ({ darkMode, toggleDarkMode, view, setView }) => (
  <div className="flex justify-between items-center mb-8">
    <h1 className="text-2xl md:text-3xl font-bold">Sloto</h1>
    <div className="flex items-center gap-4">
      <div className="flex gap-2">
        <ViewButton
          view="schedule"
          currentView={view}
          setView={setView}
          icon={<Users className="w-4 h-4" />}
          label="Team Schedule"
        />
        <ViewButton
          view="manage"
          currentView={view}
          setView={setView}
          icon={<Settings className="w-4 h-4" />}
          label="Manage my schedule"
        />
      </div>
      <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </div>
  </div>
);

export default Header;

import { Plus, Settings } from "lucide-react";
import { timezones } from "../data/mockData";

const ManageSettings = ({
  selectedTimezone,
  setSelectedTimezone,
  newSlotTime,
  setNewSlotTime,
  addTimeSlot,
  selectedDate,
}) => (
  <div className="lg:col-span-3 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-xl">
    <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
      <Settings className="w-5 h-5" /> Schedule Settings
    </h2>
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-2">Your Timezone</label>
        <select
          value={selectedTimezone}
          onChange={(e) => setSelectedTimezone(e.target.value)}
          className="w-full p-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow"
        >
          {timezones.map((tz) => (
            <option key={tz} value={tz}>
              {tz}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">New Slot Time</label>
        <div className="flex gap-2">
          <input
            type="time"
            value={newSlotTime.start}
            onChange={(e) =>
              setNewSlotTime((prev) => ({ ...prev, start: e.target.value }))
            }
            className="flex-1 p-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow"
          />
          <span className="flex items-center">to</span>
          <input
            type="time"
            value={newSlotTime.end}
            onChange={(e) =>
              setNewSlotTime((prev) => ({ ...prev, end: e.target.value }))
            }
            className="flex-1 p-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow"
          />
        </div>
      </div>
      <button
        onClick={addTimeSlot}
        disabled={!selectedDate}
        className="w-full flex items-center justify-center gap-2 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-lg shadow-blue-500/30"
      >
        <Plus className="w-4 h-4" />
        Add Time Slot
      </button>
    </div>
  </div>
);

export default ManageSettings;

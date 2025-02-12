import { Clock, Trash2 } from "lucide-react";
import CopyButton from "./CopyButton";
import { format } from "date-fns";

const TimeSlotItem = ({ slot, view, onDelete }) => (
  <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
    <p className="font-medium">
      {slot.startTime} - {slot.endTime}
    </p>
    {view === "manage" && (
      <button
        onClick={() => onDelete(slot.id)}
        className="text-red-500 hover:text-red-600 p-1.5 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg transition-colors"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    )}
  </div>
);

const TimeSlotsList = ({
  filteredSlots,
  view,
  deleteTimeSlot,
  selectedDate,
  selectedUser,
}) => {
  const availabilityText = filteredSlots
    .sort((a, b) => a.startTime.localeCompare(b.startTime))
    .map((slot) => `${slot.startTime} - ${slot.endTime}`)
    .join("\n");

  const formattedDate = selectedDate
    ? format(selectedDate, "MMMM d, yyyy")
    : "";
  const textToCopy = `Available Slots for ${selectedUser.username} on ${formattedDate}\n${availabilityText}`;

  return (
    <div className="lg:col-span-4 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-xl">
      <div className="flex items-start gap-2 justify-between">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Clock className="w-5 h-5" /> Available Slots
        </h2>
        {/*Copy button to be displaued only when time slots are available*/}
        {filteredSlots.length > 0 && (
          <span>
            <CopyButton
              textToCopy={textToCopy}
              disabled={filteredSlots.length === 0 || !selectedDate}
            />
          </span>
        )}
      </div>
      {selectedDate ? (
        <div className="space-y-3">
          {filteredSlots.length > 0 ? (
            filteredSlots.map((slot) => (
              <TimeSlotItem
                key={slot.id}
                slot={slot}
                view={view}
                onDelete={deleteTimeSlot}
              />
            ))
          ) : (
            <p className="text-gray-500 dark:text-gray-400 text-center py-8">
              No available slots for this date
            </p>
          )}
        </div>
      ) : (
        <p className="text-gray-500 dark:text-gray-400 text-center py-8">
          Please select a date to view available slots
        </p>
      )}
    </div>
  );
};

export default TimeSlotsList;

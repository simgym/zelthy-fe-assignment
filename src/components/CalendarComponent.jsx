import {
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { DayPicker } from "react-day-picker";

const CalendarComponent = ({ selectedDate, setSelectedDate, darkMode }) => (
  <div className="lg:col-span-5 bg-white dark:bg-gray-800 rounded-xl p-4 md:p-6 shadow-xl">
    <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 flex items-center gap-2">
      <CalendarIcon className="w-5 h-5 md:w-6 md:h-6" /> Calendar
    </h2>
    <div className="border rounded-xl p-2 md:p-4">
      <DayPicker
        mode="single"
        selected={selectedDate}
        onSelect={setSelectedDate}
        className={`w-full ${darkMode ? "dark:text-white" : ""}`}
        modifiersClassNames={{
          selected: "bg-blue-500 text-white rounded-full",
          today: "font-bold",
        }}
        classNames={{
          root: "w-full flex flex-col items-center",
          caption:
            "w-full flex justify-between items-center mb-4 md:mb-6 px-2 md:px-4",
          nav: "flex gap-4 md:gap-6 items-center text-blue-500",
          table: "w-full text-base md:text-lg",
          head_cell: "text-sm md:text-base",
          cell: "text-sm md:text-base",
          day: "w-8 h-8 md:w-10 md:h-10 text-md md:text-lg",
          caption_label: "text-lg md:text-xl font-medium",
        }}
        components={{
          IconLeft: ({ ...props }) => (
            <ChevronLeft
              className="w-6 h-6 md:w-8 md:h-8 cursor-pointer"
              {...props}
            />
          ),
          IconRight: ({ ...props }) => (
            <ChevronRight
              className="w-6 h-6 md:w-8 md:h-8 cursor-pointer"
              {...props}
            />
          ),
        }}
      />
    </div>
  </div>
);

export default CalendarComponent;

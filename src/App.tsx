import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { currentUser, users, timeSlots, timezones } from "./data/mockData";
import { format } from "date-fns";

import Header from "./components/Header";
import UserList from "./components/UserList";
import ManageSettings from "./components/ManageSettings";
import CalendarComponent from "./components/CalendarComponent";
import TimeSlotsList from "./components/TimeSlotsList";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedUser, setSelectedUser] = useState(currentUser);
  const [view, setView] = useState("schedule");
  const [localTimeSlots, setLocalTimeSlots] = useState(timeSlots);
  const [newSlotTime, setNewSlotTime] = useState({
    start: "09:00",
    end: "10:00",
  });
  const [selectedTimezone, setSelectedTimezone] = useState(
    currentUser.timezone
  );

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const filteredSlots = localTimeSlots.filter(
    (slot) =>
      slot.userId === selectedUser.id &&
      selectedDate &&
      format(slot.date, "yyyy-MM-dd") === format(selectedDate, "yyyy-MM-dd")
  );

  const addTimeSlot = () => {
    if (!selectedDate) return;

    const isDuplicate = localTimeSlots.some(
      (slot) =>
        format(slot.date, "yyyy-MM-dd") ===
          format(selectedDate, "yyyy-MM-dd") &&
        slot.startTime === newSlotTime.start &&
        slot.endTime === newSlotTime.end &&
        slot.userId === currentUser.id
    );

    if (isDuplicate) {
      toast.error("Time slot already exists");
      return;
    }

    const newSlot = {
      id: crypto.randomUUID(),
      userId: currentUser.id,
      date: selectedDate,
      startTime: newSlotTime.start,
      endTime: newSlotTime.end,
    };

    setLocalTimeSlots((prev) => [...prev, newSlot]);
    toast.success("Time slot added successfully");
  };

  const deleteTimeSlot = (slotId) => {
    setLocalTimeSlots((prev) => prev.filter((slot) => slot.id !== slotId));
    toast.success("Time slot deleted successfully");
  };

  useEffect(() => {
    currentUser.timezone = selectedTimezone;
  }, [selectedTimezone]);

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "dark bg-gray-900 text-white" : "bg-gray-50"
      }`}
    >
      <Toaster position="top-right" />
      <div className="container mx-auto px-4 py-8">
        <Header
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          view={view}
          setView={setView}
        />
        <div className="grid md:grid-cols-1 lg:grid-cols-12 gap-8">
          {view === "schedule" && (
            <UserList
              users={users}
              selectedUser={selectedUser}
              setSelectedUser={setSelectedUser}
            />
          )}
          {view === "manage" && (
            <ManageSettings
              selectedTimezone={selectedTimezone}
              setSelectedTimezone={setSelectedTimezone}
              newSlotTime={newSlotTime}
              setNewSlotTime={setNewSlotTime}
              addTimeSlot={addTimeSlot}
              selectedDate={selectedDate}
            />
          )}
          <CalendarComponent
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            darkMode={darkMode}
          />
          <TimeSlotsList
            filteredSlots={filteredSlots}
            view={view}
            deleteTimeSlot={deleteTimeSlot}
            selectedDate={selectedDate}
            selectedUser={selectedUser}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

import { addDays, setHours, setMinutes } from "date-fns";

export interface User {
  id: string;
  username: string;
  timezone: string;
  avatar: string;
}

export interface TimeSlot {
  id: string;
  userId: string;
  date: Date;
  startTime: string;
  endTime: string;
}

export const currentUser: User = {
  id: "1",
  username: "Me",
  timezone: "America/Denver",
  avatar:
    "https://cdn.pixabay.com/photo/2021/11/24/05/19/user-6820232_1280.png",
};

export const users: User[] = [
  currentUser,
  {
    id: "2",
    username: "Shreya",
    timezone: "Europe/London",
    avatar:
      "https://cdn.pixabay.com/photo/2021/11/24/05/19/user-6820232_1280.png",
  },
  {
    id: "3",
    username: "Akash",
    timezone: "Asia/Delhi",
    avatar:
      "https://cdn.pixabay.com/photo/2021/11/24/05/19/user-6820232_1280.png",
  },
];

export const timeSlots: TimeSlot[] = [
  {
    id: "1",
    userId: "1",
    date: addDays(new Date(), 1),
    startTime: "09:00",
    endTime: "10:00",
  },
  {
    id: "2",
    userId: "1",
    date: addDays(new Date(), 1),
    startTime: "14:00",
    endTime: "15:00",
  },
  {
    id: "3",
    userId: "2",
    date: addDays(new Date(), 2),
    startTime: "10:00",
    endTime: "11:00",
  },
  {
    id: "4",
    userId: "3",
    date: addDays(new Date(), 3),
    startTime: "15:00",
    endTime: "16:00",
  },
];

export const timezones = [
  "America/New_York",
  "America/Los_Angeles",
  "America/Chicago",
  "America/Denver",
  "Europe/London",
  "Europe/Paris",
  "Europe/Rome",
  "Asia/Tokyo",
  "Asia/Dubai",
  "Asia/Kolkata",
  "Asia/Delhi",
  "Asia/Mumbai",
  "Australia/Melbourne",
];

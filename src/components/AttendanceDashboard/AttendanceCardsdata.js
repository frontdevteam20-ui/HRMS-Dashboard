// src/HRDashboard/Attendance/attendanceKpiData.js
import { UserCheckIcon, UserX, Clock, Timer } from "lucide-react";

export const attendanceKpiData = [
  {
    title: "Average Attendance",
    value: "87.5%",
    change: "+2.3%",
    changeType: "positive",
    icon: UserCheckIcon,
    color: "text-[#fff]",
      bgColor: "bg-[#CA2030]"  // Background color

  },
  {
    title: "Late Arrivals Today",
    value: "12",
    change: "-5 from yesterday",
    changeType: "positive",
    icon: Clock,
    color: "text-[#fff]",
      bgColor: "bg-[#2C318E]",   
  },
  {
    title: "Absenteeism Rate",
    value: "4.2%",
    change: "+0.8%",
    changeType: "negative",
    icon: UserX,
    color: "text-[#fff]",
    bgColor:"bg-[#ef5226]"
  },
  {
    title: "Active Shifts",
    value: "8",
    change: "2 ongoing",
    changeType: "neutral",
    icon: Timer,
    color: "text-[#fff]",
    bgColor:"bg-[#CA2030]"
  },
];

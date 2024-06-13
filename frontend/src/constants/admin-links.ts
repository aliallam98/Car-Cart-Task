import {
    Fullscreen,
    ClipboardList,
  } from "lucide-react";
  
  export const adminRoutes = [
    {
      label: "Cars",
      path: `/dashboard/cars`,
      icon: ClipboardList,
    },
    {
      label: "Bookings",
      path: `/dashboard/bookings`,
      icon: Fullscreen,
    },
  ];
  
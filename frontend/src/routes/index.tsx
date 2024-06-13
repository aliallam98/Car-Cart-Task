import AdminDashboardLayout from "@/components/layouts/AdminDashboardLayout";
import MainLayout from "@/components/layouts/MainLayout";
import AboutPage from "@/pages/AboutPage";
import CarDetailsPage from "@/pages/CarDetailsPage";
import CarsPage from "@/pages/CarsPage";
import CartPage from "@/pages/CartPage";
import ContactPage from "@/pages/ContactPage";
import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import SignUpPage from "@/pages/SignUpPage";
import AddNewCarPage from "@/pages/dashboard/DashboardAddNewCarPage";
import DashboardBookingsPage from "@/pages/dashboard/DashboardBookingsPage";
import DashboardCarsPage from "@/pages/dashboard/DashboardCarsPage";
import EditCarPage from "@/pages/dashboard/DashboardEditCarPage";
import { createBrowserRouter } from "react-router-dom";

/**
 * An array of routes that are accessible to the public
 * These routes do not require authentication
 * @type {string[]}
 */
export const publicRoutes = ["/", "/cars", "/cars/:slug", "/about", "/contact","/cart"];

/**
 * An array of routes that are used for authentication
 * These routes will redirect logged in users to /settings
 * @type {string[]}
 */
export const authRoutes = ["/login", "/register"];

/**
 * The default redirect path after logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/cars",
        element: <CarsPage />,
      },
      {
        path: "/cars/:id",
        element: <CarDetailsPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <SignUpPage />,
      },
      {
        path: "*",
        element: <p>Not Found</p>,
      },
    ],
  },
  {
    path: "/",
    element: <AdminDashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: <h1>Dashboard</h1>,
      },
      {
        path: "/dashboard/cars",
        element: <DashboardCarsPage/>,
      },
      {
        path: "/dashboard/cars/add",
        element: <AddNewCarPage/>,
      },
      {
        path: "/dashboard/cars/:id/edit",
        element: <EditCarPage/>,
      },
      {
        path: "/dashboard/bookings",
        element: <DashboardBookingsPage />,
      },
    ],
  },
]);

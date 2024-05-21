import MainLayout from "@/components/layouts/MainLayout";
import AboutPage from "@/pages/AboutPage";
import CarDetailsPage from "@/pages/CarDetailsPage";
import CarsPage from "@/pages/CarsPage";
import CartPage from "@/pages/CartPage";
import ContactPage from "@/pages/ContactPage";
import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import SignUpPage from "@/pages/SignUpPage";
import { createBrowserRouter } from "react-router-dom";

/**
 * An array of routes that are accessible to the public
 * These routes do not require authentication
 * @type {string[]}
 */
export const publicRoutes = ["/", "/cars", "/cars/:slug", "/about", "/contact"];

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
        path: "/cars/:slug",
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
  // {
  //   path: "/",
  //   element: <AuthLayout />,
  //   children: [
  //     {
  //       path: "/login",
  //       element: <LoginPage />,
  //     },
  //     {
  //       path: "/signup",
  //       element: <SignUpPage />,
  //     },
  //   ],
  // },
]);

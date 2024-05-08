import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "@/pages/Login";
import HomePage from "@/pages/Home";
import Register from "@/pages/Register";
import DashboardLayout from "@/layouts/DashboardLayout";
import Product from "@/pages/Product";
import AuthLayout from "./layouts/AuthLayout";

export const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "product", element: <Product /> },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/",
    element: <Navigate to="/dashboard" />,
  },
  {
    path: "*",
    element: <Navigate to="/dashboard" />,
  },
]);

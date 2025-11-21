// ...importaciones previas
import Home from "../pages/home"
import Login from "../pages/login"
import Register from "../pages/register"
import Users from "../pages/admin/users";
import Orders from "../pages/admin/orders";
import OrderDetail from "../pages/admin/orderDetail";
import { createBrowserRouter } from "react-router-dom";
import AdminGuard from "../guards/AdminGuard";
import AdminLayout from "../components/layout/adminLayout";
import MainLayout from "../components/layout/mainLayout";
//dentro de tu definición de rutas:
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "", element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> }
    ]
  },
  {
    path: "/admin",
      element: (
        <AdminGuard>
            <AdminLayout />
        </AdminGuard>
      ),
    children: [
      // ...otras rutas de admin (Alumno 4)
      { path: "users", element: <Users /> },
      { path: "orders", element: <Orders /> },
      { path: "orders/:id", element: <OrderDetail /> }
    ]
  }
])

export default router
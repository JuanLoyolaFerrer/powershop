// ...importaciones previas
import { createBrowserRouter } from "react-router-dom";
import OrderDetail from "../pages/admin/orderDetail";
import AdminGuard from "../guards/AdminGuard";
import AdminLayout from "../components/layout/adminLayout";
import MainLayout from "../components/layout/mainLayout";
import Home from "../pages/home"
import Login from "../pages/login"
import Users from "../pages/admin/users";
import Orders from "../pages/admin/orders";
import ProductDetail from "../components/products/productDetail/productDetail";
import Checkout from "../pages/checkout";
import Registro from "../pages/register";
import RecuperarContraseña from "../pages/forgotPassword";
import OrderSuccess from "../pages/orderSuccess";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "", element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "login", element:<Login />},
      { path: "registro", element:<Registro />},
      { path: "recuperar-contraseña", element:<RecuperarContraseña />},
      { path: "product/:id", element:<ProductDetail />},
      { path: "checkout", element:<Checkout />},
      { path: "compra-finalizada", element:<OrderSuccess />}
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
import { GetUserLogged } from "../utils/storage";

//Verifica si es admin
function AdminGuard({ children }) {
  const logged = GetUserLogged()
  if (!logged || logged.tipo != "administrador") return <Navigate to="/login" replace />;
  return children;
}
export default AdminGuard
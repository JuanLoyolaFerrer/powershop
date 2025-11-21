import { GetUserLogged } from "../utils/storage";

//Verifica si NO inicio sesion
function GuestGuard({ children }) {
  const logged = GetUserLogged()
  if (logged) return <Navigate to="/home" replace />;
  return children;
}
export default GuestGuard
import { GetUserLogged } from "../utils/storage";

//Verifica si inicio sesion
function AuthGuard({ children }) {
  const logged = GetUserLogged()
  if (!logged) return <Navigate to="/login" replace />;
  return children;
}
export default AuthGuard
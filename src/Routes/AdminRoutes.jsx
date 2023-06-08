import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";


const AdminRoutes = ({children}) => {
  const {user,loading}=useContext(AuthContext);
  const [isAdmin,isAdminLoading]=useAdmin();
  const location=useLocation();

if(loading || isAdminLoading)
{
  return <progress className="progress w-56"></progress>
}
if(user && isAdmin)
{
  return children;
}

return <Navigate to="/" replace state={{from:location}}></Navigate>
};

export default AdminRoutes;
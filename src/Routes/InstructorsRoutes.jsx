import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import useInstructors from "../hooks/useInstructors";


const InstructorsRoutes = ({children}) => {
  const {user,loading}=useContext(AuthContext);

  const [isInstructors,isInstructorsLoading]=useInstructors();
  const location=useLocation();
console.log(isInstructors)

if(loading || isInstructorsLoading)
{
  return <progress className="progress w-56"></progress>
}
if(user && isInstructors)
{
  return children;
}

return <Navigate to="/" replace state={{from:location}}></Navigate>
};

export default InstructorsRoutes;
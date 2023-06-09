import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useAdmin = () => {
  
  const [axiosSecure]=useAxiosSecure();
  const {user}=useContext(AuthContext);
  const {data:isAdmin,isLoading:isAdminLoading}=useQuery({
    queryKey:["isAdmin",user?.email],
    enabled:!! user?.email && !!localStorage.getItem("access-token"),
    queryFn:async ()=>{
      const response = await axiosSecure.get(`/users/admin/${user?.email}`);
      
      return response.data.admin;
    }
    
  })
  return [isAdmin,isAdminLoading]

};

export default useAdmin;
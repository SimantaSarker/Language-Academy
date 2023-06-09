import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useInstructors = () => {
  
  const [axiosSecure]=useAxiosSecure();
  const {user}=useContext(AuthContext);
  const {data:isInstructors,isLoading:isInstructorsLoading}=useQuery({
    queryKey:["isInstructors",user?.email],
    enabled:!! user?.email && !!localStorage.getItem("access-token"),
    queryFn:async ()=>{
      const response = await axiosSecure.get(`/users/instructors/${user?.email}`);
      return response.data.instructors;
    
    }
    
  })
  return [isInstructors,isInstructorsLoading]

};

export default useInstructors;
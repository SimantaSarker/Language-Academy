import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";



const useCart=()=>{

const {user}=useContext(AuthContext);

const [axiosSecure]=useAxiosSecure();



const {data:cart=[],refetch } = useQuery({
  queryKey: ['carts',user?.email],
  enabled:!! user?.email && !!localStorage.getItem("access-token"),
  queryFn: async () => {
    const response = await axiosSecure.get(`/carts?email=${user?.email}`);
    return response.data;
  },

})

return [cart,refetch]

}
export default useCart;
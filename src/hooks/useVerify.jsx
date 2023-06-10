import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";

const useVerify = () => {

  const {user} = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();

  const { data: isVerify } = useQuery({
    queryKey: ["isVerify", user?.email],
    enabled:!!user?.email && !!localStorage.getItem("access-token"),

    queryFn: async () => {
      const response = await axiosSecure.get(`/users/verify/${user?.email}`);
      return response.data.role;
    },
  });


  return [isVerify];
};

export default useVerify;
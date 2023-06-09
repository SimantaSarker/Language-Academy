import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useApprove = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useContext(AuthContext);

  const { data: isApprove=[], isLoading: isApproveLoading } = useQuery({
    queryKey: ["isApprove"],
    enabled: !!user?.email && !!localStorage.getItem("access-token"),
    queryFn: async () => {
      const response = await axiosSecure.get("/courses/approve");
     console.log(response.data)
      return response.data;
    },
  });
  return [isApprove, isApproveLoading];
};

export default useApprove;

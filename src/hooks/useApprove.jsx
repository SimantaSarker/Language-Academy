import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useApprove = () => {
  const { data: isApprove = [], isLoading: isApproveLoading } = useQuery({
    queryKey: ["isApprove"],
    queryFn: async () => {
      const response = await axios.get(
        "https://server-side-mu.vercel.app/courses/approve"
      );
      return response.data;
    },
  });
  return [isApprove, isApproveLoading];
};

export default useApprove;

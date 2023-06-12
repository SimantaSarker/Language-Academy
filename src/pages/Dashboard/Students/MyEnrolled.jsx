import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const MyEnrolled = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();

  console.log(user.email);

  const { data: enrolled = [] } = useQuery({
    queryKey: ["enrolled", user?.email],
    enabled: !!user?.email && !!localStorage.getItem("access-token"),
    queryFn: async () => {
      const response = await axiosSecure.get(
        `/payments/enrolled/${user?.email}`
      );
      return response.data;
    },
  });

  // http://localhost:5000/payments/enrolled/anik@gmail.com

  return (
    <div>
      <h1>My Enrolled Class:{enrolled.length}</h1>
    </div>
  );
};

export default MyEnrolled;

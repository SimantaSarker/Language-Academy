import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import PaymentHistoryCard from "./PaymentHistoryCard";

const PaymentHistory = () => {

  const {user}=useContext(AuthContext);
  const [axiosSecure]=useAxiosSecure()
  const { data: paymentHistory = [] } = useQuery({
    queryKey: ["carts", user?.email],
    enabled: !!user?.email && !!localStorage.getItem("access-token"),
    queryFn: async () => {
      const response = await axiosSecure.get(`/payments/${user?.email}`);
      return response.data;
    },
  });




  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-4 ">
     {
      paymentHistory.map((item)=><PaymentHistoryCard key={item._id} item={item}></PaymentHistoryCard>)
     }
    </div>
  );
};

export default PaymentHistory;
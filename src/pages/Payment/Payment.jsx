import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useParams } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { AuthContext } from "../../provider/AuthProvider";
import { useContext } from "react";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const Payment = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();

  const { data: cart = [] } = useQuery({
    queryKey: ["carts", user?.email],
    enabled: !!user?.email && !!localStorage.getItem("access-token"),
    queryFn: async () => {
      const response = await axiosSecure.get(`/carts/${id}`);
      return response.data;
    },
  });


  let price=0;
  for(let i=0;i<cart.length;i++)
  {
    price=price+cart[i].price;
  }




  return (
    <div>
      <Elements stripe={stripePromise}>
        <CheckoutForm price={price} cart={cart}></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;

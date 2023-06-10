import { useParams } from "react-router-dom";

const Payment = () => {
  const {id}=useParams();
  console.log(id)
  return (
    <div>
      <h1>Payment Page..</h1>
      
    </div>
  );
};

export default Payment;
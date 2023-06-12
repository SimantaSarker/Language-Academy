import moment from "moment";
const PaymentHistoryCard = ({ item }) => {
  console.log(item);
  const { courseName, date, image, price ,instructorName} = item;
  return (
    <div className="card  bg-base-100  h-[70%] w-[20vw] shadow-xl  mx-auto my-auto">
      <figure className="">
        <img src={image} alt="Shoes" className="w-full object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-semibold">{courseName}</h2>
        <h2 className="card-title font-semibold">Instructor : {instructorName}</h2>
        <div className="badge badge-secondary h-12 font-semibold">
          Payment Time: {moment(date).format("h:mm:ss a")}
        </div>
        <p className="text-xl  font-serif font-semibold">Price: $ {price}</p>
        <div className="alert alert-success">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Success</span>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistoryCard;

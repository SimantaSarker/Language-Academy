import "../Classes/ClassCard.css";

const ClassCard = ({ card }) => {
  const {
    courseName,
    image,
    instructorName,
    price,
    seats,
    status,
    _id,
  } = card;
  console.log(card);
  return (
    <div className="mt-12 mx-auto">
      <div className="card  h-[70%] w-96  bg-base-100 shadow-xl">
        <figure className="w-full">
          <img
            src={image}
            alt="Image"
            className="w-full object-cover"
          />
        </figure>
        <div className="card-body ">
          <h2 className="card-title text-3xl">
            {courseName}
            <div className="badge badge-secondary">{status}</div>
          </h2>
          <h2 className="card-title uppercase mt-2">
            {instructorName}

          </h2>
          <div className="flex justify-between items-center mt-12 font-semibold">
            <div className="badge  text-xl">Price:$ {price}</div>
            <div className="badge  text-xl">Available Seats:{seats}</div>
          </div>
          <button className="btn btn-success mt-10 text-xl ">Enroll</button>
        </div>
      </div>
    </div>
  
  );
};

export default ClassCard;

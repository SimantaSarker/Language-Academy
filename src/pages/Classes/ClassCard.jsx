import Swal from "sweetalert2";
import "../Classes/ClassCard.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import useVerify from "../../hooks/useVerify";

const ClassCard = ({ card }) => {
  const { courseName, image, instructorName, price, seats, status } = card;

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isVerify] = useVerify();
  const [disable, setDisabled] = useState(false);

  const handleAddCart = (card) => {
    if (user && user.email) {
      const cartItem = {
        courseId: card._id,
        courseName,
        image,
        seats,
        price,
        instructorName,
        email: user?.email,
      };
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire(
              "Good job!",
              "Cart added in Your Selected Classes!",
              "success"
            );
            setDisabled(true);
          }
        });
    } else {
      Swal.fire({
        icon: "error",
        title: "Please login first to add order",
        text: "Something went wrong!",
      });
      navigate("/login", { state: { from: location } });
    }
  };

  return (
    <>
      {seats === 0 ? (
        <div className="mt-12 mx-auto mb-9 ">
          <div className="card w-96  h-[70vh] shadow-xl bg-red-400">
            <figure className="w-full h-full">
              <img src={image} alt="Image" className="w-full" />
            </figure>
            <div className="card-body ">
              <h2 className="card-title text-3xl">
                {courseName}
                <div className="badge badge-secondary">{status}</div>
              </h2>
              <h2 className="card-title uppercase mt-1">{instructorName}</h2>
              <div className="flex justify-between items-center mt-8 font-semibold">
                <div className="badge  text-xl">Price:$ {price}</div>
                <div className="badge  text-xl">Available Seats:{seats}</div>
              </div>

              {isVerify === "admin" ||
              isVerify === "instructors" ||
              seats === 0 ? (
                <button
                  className="btn btn-success  text-xl mt-1 mb-1"
                  disabled
                  onClick={() => handleAddCart(card)}
                >
                  Select
                </button>
              ) : (
                <button
                  className="btn btn-success  text-xl mt-2 mb-2"
                  disabled={disable}
                  onClick={() => handleAddCart(card)}
                >
                  Select
                </button>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-12 mx-auto mb-9">
          <div className="card w-96  h-[70vh] bg-base-100 shadow-xl">
            <figure className="w-full h-full">
              <img src={image} alt="Image" className="w-full" />
            </figure>
            <div className="card-body ">
              <h2 className="card-title text-3xl">
                {courseName}
                <div className="badge badge-secondary">{status}</div>
              </h2>
              <h2 className="card-title uppercase mt-1">{instructorName}</h2>
              <div className="flex justify-between items-center mt-8 font-semibold">
                <div className="badge  text-xl">Price:$ {price}</div>
                <div className="badge  text-xl">Available Seats:{seats}</div>
              </div>

              {isVerify === "admin" ||
              isVerify === "instructors" ||
              seats === 0 ? (
                <button
                  className="btn btn-success  text-xl mt-1 mb-1"
                  disabled
                  onClick={() => handleAddCart(card)}
                >
                  Select
                </button>
              ) : (
                <button
                  className="btn btn-success  text-xl mt-2 mb-2"
                  disabled={disable}
                  onClick={() => handleAddCart(card)}
                >
                  Select
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ClassCard;

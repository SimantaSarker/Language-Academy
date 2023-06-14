import { Link } from "react-router-dom";
import useCart from "../../../hooks/useCart";
import { AiFillDelete } from "react-icons/ai";
import Swal from "sweetalert2";

const SelectedClasses = () => {
  const [cart, refetch] = useCart();

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure want to delete?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed)
        fetch(`https://server-side-mu.vercel.app/carts/${item?._id}`, {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire(
                "Deleted!",
                "Your item has been deleted properly.",
                "success"
              );
            }
          });
    });
  };

  return (
    <div className="absolute top-0  w-[83%] mx-auto">
      <div className="overflow-x-auto w-[70%] mx-auto mt-10 ">
        <table className="table">
          <thead>
            <tr className="bg-slate-400">
              <th></th>
              <th className="text-xl text-white">Course Name</th>
              <th className="text-xl text-white">Image</th>
              <th className="text-xl text-white">Price</th>
              <th className="text-xl text-white">Seats</th>
              <th className="text-xl text-white">Delete</th>
              <th className="text-xl text-white">Pay</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item._id}>
                <td className="text-xl">{index + 1}</td>
                <td className="text-xl">{item.courseName}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={item.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td className="text-xl">{item?.price}</td>
                <td className="text-xl">{item?.seats}</td>

                <td>
                  <button
                    className="btn btn-ghost btn-xs h-14"
                    onClick={() => handleDelete(item)}
                  >
                    <AiFillDelete size={30}></AiFillDelete>
                  </button>
                </td>
                <Link to={`/dashboard/payment/${item?._id}`}>
                  <td>
                    <button className="btn btn-active btn-primary h-12">
                      Payment
                    </button>
                  </td>
                </Link>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SelectedClasses;

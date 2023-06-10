import useCart from "../../../hooks/useCart";
import { AiFillDelete } from "react-icons/ai";
import { GrUpdate } from "react-icons/gr";

const SelectedClasses = () => {
  const [cart] = useCart();
  console.log(cart);
  return (
    <div className="w-full">
 
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th className="text-2xl">Course Name</th>
              <th className="text-2xl">Image</th>
              <th className="text-2xl">Price</th>
              <th className="text-2xl">Seats</th>
              <td  className="text-2xl">Delete</td>
              <td className="text-2xl">Update</td>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {cart.map((item, index) => (
              <tr key={cart._id}>
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
                <td className="text-xl">{item.price}</td>
                <td className="text-xl">{item.seats}</td>

                <td>
                  <button className="btn btn-ghost btn-xs h-14">
                    <AiFillDelete size={30}></AiFillDelete>
                  </button>
                </td>
                <td>
                  <button className="btn btn-ghost btn-xs h-12">
                    <GrUpdate size={30}></GrUpdate>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SelectedClasses;

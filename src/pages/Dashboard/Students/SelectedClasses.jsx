import { Link } from "react-router-dom";
import useCart from "../../../hooks/useCart";
import { AiFillDelete } from "react-icons/ai";
import Swal from "sweetalert2";

const SelectedClasses = () => {
  const [cart,refetch] = useCart();

console.log(cart)
  const handleDelete=item=>{

    Swal.fire({
      title: 'Are you sure want to delete?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) 
      fetch(`http://localhost:5000/carts/${item?._id}`,{
        method:"DELETE",
        headers:{
          "content-type":"application/json"
        },
  
      })
      .then((res)=>res.json()).then((data)=>{
        if(data.deletedCount>0)
        {
          refetch();
          Swal.fire(
            'Deleted!',
            'Your item has been deleted properly.',
            'success'
          )
        }
      })

    })
 
  }




  return (
    <div className="w-full">
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th className="text-2xl">Course Name</th>
              <th className="text-2xl">Image</th>
              <th className="text-2xl">Price</th>
              <th className="text-2xl">Seats</th>
              <th className="text-2xl">Delete</th>
              <th className="text-2xl">Update</th>
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
                  <button className="btn btn-ghost btn-xs h-14" onClick={()=>handleDelete(item)}>
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

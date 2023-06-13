import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import "../InstructorsDash/MyClasses";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AddClass = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure]=useAxiosSecure();
  const enrolledValue=0;

  const handleAddClass=(event)=>{
    event.preventDefault();
    const form=event.target;
    const courseName=form.courseName.value;
    const image=form.image.value;
    const seats=form.availableSeats.value;
    const price=form.price.value;
    const instructorName=user?.displayName;
    const instructorEmail=user?.email;
    const status="pending";
    const addedClasses={
      courseName,instructorName,instructorEmail,image,seats:parseInt(seats),price:parseFloat(price),status,enrolled:enrolledValue
    }
    console.log(addedClasses)

    axiosSecure.post("/courses",addedClasses)
    .then((data)=>{
      if(data.data.insertedId)
      {
        Swal.fire(
          'Hei!!!!',
          'Course Added successfully!',
          'success'
        )
      }
      form.reset();
      
    })


  }

  return (
    <div className="w-full h-full flex items-center  rounded ">
      <div className="flex-col mx-auto w-full  ">
        <form className="card-body" onSubmit={handleAddClass}>
          <div className="flex gap-4">
            <div className="form-control w-1/2 mx-auto">
              <label className="label">
                <span className="label-text text-xl">Class Name</span>
              </label>
              <input
                type="text"
                name="courseName"
                required
                placeholder="Enter Class Name"
                className="input input-bordered text-lg"
              />
            </div>
            <div className="form-control w-1/2 mx-auto text-2xl">
              <label className="label">
                <span className="label-text text-xl">Class Image</span>
              </label>
              <input
                type="text"
                name="image"
                required
                placeholder="Enter Class Image"
                className="input input-bordered text-lg"
              />
            </div>
          </div>
          <div className="flex gap-6">
            <div className="form-control w-5/6 mx-auto text-2xl">
              <label className="label">
                <span className="label-text text-xl">Instructor Name</span>
              </label>
              <input
                type="text"
                name="instructorName"
                readOnly
                placeholder={`${user?.displayName}`}
                className="input input-bordered text-lg"
              />
            </div>
            <div className="form-control w-5/6 mx-auto text-2xl">
              <label className="label">
                <span className="label-text text-xl">Instructor Email</span>
              </label>
              <input
                type="email"
                name="email"
                readOnly
                placeholder={`${user?.email}`}
                className="input input-bordered text-lg"
              />
            </div>
          </div>

          <div className="flex gap-6">
        
            <div className="form-control w-5/6 mx-auto text-2xl">
              <label className="label">
                <span className="label-text text-xl">Available Seats</span>
              </label>
              <input
                type="number"
                name="availableSeats"
                required
                placeholder="Enter Available Seats"
                className="input input-bordered text-lg"
              />
            </div>
            <div className="form-control w-5/6 mx-auto text-2xl">
              <label className="label">
                <span className="label-text text-xl">Price</span>
              </label>
              <input
                type="number"
                name="price"
                required
                placeholder="Enter Price"
                className="input input-bordered text-lg"
              />
            </div>
          </div>

          <div className="form-control w-[30%] mx-auto my-10 text-xl ">
            <input type="submit" value="Add" className="btn btn-primary" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddClass;

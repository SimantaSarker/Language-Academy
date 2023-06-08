import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import "../InstructorsDash/MyClasses";

const AddClass = () => {
  const { user } = useContext(AuthContext);

  const handleAddClass=(event)=>{
    event.preventDefault();
    const form=event.target;
    const courseName=form.courseName.value;
    const image=form.image.value;
    const seats=form.availableSeats.value;
    const price=form.price.value;
    const status="pending";
    const addedClasses={
      courseName,image,seats,price,status
    }
    console.log(addedClasses)


  }

  return (
    <div className="w-full h-full flex items-center bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200">
      <div className="flex-col mx-auto w-full ">
        <form className="card-body" onSubmit={handleAddClass}>
          <div className="flex gap-4">
            <div className="form-control w-1/2 mx-auto">
              <label className="label">
                <span className="label-text text-xl">Class Name</span>
              </label>
              <input
                type="text"
                name="courseName"
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
                name="photo"
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
                type="text"
                name="availableSeats"
                placeholder="Enter Available Seats"
                className="input input-bordered text-lg"
              />
            </div>
            <div className="form-control w-5/6 mx-auto text-2xl">
              <label className="label">
                <span className="label-text text-xl">Price</span>
              </label>
              <input
                type="text"
                name="price"
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

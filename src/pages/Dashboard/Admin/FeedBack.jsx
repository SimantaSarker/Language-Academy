
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const FeedBack = () => {
  const { id } = useParams();
  const [axiosSecure]=useAxiosSecure();



  // axiosSecure.patch(`/courses/${id}`).then(())

  const handleFeedback=(event)=>{
    event.preventDefault();
    const form=event.target;
    const feedback=event.target.feedback.value;
      axiosSecure.patch(`/courses/feedback/${id}`,{feedback}).then((res)=>{
        console.log(res)
        if (res.data.modifiedCount>0) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: "Successfully feedback added",
            showConfirmButton: false,
            timer: 1500
          })
        }
        form.reset();
     })
  
  }



  return (
    <>
      <h1 className="text-3xl font-semibold text-center text-black my-8">
        Admin Feedback
      </h1>
      <form className="w-[70%]" onSubmit={handleFeedback}>
        <div className="form-control">
          <textarea
            className="textarea textarea-bordered h-80"
            placeholder="Write Feedback"
            name="feedback"
            required
          ></textarea>
        </div>
        <div className="form-control mt-6 w-1/2 mx-auto">
          <input type="submit" className="btn btn-primary" value="Submit" />
        </div>
      </form>
    </>
  );
};

export default FeedBack;

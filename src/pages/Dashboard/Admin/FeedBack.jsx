import { useParams } from "react-router-dom";

const FeedBack = () => {
  const {id}=useParams();
  console.log(id)
  return (
    <form className="w-[70%]">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Admin Feed Back</span>
         
        </label>
        <textarea
          className="textarea textarea-bordered h-80"
          placeholder="write Feedback"
        ></textarea>
     
      </div>
    </form>
  );
};

export default FeedBack;

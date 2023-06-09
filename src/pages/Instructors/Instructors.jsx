import axios from "axios";

const Instructors = () => {

  axios.get("http://localhost:5000/users/instructors")
  .then((res)=>{
    console.log(res.data)
  })


  return (
    <div>
      <h1>Welcome to Instructors Page</h1>
    </div>
  );
};

export default Instructors;
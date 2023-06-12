import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";


const MyClasses = () => {


  const [axiosSecure] = useAxiosSecure();
  const {user}=useContext(AuthContext)


  const { data: courses = [] } = useQuery(["courses"], async () => {
    const res = await axiosSecure(`/courses/allCourses/${user?.email}`);
    return res.data;
  });

  console.log("Courses",courses)

  return (
    <div>
      <h1>My Classes:{courses.length}</h1>
      <h2>TODO HERE </h2>
    </div>
  );
};

export default MyClasses;
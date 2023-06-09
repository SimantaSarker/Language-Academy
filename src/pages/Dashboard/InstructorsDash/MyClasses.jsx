import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const MyClasses = () => {


  const [axiosSecure] = useAxiosSecure();


  const { data: courses = [] } = useQuery(["courses"], async () => {
    const res = await axiosSecure("/courses/allCourses");
    return res.data;
  });

  console.log(courses)

  return (
    <div>
      <h1>My Classes:{courses.length}</h1>
      <h2>TODO HERE </h2>
    </div>
  );
};

export default MyClasses;
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";

const MyClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useContext(AuthContext);

  const { data: courses = [] } = useQuery(["courses"], async () => {
    const res = await axiosSecure(`/courses/allCourses/${user?.email}`);
    return res.data;
  });

  console.log("Courses", courses);

  return (
    <div className="absolute top-0 w-[85%] mt-5">
      <div className="overflow-x-auto  w-[80%]  mx-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="text-xl">Image</th>
              <th className="text-xl">CourseName</th>
              <th className="text-xl">Status</th>
              <th className="text-xl">Total Enrolled</th>
              <th className="text-xl">FeedBack</th>
              <th className="text-xl">Update</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course?._id} className="text-xl ">
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={course?.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>{course?.courseName}</td>
                <td>{course?.status}</td>
                <td>{course?.enrolled}</td>
                <td>
                  {course?.status === "approve" ||
                  course?.status=== "pending" ? (
                    <button className="btn btn-success">
                    No FeedBack
                   </button>
                  ) : (
                    <button className="btn btn-success">
                     {course?.feedback}
                    </button>
                  )}
                </td>

                <th>
                  <button className="btn btn-success">Update</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClasses;

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageClasses = () => {
  const [axiosSecure] = useAxiosSecure();

  const { data: courses = [] } = useQuery(["courses"], async () => {
    const res = await axiosSecure("/courses");
    return res.data;
  });

  console.log(courses);

  return (
    <div>
      {/* <h1>Manage Classes:{courses.length}</h1> */}

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Class Name</th>
              <th> Class Image</th>
              <th>Instructor Name</th>
              <th>Instructor Email</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th>Status</th>
              <th>Approve</th>
              <th>Deny</th>
              <th>Admin Feedback</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course._id}>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={course.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>{course.courseName}</td>
                <td>{course.instructorName}</td>
                <td>{course.instructorEmail}</td>
                <td>{course.seats}</td>
                <td>{course.price}</td>
                <td>
                  <button className="btn btn-info">{course.status}</button>
                </td>

                <td>
                  <button className="btn btn-success">Approve</button>
                </td>
                <td>
                  <button className="btn btn-error">Deny</button>
                </td>
                <Link to={`/dashboard/feedback/${course._id}`}>
                  <td>
                    <button className="btn btn-error">FeedBack</button>
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

export default ManageClasses;

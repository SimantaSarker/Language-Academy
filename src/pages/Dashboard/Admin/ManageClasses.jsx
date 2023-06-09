import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ManageClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  // const [disable, setDisabled] = useState(false);

  const { data: courses = [],refetch } = useQuery(["courses"], async () => {
    const res = await axiosSecure("/courses");
    return res.data;
  });

  const handleApproveDeny = (status, id) => {


    fetch(`http://localhost:5000/courses/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({status}),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)

        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: "Successfully updated status",
            showConfirmButton: false,
            timer: 1500
          })
        }
      
      });

  
  };

  return (
    <div className="w-full">
   
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
                
            {
              course.status=="approve" || course.status=="deny"? <td>
              <button className="btn btn-info">{course.status}</button>
            </td>:<td><button className="btn btn-info">{course.status}</button></td>
            }

              {
                course.status==="approve" || course.status=="deny"?  
                <>
                <td>
                <button
                  className="btn btn-success" disabled
                  onClick={() => handleApproveDeny("approve", course._id)}
                >
                  Approve
                </button>
              </td>

              <td>
                <button
                  className="btn btn-error" disabled
                  onClick={() => handleApproveDeny("deny", course._id)}
                >
                  Deny
                </button>
              </td>
              </>
              :      <>
              <td>
              <button
                className="btn btn-success"
                onClick={() => handleApproveDeny("approve", course._id)}
              >
                Approve
              </button>
            </td>

            <td>
              <button
                className="btn btn-error"
                onClick={() => handleApproveDeny("deny", course._id)}
              >
                Deny
              </button>
            </td>
            </>
              }
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

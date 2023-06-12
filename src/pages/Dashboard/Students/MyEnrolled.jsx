import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const MyEnrolled = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();

  console.log(user.email);

  const { data: enrolled = [] } = useQuery({
    queryKey: ["enrolled", user?.email],
    enabled: !!user?.email && !!localStorage.getItem("access-token"),
    queryFn: async () => {
      const response = await axiosSecure.get(
        `/payments/enrolled/${user?.email}`
      );
      return response.data;
    },
  });

  return (
    <div className="absolute top-0 w-[83%]">
      <div className="overflow-x-auto w-[90%] mx-auto">
        <table className="table mt-8 border-8 bg-slate-200">
          <thead>
            <tr>
              <th>#</th>
              <th className="text-xl">Image</th>
              <th className="text-xl">Course Name</th>
              <th className="text-xl">Instructor Name</th>
              <th className="text-xl">Price</th>
              <th className="text-xl">Status</th>
            </tr>
          </thead>
          <tbody>
            {enrolled.map((item, index) => (
              <tr key={item._id}>
                <td className="text-xl">{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={item.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td className="text-xl">{item.courseName}</td>
                <td className="text-xl">{item.instructorName}</td>
                <td className="text-xl"> $ {item.price}</td>
                <td className="text-xl alert alert-success text-center">Enrolled</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyEnrolled;

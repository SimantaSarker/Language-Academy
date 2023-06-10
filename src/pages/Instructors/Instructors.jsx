import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Instructors = () => {
  const { data: isInstructors = [] } = useQuery({
    queryKey: ["isInstructors"],
    queryFn: async () => {
      const response = await axios.get(
        "http://localhost:5000/users/instructors"
      );
      return response.data;
    },
  });

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="overflow-x-auto text-center " style={{fontFamily:"sans-serif"}}>
        <table className="table mx-auto">
          <thead>
            <tr>
              <td></td>
              <th className="text-xl">Image</th>
              <th className="text-xl">Name</th>
              <th className="text-xl">Email</th>
            </tr>
          </thead>
          <tbody>
            {isInstructors.map((instructor, index) => (
              <tr key={instructor._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-20 h-16">
                      <img
                        src={instructor?.photo}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td className="text-xl">{instructor.name}</td>
                <td className="text-xl">{instructor.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Instructors;

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
  // bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200
  return (
    <div className="w-full mx-auto  language-font ">
      <div className="overflow-x-auto text-center " >
        <table className="table mx-auto w-[70%] mt-8 mb-8 bg-black-200 border-4">
          <thead>
            <tr className="bg-[#25BE9E]">
              <td>#</td>
              <th className="text-3xl">Image</th>
              <th className="text-3xl">Name</th>
              <th className="text-3xl">Email</th>
            </tr>
          </thead>
          <tbody>
            {isInstructors.map((instructor, index) => (
              <tr key={instructor._id} className="bg-[#bab3b3]">
                <td className="text-xl">{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-20 h-16">
                      <img
                        src={instructor?.photo}
                        alt="Photo"
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

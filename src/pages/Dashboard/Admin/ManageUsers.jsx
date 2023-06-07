import { useQuery } from "@tanstack/react-query";

const ManageUsers = () => {
  const { data: users = [] } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });

  return (
    <div className="w-full max-w-7xl border-8">
      <h1 className="text-5xl text-blue-400 text-center">
        Manage Users: {users.length}
      </h1>

      <div className="overflow-x-auto ">
        <table className="table space-y-6 ">
          <thead>
            <tr>
              <th className="text-2xl">Name</th>
              <th className="text-2xl">Email</th>
              <th className="text-2xl">Action</th>
            </tr>
          </thead>
          <tbody>
         {
          users.map((user)=>
            <tr key={user._id}> 
            <td>{user.name}</td>
            <td>{user.email}</td>
            <th>
              <button className="btn btn-ghost btn-xs">details</button>
            </th>
          </tr>
          )
         }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;

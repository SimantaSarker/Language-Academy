import { useQuery } from "@tanstack/react-query";

const ManageUsers = () => {
  const { data: users = [] } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });

  const handleAdmin = (user, id) => {
    console.log(user)
    if (id === 1) {
      console.log("Admin", user);
      user.adminId = id;
      fetch(`http://localhost:5000/users/${user?._id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }

    if (id === 2) {
      user.instructorsId = id;
      fetch(`http://localhost:5000/users/${user?._id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  };

  return (
    <div className="w-full max-w-7xl border-8">
      <h1 className="text-5xl text-blue-400 text-center">
        Manage Users: {users.length}
      </h1>

      <div className="overflow-x-auto font-semibold">
        <table className="table">
          <thead>
            <tr>
              <th className="text-2xl">Name</th>
              <th className="text-2xl">Email</th>
              <th className="text-2xl mx-auto ">AdminRole</th>
              <th className="text-2xl mx-auto ">InstructorsRole</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <th className="flex items-center justify-between">
                  {user.role === "admin" ? (
                    "admin"
                  ) : (
                    <button
                      className="btn btn-active btn-accent"
                      onClick={() => handleAdmin(user, 1)}
                    >
                      Admin
                    </button>
                  )}
                </th>
                <th>
 
                  {user.role === "instructors" ? (
                    "instructors"
                  ) : (
                    <button
                      className="btn btn-active btn-accent"
                      onClick={() => handleAdmin(user, 2)}
                    >
                      Instructors
                    </button>
                  )}
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;

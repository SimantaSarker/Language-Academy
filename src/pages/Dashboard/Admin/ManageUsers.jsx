import { useQuery } from "@tanstack/react-query";

import Swal from "sweetalert2";

const ManageUsers = () => {

 



  const { data: users = [],refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });

  const handleAdmin = (user, id) => {
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
        .then((data) => {

          if (data.modifiedCount) {
            refetch();
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: `${user.name} is Admin Now`,
              showConfirmButton: false,
              timer: 1500
            })
          }
        
        });
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
        .then((data) => {
          if (data.modifiedCount) {
            refetch();
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: `${user.name} is Instructors Now`,
              showConfirmButton: false,
              timer: 1500
            });
           
          }
        });
    }
  };

  return (
    <div className="w-full max-w-7xl border-8">
   

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
             
                    <button className="btn btn-success" disabled>Admin</button>
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
          
                    <button className="btn btn-success" disabled>Instructors</button>
                    
                    
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

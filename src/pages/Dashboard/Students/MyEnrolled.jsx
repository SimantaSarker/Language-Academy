

const MyEnrolled = () => {
  // const { user } = useContext(AuthContext);
  // const [axiosSecure] = useAxiosSecure();

  // const { data: enrolled = [] } = useQuery({
  //   queryKey: ["carts", user?.email],
  //   enabled: !!user?.email && !!localStorage.getItem("access-token"),
  //   queryFn: async () => {
  //     const response = await axiosSecure.get(`/payments/enrolled/${user?.email}`);
  //     return response.data;
  //   },
  // });

  return (
    <div>
      <h1>My Enrolled Class</h1>
    </div>
  );
};

export default MyEnrolled;

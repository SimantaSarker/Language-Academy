import { useForm } from "react-hook-form";
import SocialLogin from "../Shared/SocialLogin";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import '../Login/login.css'

const Login = () => {

  const { signIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate=useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();




  const onSubmit = (data) => {
    const email=data.email;
    const password=data.password;
    signIn(email,password)
    .then((result)=>{
      const user=result.user;
      console.log(user);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'You are vaild user',
        showConfirmButton: false,
        timer: 1500
      })
      navigate("/");
      reset();
    })
    .catch((error)=>{
      setError(error.message)
      
    })
  };

  return (
    <>
      <div className="hero min-h-screen login">
        <div className="hero-content">
          <div className="card flex-shrink-0 shadow-2xl  w-[30vw]">
          <form className="card-body " onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl font-semibold">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="email"
                  className="input input-bordered"
                />
                  {errors.email && (
                  <span className="text-red-900">This field is required</span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl font-semibold">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", { required: true })}
                  placeholder="password"
                  className="input input-bordered"
                />
                  {errors.password && (
                  <span className="text-red-900">This field is required</span>
                )}
              </div>

              <div className="form-control mt-6 " >
                <input
                  type="submit"
                  className="btn bg-[#B5ED5E] text-xl font-semibold"
                  value="Login"
                />
              </div>
              {error && (
            <div className="alert mt-3 alert-error shadow-lg">
              <div>
                <span>Error! {error}</span>
              </div>
            </div>
          )}
            </form>
            <div className="text-2xl text-center">
              <p>
                <small>
                  New Here ? <Link to="/signUp">Create an account</Link>
                </small>
              </p>
            </div>
            <SocialLogin></SocialLogin>
          </div>

       
        </div>
      </div>
    </>
  );
};

export default Login;

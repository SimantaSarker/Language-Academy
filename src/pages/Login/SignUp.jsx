import { useForm } from "react-hook-form";
import SocialLogin from "../Shared/SocialLogin";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { useContext } from "react";

const SignUp = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();



  const onSubmit = (data) => {
    const email=data.email;
    const password=data.password;
    const name=data.name;
    const photo=data.photo;
    createUser(email,password)
      .then((result) => {
        const loggedUser = result.user;
        loggedUser.displayName = name;
        loggedUser.photoURL = photo;

        updateUserProfile(data.name,data.photo)
          .then(() => {
            const saveUser={name:data.name,email:data.email};
            console.log(saveUser);
            navigate("/");
            reset();
         
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => {
        console.log(error.message);
      });
  
  };





  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="Name"
                className="input input-bordered"
              />
              {errors.name && (
                <span className="text-red-900">This field is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">PhotoUrl</span>
              </label>
              <input
                type="text"
                {...register("photo", { required: true })}
                placeholder="Photo"
                className="input input-bordered"
              />
              {errors.photo && (
                <span className="text-red-900">This field is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                {...register("email", { required: true })}
                placeholder="email"
                className="input input-bordered"
              />
              {errors.email && (
                <span className="text-red-900">Email is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern:
                    /(?=.*?[A-Z])(?=.*?[#?!@$%^&*-])/,
                })}
                placeholder="password"
                className="input input-bordered"
              />
              {errors.password?.type === "required" && (
                <span className="text-red-900">Password is required</span>
              )}

              {errors.password?.type === "minLength" && (
                <span className="text-red-900">
                  Password must have six characters
                </span>
              )}

              {errors.password?.type === "maxLength" && (
                <span className="text-red-900">
                  Password must have less than 20 characters
                </span>
              )}

              {errors.password?.type === "pattern" && (
                <span className="text-red-900">
                  At least one Capital  English letter, At least one special
                  character
                </span>
              )}
            </div>
            <div className="form-control mt-6">
              <input type="submit" value="SignUp" className="btn btn-primary" />
            </div>
          </form>
          <div className="text-2xl text-center">
            <p>
              <small>
                Already Have an account ? <Link to="/login">Login</Link>
              </small>
            </p>
          </div>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

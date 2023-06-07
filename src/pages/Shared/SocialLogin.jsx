import { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
const SocialLogin = () => {

  const {googleSignIn}=useContext(AuthContext);
  const navigate=useNavigate();


  const handleGoogleSignIn=()=>{
    googleSignIn().then((result)=>{
      const loggedInUser=result.user;
      const saveUser={name:loggedInUser.displayName,email:loggedInUser.email};
      console.log(saveUser);
      navigate("/");

    }).catch((error)=>{
      console.log(error.message)
    })

  }


  return (
    <div className="text-center">
      <div className="divider">OR</div>
      <button className="btn btn-circle btn-outline" onClick={handleGoogleSignIn}>
        <FcGoogle size={30} ></FcGoogle>
      </button>
    </div>
  );
};

export default SocialLogin;
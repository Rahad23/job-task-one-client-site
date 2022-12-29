import React, { useContext } from 'react';
import ParticlesComponent from '../../particlesJs/ParticlesJs';
import './LoginForm.css';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import Navebar from '../../navebar/Navebar';
import { SocialContext } from '../../../contextAPI/ContextApi';
import { useForm } from "react-hook-form";
import { toast } from 'react-hot-toast';
import { GoogleAuthProvider } from 'firebase/auth';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const LoginForm = () => {
  const navigate = useNavigate();

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const {loginUserEmailAndPassword, dark, googlePopupLogin} = useContext(SocialContext);
    const loginData=(data)=>{
      const { email, password } = data;
      console.log(data);
       loginUserEmailAndPassword(email, password)
       .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        toast.success("Login Successful")
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'Welcome to social site',
          showConfirmButton: false,
          timer: 3000
        })
        navigate('/');
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
    }
    const googleLogin=()=>{
      googlePopupLogin()
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'Welcome to social site',
          showConfirmButton: false,
          timer: 3000
        })
        // ...
        navigate('/');
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
    }
    return (
        <div>
            <Navebar></Navebar>
            <div className="hero min-h-screen mt-12">
  <div className="hero-content flex-col">
    <div className="text-center lg:text-left">
      <h1 className={dark ?"text-5xl font-bold text-white text-rainbow-animation":"text-5xl font-bold text-black"}>Login now</h1>
    </div>
    <div className="card flex-shrink-0 w-[600px] max-w-sm shadow-2xl bg-[]">
      <div className="card-body">
      <form onSubmit={handleSubmit(loginData)}>
      <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Email</span>
          </label>
          <input {...register("email")} type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Password</span>
          </label>
          <input {...register("password")} type="password" placeholder="password" className="input input-bordered" />
          <label className="label flex justify-between">
            <a href="#" className={dark?"label-text-alt link link-hover text-white":"label-text-alt link link-hover text-black"}>Forgot password?</a>
          </label>
        </div>
        <Link to="/register" className={dark?"label-text-alt link link-hover text-white ml-1":"label-text-alt link link-hover text-black ml-1"}>Create account</Link>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
  <div className={dark?"divider divide-rose-50 text-white":"divider divide-rose-50 text-black"}>OR</div>
  <div className="flex justify-center items-center">
         <FcGoogle onClick={googleLogin} className='text-4xl cursor-pointer'></FcGoogle>
         <div className="divider divider-horizontal text-white"></div>
            <BsFacebook className='text-4xl text-blue-800 cursor-pointer'></BsFacebook>
        </div>
      </div>
    </div>
  </div>
</div>
{dark && <ParticlesComponent /> } 
        </div>
    );
};

export default LoginForm;
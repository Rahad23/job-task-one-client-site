import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navebar from '../../navebar/Navebar';
import ParticlesComponent from '../../particlesJs/ParticlesJs';
import { useForm } from "react-hook-form";
import { SocialContext } from '../../../contextAPI/ContextApi';
import { toast } from 'react-hot-toast';
const Registration = () => {
    const {createUserEmailPassword, updateUserData, dark} =useContext(SocialContext);
    const [registerSpenar, setRegisterSpenar] = useState(false);
    const imgHostKey = process.env.REACT_APP_IMGBB_KEY;
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const navigate = useNavigate();
    const registerData = data => {
      // console.log(data);
        setRegisterSpenar(true);
        const {email, fullName, password, profileImg} = data;
        const image = profileImg[0];
        const formData = new FormData();
        formData.append("image", image);
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imgHostKey}`;
        fetch(url, {
          method: "POST",
          body: formData,
        })
        .then(res => res.json())
        .then(data=>{
          // console.log(data);
            // console.log(data?.data?.url);
            if(data?.data?.url){
                createUserEmailPassword(email, password)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    hendleUpdateUser(fullName, data?.data?.url);
                    // console.log(user)
                    toast.success('Registered successfully')
                    setRegisterSpenar(false);
                    reset();
                    navigate('/');
                    // ...
                  })
                  .catch((error) =>{
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    toast.error(errorMessage)
                    // ..
                  });
            }
            else{
                toast.error('Please select your profile pic');
            }
            
        })
        
    };
    const hendleUpdateUser = (userName, PhotoURL) =>{
      const updateUser = {
       displayName: userName,
       photoURL: PhotoURL,
      }
      updateUserData(updateUser);
}
    return (
        <div>
            <Navebar></Navebar>
            <div className="hero min-h-screen mt-12">
  <div className="hero-content flex-col">
    <div className="text-center lg:text-left">
      <h1 className={dark ? "text-5xl font-bold text-white text-rainbow-animation":"text-5xl font-bold text-black"} >Register</h1>
    </div>
    <div className="card flex-shrink-0 w-[600px] max-w-sm shadow-2xl">
      <div className="card-body">
<form onSubmit={handleSubmit(registerData)}>
<div className="form-control">
          <label className="label">
            <span className="label-text text-white">Full-Name</span>
          </label>
          <input {...register("fullName")} type="text" placeholder="full-name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Email</span>
          </label>
          <input {...register("email")} type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Profile-Picture</span>
          </label>
          <input {...register("profileImg")} type="file" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Password</span>
          </label>
          <input {...register("password")} type="password" placeholder="password" className="input input-bordered" required />
          <label className="label flex justify-between">
            <a href="#" className={dark?"label-text-alt link link-hover text-white":"label-text-alt link link-hover text-black"}>Forgot password?</a>
          </label>
        </div>
        <Link to="/login" className={dark ? "label-text-alt link link-hover text-white ml-1":"label-text-alt link link-hover text-black ml-1"}>Already have an account</Link>
        <div className="form-control mt-6">
          {
            registerSpenar ? <button className="btn btn-primary" type='submit'><div className="w-7 h-7 ml-2 border-4 border-dashed rounded-full animate-spin dark:border-[#ffffff]"></div></button>
            :
            <button className="btn btn-primary" type='submit'>Register</button>
          }
        </div>
</form>
      </div>
    </div>
  </div>
</div>
{dark && <ParticlesComponent />} 
        </div>
    );
};

export default Registration;
import React from 'react';
// import './PostForm.css';
import { useForm } from "react-hook-form";
import { useContext } from 'react';
import { SocialContext } from './../../contextAPI/ContextApi';
import { toast } from 'react-hot-toast';
import swal from 'sweetalert';

const PostForm = () => {
  const { dark, userData } = useContext(SocialContext);

  console.log(userData);
  const imgHostKey = process.env.REACT_APP_IMGBB_KEY;
  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
  const postData = data => {
    const { aboutPost, postTitle, postImg } = data;

    const image = postImg[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imgHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then(res => res.json())
      .then(data => {
        // console.log(data?.data?.url);
        const postData = {
          aboutPost,
          postTitle,
          url: data?.data?.url,
          userName: userData?.displayName,
          profileURL: userData?.photoURL
        }
        if (data?.data?.url) {
          fetch('http://localhost:5000/userPosts', {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(postData)
          })
            .then(res => res.json())
            .then(data => {
              if (data?.acknowledged) {
                swal("Successful", "Your post publish successfully", "success");
              }
              reset();
            })
        }
      })
  };
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className={dark ? "text-5xl font-bold text-white" : "text-5xl font-bold text-black"}>Create-Post</h1>
          </div>
          <div className={dark ? "card flex-shrink-0 w-[900px] max-w-sm shadow-2xl border-2 border-[#24ccff]" : "card flex-shrink-0 w-[900px] max-w-sm shadow-2xl"}>
            <div className="card-body">
              <form onSubmit={handleSubmit(postData)}>
                <div className="form-control">
                  {/* <label className="label">
            <span className="label-text">Write Something</span>
          </label> */}
                  <input {...register("postTitle")} type="text" placeholder="Post-title" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                  {/* <label className="label">
            <span className="label-text">Write Something</span>
          </label> */}
                  <textarea {...register("aboutPost")} className="textarea h-[130px] border-2 border-[#ddd]" placeholder="About-Post" required ></textarea>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Attach-img*</span>
                  </label>
                  <input {...register("postImg")} type="file" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary" type='submit'>Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostForm;
import React from 'react';
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { toast } from 'react-hot-toast';
import { useContext } from 'react';
import { SocialContext } from '../../../contextAPI/ContextApi';
import Comments from '../../comment/Comments';
const MidiaCard = ({ data }) => {

    const { userData } = useContext(SocialContext);
//     console.log(userData)
//     let date = new Date().toLocaleDateString();
// console.log(date);


    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const comment = (datas) => {
        const { comment } = datas;
        const commnetsData = {
            comment,
            CommentEmail: userData?.email,
            photoURL: userData?.photoURL,
            name: userData?.displayName,
            postId: data?._id,
            commentTime: new Date().getTime(),
            submitDate: new Date().toLocaleDateString(),

        }
        if (comment) {
            fetch('http://localhost:5000/comments', {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(commnetsData)
            })
                .then(res => res.json())
                .then(data => {
                    if (data?.acknowledged) {
                        reset();
                        toast.success('Comment publish')
                    }
                })
        } else {
            toast.error('Type comment')
        }
    }
    const { aboutPost, postTitle, profileURL, url, userName, _id } = data;
    console.log(data);
    const shortString = aboutPost.slice(0, 400);
    // console.log(shortString.length);
    return (
        <div>
            <div className="card w-[700px] bg-base-100 shadow-xl mx-auto mt-10">
                <div className="card-body">
                    <div className='flex justify-between'>
                        <div className='flex items-center'>
                            <img className='w-10 rounded-full' src={profileURL} alt="" />
                            <span className='ml-2 font-bold text-gray-900 block'>{userName}</span>
                        </div>
                        <BsThreeDots className='text-gray-900 text-2xl cursor-pointer items-center'></BsThreeDots>
                    </div>
                    <h1 title='Post title' className='card-title mt-5 text-gray-900 font-bold'>{postTitle}</h1>
                    <p className='mt-2 font-semibold text-gray-800'>{shortString}{shortString.length >= 400 && <span className='text-lg text-black font-bold cursor-pointer'><span className='font-semibold text-gray-800'>...</span>See more</span>} </p>
                    <figure className='mt-2'><img src={url} alt="Shoes" /></figure>
                    <div className='flex items-center'>
                        <AiOutlineHeart className='text-red-600 font-bold text-2xl cursor-pointer'></AiOutlineHeart>
                        <span className='block ml-1 font-semibold'>30</span>
                    </div>
                    <form onClick={handleSubmit(comment)}>
                        <div className='mt-3'>
                            <h1 className='text-gray-900 font-bold'>Comment</h1>
                            <textarea {...register("comment")} className="textarea textarea-bordered w-full" placeholder="comment type here"></textarea>
                            <div className='text-right'>
                                <button className="btn btn-sm" type='submit'>submit</button>
                            </div>
                        </div>
                    </form>
                    <Comments postId={data?._id}></Comments>
                </div>
            </div>
        </div>
    );
};

export default MidiaCard;
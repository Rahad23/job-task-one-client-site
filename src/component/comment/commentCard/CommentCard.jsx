import React from 'react';
import { Timestamp } from 'react-timestamp';
import { BsThreeDots } from 'react-icons/bs';
import { useContext } from 'react';
import { SocialContext } from './../../../contextAPI/ContextApi';
import Swal from 'sweetalert2';

const CommentCard = ({postId, data}) => {
    const {userData}=useContext(SocialContext);
    // console.log(userData)
    const {photoURL,name,comment, submitDate,CommentEmail, _id} = data;
    // console.log(data);
    // comment delete functions
    const deleteComment=()=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "Do you want to delete your comment",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/comments/${_id}`,{
                    method:"DELETE"
                })
                .then(res=>res.json())
                .then(data=>console.log(data))
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
    }
    return (
        
        <div className='px-10'>
             {
                postId === data?.postId && 
                <div className=''>
            <div className="card w-full bg-base-100 shadow-xl mt-5">
            <div className="card-body">
            <div className='flex items-center justify-between'>
            <div className='flex items-center'>
            <img className='w-7 rounded-full' src={photoURL} alt="" />
                <div className='flex flex-col items-center mt-6'>
                <h2 className="text-sm font-semibold text-gray-900 ml-1"><a href="#" className='hover:border-b-[1px] hover: border-gray-800'>{name}</a></h2>
                <span className='block ml-1 font-semibold'>{submitDate}</span>
                </div>
            </div>
           
{
userData?.email === CommentEmail 
&& 
<div className="dropdown">
<label tabIndex={0} className="btn btn-xs bg-white hover:bg-white border-none"><BsThreeDots className='text-slate-900 text-xl'></BsThreeDots></label>
<ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><button className="btn btn-primary rounded-none text-white">Edit</button></li>
    <li><button onClick={deleteComment} className="btn btn-active btn-secondary rounded-none mt-2 text-white">Delete</button></li>
</ul>
</div>
} 
            </div>
                <p>{comment}</p>
            </div>
            </div>
                </div>
             }
             
        </div>
    );
};

export default CommentCard;
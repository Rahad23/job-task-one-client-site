import React from 'react';
import { useState, useEffect } from 'react';
import CommentCard from './commentCard/CommentCard';

const Comments = ({postId}) => {
    const [comments, setComments]= useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/comments')
        .then(res=>res.json())
        .then(data=>setComments(data))
    },[comments])
    return (
        <div>
           {
            comments.map(data=><CommentCard data={data} postId={postId}></CommentCard>)
           }
        </div>
    );
};

export default Comments;
import React from 'react';
import { useState, useEffect } from 'react';
import MidiaCard from './midiaCard/MidiaCard';

const Midia = () => {
    const [postData, setPostData] = useState([]);
    useEffect(() => {
        fetch('https://job-task-server-theta.vercel.app/userPosts')
            .then(res => res.json())
            .then(data => setPostData(data))
    }, [postData])
    return (
        <div className='container mx-auto mt-20'>
            {
                postData.map((data, i) => <MidiaCard data={data} key={i}></MidiaCard>)
            }
        </div>
    );
};

export default Midia;
import React, { useContext } from 'react';
import './SliderTwo.css';
import friends from '../../assets/sliderImg/recipeIMG07.svg';
import { Link } from 'react-router-dom';
import { SocialContext } from '../../contextAPI/ContextApi';
import PostForm from '../postSection/PostForm';
const SliderTwo = () => {
    const {userData, dark} = useContext(SocialContext);
    // console.log(userData);
    return (
        <div>
            <div className='flex justify-around container mx-auto items-center'>
            <img src={friends} alt="" className='w-[700px]' />
            <div>
            <div class="bouncing-text">
                <div class="b">M</div>
                <div class="o">y</div>
                <div class="u">S</div>
                <div class="n">o</div>
                <div class="c">c</div>
                <div class="g">i</div>
                <div class="e">a</div>
                <div class="f">l</div>
                <div class="shadow"></div>
                <div class="shadow-two"></div>
            </div>
            {
                userData?.email && userData?.uid 
                ? 
                <div className='mt-3'>
                    <h1 className={dark ?'text-xl font-bold text-gray-300':"text-xl font-bold text-gray-900"}>Welcome, <span className='animate-charcter'>{userData?.displayName}</span></h1>
                </div>
                : 
                <div className='mt-6'>
                <Link to={'/login'} className="btn btn-secondary mr-4 w-[200px]">Sign-In</Link>
                <Link to={'/register'} className="btn btn-secondary w-[200px] bg-[#2f4ecc] border-none hover:bg-[#0d31c2]">Sign-Up</Link>
            </div>
            }
                
            </div>
        </div>
        {
            userData?.email && userData?.uid ? <PostForm></PostForm> :""
        } 
        </div>
    );
};

export default SliderTwo;
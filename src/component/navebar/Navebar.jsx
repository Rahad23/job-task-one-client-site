import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SocialContext } from '../../contextAPI/ContextApi';
import './Navebar.css';
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
const Navebar = () => {
  const {singnOut, userData, togleDarkLignt, dark}=useContext(SocialContext);
  // console.log(userData);
  const logOut=()=>{
     singnOut()
     .then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }
    return (
        <div className= {dark ? 'shadow-xl py-2 font-semibold':'bg-base-100 shadow-xl py-2 font-semibold'}>
            <div className="navbar container mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li tabIndex={0}>
          <a className="justify-between">
            Parent
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </a>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <Link to={'/'} className={dark ? "btn btn-ghost normal-case text-xl text-[#fafafa] font-bold" :"btn btn-ghost normal-case text-xl text-[#5677fc] font-bold"} >My-Social</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="gap-8 menu-horizontal px-1">
      <li className='cursor-pointer'><Link to={'/media'}><span className={dark ? 'border-animate text-white':'border-animate'}>Media</span></Link></li>
      <li tabIndex={0} className='cursor-pointer'><a><span className={dark ? 'border-animate text-white':'border-animate'}>Message</span></a></li>
      <li className='cursor-pointer'><a><span className={dark ? 'border-animate text-white':'border-animate'}>About</span></a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <div onClick={togleDarkLignt}>
    {
      dark ?  <CiLight className="text-white text-3xl font-semibold mr-5 cursor-pointer"></CiLight> 
      : 
      <MdDarkMode className="text-black text-3xl font-semibold mr-5 cursor-pointer"></MdDarkMode>
    }
    </div>
   
    
    <img className='w-10 rounded-full mr-2' title={userData?.displayName} src={userData?.photoURL} alt="" />
    {
      userData ? <button onClick={logOut} className="btn bg-[#b8022f] border-none hover:bg-[#8a0123]" to={''}>Sign-out</button>
      :
<Link className="btn bg-[#5677fc] border-none hover:bg-[#2c4dd4]" to={'/login'}>Sign-In</Link>
    }
    
    
  </div>
</div>
        </div>
    );
};

export default Navebar;
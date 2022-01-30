import React from "react";
import logo from "./ggno_ri-removebg-preview (2).png";
import {FaBars} from "react-icons/fa"

const MobileNav = () => { 
    return (
        <>
            <div className="bg-invisible w-full flex h-20  items-center justify-between">
                <FaBars className="w-10 h-6"/>
                <img src={logo} alt="zomato-black" className="h-[7.5rem] w-[13rem] pr-2" />
            </div>
            <div className="flex flex-col">
                <ul className="decoration-none text-zinc-800 ">
                    <li className="border-b-[0.08rem] bg-invisible mx-6   font-[350] h-[4.3rem] text-xl border-slate-300	py-6 hover:border-0 cursor-pointer hover:animate-pulse  transition-all ">Home</li>
                    <li className="border-b-[0.08rem] bg-invisible mx-6   font-[350] h-[4.3rem] text-xl border-slate-300	py-6 hover:border-0 cursor-pointer hover:animate-pulse  transition-all ">India</li>
                    <li className="border-b-[0.08rem] bg-invisible mx-6   font-[350] h-[4.3rem] text-xl border-slate-300	py-6 hover:border-0 cursor-pointer hover:animate-pulse  transition-all ">Mumbai</li>
                    <li className="border-b-[0.08rem] bg-invisible mx-6   font-[350] h-[4.3rem] text-xl border-slate-300	py-6 hover:border-0 cursor-pointer hover:animate-pulse  transition-all ">South-Mumbai</li>
                    <li className=" bg-invisible mx-6   font-[350] h-[4.3rem] text-xl 	py-6  cursor-pointer hover:animate-pulse  transition-all  text-slate-400">Dadar Parsi Colony Restaurants</li>
                    
                </ul>
            </div>
        </>
    );

};

const TabletNav = () => {
    return (
        <>
            <div className="flex bg-invisible">
                <img src={logo} alt="zomato-black" />

            </div>
        
        
        
        </>
    );

};


const DesktopNav = () => { 
    return (<>
        <div className="flex justify-evenly w-full">
            <div className="flex bg-gray-500  w-full" >
                <img src={logo} alt="zomato-black" className="w-40 h-full bg-red-600" />
                <div className="bg-white flex items-center w-full">
                    <input type="search"  placeholder="hii"/>
                </div>
            </div>
            <div className="bg-invisible flex justify-evenly  items-center w-96 h-full pb-5 text-zinc-800">
                <h4 className="font-[350] text-xl">Log in</h4>
                <h4 className="font-[350] text-xl">Sign up</h4>
            </div>
    </div>
    </>);
};




const Navbar = () => { 
    return (
        <>
        <nav
className="md:hidden bg-invisible">
<MobileNav/></nav>
        <nav className="hidden md:flex lg:hidden  bg-slate-600">
            <TabletNav/></nav>
<nav className="hidden lg:flex justify-evenly bg-green-500 ">
                <DesktopNav/></nav>
        </>
    );
};

export default Navbar;


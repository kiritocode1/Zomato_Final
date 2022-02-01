import React from "react";
import logo from "./ggno_ri-removebg-preview (2).png";
import { FaBars } from "react-icons/fa";
import { BsCaretDownFill, BsGeoAltFill, BsSearch } from "react-icons/bs";
import { AiOutlineUserAdd } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
const MobileNav = () => { 
    return (
        <>
            <div className="bg-invisible w-full flex h-20  items-center justify-between">
                <FaBars className="w-10 h-6"/>
                <img src={logo} alt="zomato-black" className="h-full w-[10rem] " />
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

// const TabletNav = () => {
//     return (
//         <>
//             <div className="flex bg-invisible">
//                 <img src={logo} alt="zomato-black" />
//             </div>
//         </>
//     );

// };


const DesktopNav = () => { 
    return (<>
        <div className="flex justify-evenly w-full px-[6rem] ">
            <div className="flex bg-invisible  w-full" >
                
                
                
                
                
                
                <img src={logo} alt="zomato-black" className="w-60 h-[5rem] bg-invisible pl-8" />
                
                
                
                
                
                
                
                
                
                
                <div className="bg-invisible flex items-center w-full justify-center h-20 	">
                    <div className="bg-invisible flex items-center h-10 shadow-slate-300	 shadow-md w-[44rem]  rounded-lg px-2">
                        <BsGeoAltFill className="text-rose-400 pr-1 w-8 h-full stroke-1" />
                        <input type="text" placeholder="hii" className="h-full  w-40 border-0 focus:outline-none" name="cities" list="cities"  />
                        {/* <datalist id="cities">
                                <option value="Internet Explorer"/>
                                <option value="Firefox"/>
                                <option value="Chrome"/>
                                <option value="Opera"/>
                                <option value="Safari"/>
                        </datalist> */}
                        <div className="w-[2rem] border-r-2 h-5 flex items-center mx-2">
                            <BsCaretDownFill className="w-6" />
                        </div>
                        <BsSearch className="h-full bg-invisible w-6 mx-1 text-gray-500"/>
                        <input type="text" placeholder="search for Restraunt cuisine and dishes" className="h-full  border-0 w-full  focus:outline-none focus:text-slate-500 text-light italic cursor-pointer focus:cursor-text" />
                        
                    </div>
                </div>
            </div>
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            <div className="bg-invisible flex justify-between  items-center w-60 h-full pb-5 text-zinc-800 px-10">
                <h4 className="font-[350] text-md flex flex-col items-center cursor-pointer hover:animate-pulse"><AiOutlineUserAdd className="h-full w-6"/>Log in</h4>
                <h4 className="font-[350] text-md flex flex-col items-center cursor-pointer hover:animate-pulse"><FaRegUserCircle className="h-full w-6"/>Sign up</h4>
            </div>
        </div>
    </>);
};
const TabletNav = () => {
    return (
        <>
        
                        <div className="bg-invisible flex items-center w-full justify-center h-20 	">
                    <div className="bg-invisible flex items-center h-10 shadow-slate-300	 shadow-md w-[44rem]  rounded-lg px-2">
                        <BsGeoAltFill className="text-rose-400 pr-1 w-8 h-full stroke-1" />
                        <div className="w-[2rem] border-r-2 h-5 flex items-center mx-2">
                            <BsCaretDownFill className="w-6" />
                        </div>
                        <BsSearch className="h-full bg-invisible w-6 mx-1 text-gray-500"/>
                        <input type="text" placeholder="hii" className="h-full  border-0 w-full  focus:outline-none focus:text-slate-500 text-light" />
                        
                    </div>
                </div>
        
        
        
        
        
        </>
    );


};



const Navbar = () => { 
    return (
        <>
        <div
className="md:hidden bg-invisible">
<MobileNav/></div>
        <div className="hidden md:flex lg:hidden  bg-invisible">
        <TabletNav/></div>
<div className="hidden lg:flex justify-evenly bg-invisible ">
                <DesktopNav/></div>
        </>
    );
};

export default Navbar;


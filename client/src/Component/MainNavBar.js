import React from "react";
import logo from "./Navbar/zomato-logo-white-removebg-preview.png";
import background from "./Navbar/background.jpeg";
import { BsPhone,BsGeoAltFill,BsCaretDownFill,BsSearch } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

const LargeSizedNavbar = () => { 
    return (
        <>
            <div className=" z-0 w-full flex flex-col relative items-center  justify-between h-[26rem]">
                <img src={background} alt="background" className="w-full h-full object-cover overflow-hidden z-0 absolute" />
                <div className="z-[2]  absolute  flex bg-invisible w-full items-center h-20 justify-evenly gap-[3rem]  text-white bg-invisible">
                    <div className="w-full p-4 bg-invisible h-full flex items-center text-white font-semibold"><BsPhone className="w-4 h-4 pb-1"/> Get the App</div>
                    <div className="bg-invisible w-full h-20 flex items-top ">
                        <ul className="flex items-top justify-center gap-8 bg-invisible w-full py-6">
                            <li className="bg-invisible text-white text-xl font-light cursor-pointer hover:animate-pulse hover:underline decoration-rose-500 hover:decoration-2 hover:font-normal">Add Restaurant</li>
                            <li className="bg-invisible text-white text-xl font-light cursor-pointer hover:animate-pulse hover:underline decoration-rose-500 hover:decoration-2 hover:font-normal">Log in</li>
                            <li className="bg-invisible text-white text-xl font-light cursor-pointer hover:animate-pulse hover:underline decoration-rose-500 hover:decoration-2 hover:font-normal">Sign up</li>
                        </ul>
                    </div>
                </div>
                <div className="z-[1] h-full flex  flex-col items-center bg-invisible w-full justify-right pt-20 text-white gap-6">
                    <img src={logo} alt="zomato logo" className="bg-invisible w-80 h-[5.2rem]  bg-invisible" />
                    <div className="text-5xl font-sans text-center">Discover the best shit in the world </div>
                    <div className=" mt-2 bg-white flex items-center h-[3.4rem]  w-[70%]  rounded-lg px-2 ">
                        <BsGeoAltFill className="text-rose-400 pr-1 w-8 h-full stroke-1" />
                        <input type="text" placeholder="hii" className="h-full  w-40 border-0 focus:outline-none focus:
                        text-black" name="cities" list="cities" />
                        {/* <datalist id="cities">
                                <option value="Internet Explorer"/>
                                <option value="Firefox"/>
                                <option value="Chrome"/>
                                <option value="Opera"/>
                                <option value="Safari"/>
                        </datalist> */}
                        <div className="w-[2rem] border-r-2 h-5 flex items-center mx-2 text-black">
                            <BsCaretDownFill className="w-8" />
                        </div>
                        <BsSearch className="h-full bg-invisible w-6 mx-1 text-gray-500"/>
                        <input type="text" placeholder="search for Restraunt cuisine and dishes" className="h-full  border-0 w-full  focus:outline-none focus:text-slate-500 text-light italic cursor-pointer focus:cursor-text" />
                        
                    </div>
                </div>
            </div>
        </>
    );
};

const MiddleSizedNavBar = () => {
    return (
        <>
        <div className=" z-0 w-full flex flex-col relative items-center  justify-between h-[30rem]">
                <img src={background} alt="background" className="w-full h-full object-cover overflow-hidden z-0 absolute" />
                
                <div className="z-[2]  absolute  flex bg-invisible w-full items-center h-20 justify-evenly gap-[3rem]  text-white bg-invisible">
                    <div className="w-full  bg-invisible h-full flex justify-right text-white font-semibold bg-invisible items-center"><GiHamburgerMenu className="w-20 h-[1.9rem] "/></div>
                    



                    {/* <div className="bg-invisible w-full h-20 flex items-top ">
                        <ul className="flex items-top justify-center gap-8 bg-invisible w-full py-6">
                            <li className="bg-invisible text-white text-xl font-light cursor-pointer hover:animate-pulse hover:underline decoration-rose-500 hover:decoration-2 hover:font-normal">Add Restaurant</li>
                            <li className="bg-invisible text-white text-xl font-light cursor-pointer hover:animate-pulse hover:underline decoration-rose-500 hover:decoration-2 hover:font-normal">Log in</li>
                            <li className="bg-invisible text-white text-xl font-light cursor-pointer hover:animate-pulse hover:underline decoration-rose-500 hover:decoration-2 hover:font-normal">Sign up</li>
                        </ul>
                    </div> */}
                </div>
                <div className="z-[1] h-full flex  flex-col items-center bg-invisible w-full justify-end pt-20 pb-2 text-white gap-6">
                    <img src={logo} alt="zomato logo" className="bg-invisible w-80 h-[5.2rem]  bg-invisible" />
                    <div className="text-2xl font-sans text-center">Discover the best shit in the world </div>
                    <div className=" mt-2 bg-white flex items-center h-[3.4rem]  w-[90%]  rounded-lg px-2 ">
                        <BsGeoAltFill className="text-rose-400 pr-1 w-8 h-full stroke-1" />
                        <input type="text" placeholder="hii" className="h-full  w-40 border-0 focus:outline-none focus:
                        text-black" name="cities" list="cities" />

                        <div className="w-[2rem] border-r-2 h-5 flex items-center mx-2 text-black">
                            <BsCaretDownFill className="w-8" />
                        </div>
                        <BsSearch className="h-full bg-invisible w-6 mx-1 text-gray-500"/>
                        <input type="text" placeholder="search for Restraunt cuisine and dishes" className="h-full  border-0 w-full  focus:outline-none focus:text-slate-500 text-light italic cursor-pointer focus:cursor-text" />
                        
                    </div>
                </div>
            </div>
        </>
    );
};
const MainNavBar = () => {
    return (
        <>
        <div className="md:hidden bg-invisible"><MiddleSizedNavBar/></div>
        <div className="hidden md:flex lg:hidden  bg-invisible"><LargeSizedNavbar/></div>
        <div className="hidden lg:flex justify-evenly bg-invisible "><LargeSizedNavbar/></div>
        </>
    );
};
export default MainNavBar; 
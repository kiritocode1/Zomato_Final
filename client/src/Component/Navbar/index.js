import React from "react";
import logo from "./ggno_ri-removebg-preview (2).png";
import {FaBars} from "react-icons/fa"

const MobileNav = () => { 
    return (
        <>
            <div className="bg-green-500 w-full flex h-10 items-center justify-between">
                <FaBars className="w-10"/>
                <img src={logo} alt="zomato-black" className="h-[6.9rem]" />
            </div>
        </>
    );

};

const TabletNav = () => {
    return (
        <>
            <div className="flex text-white">
                yo

            </div>
        
        
        
        </>
    );

};


const DesktopNav = () => { 
    return (<>
        <div className="text-red-500">
            this is done
    </div>
    
    
    
    
    </>);
};




const Navbar = () => { 
    return (
        <>
        <nav
className="md:hidden bg-red-500">
<MobileNav/></nav>
        <nav className="hidden md:flex lg:hidden  bg-slate-600">
            <TabletNav/></nav>
<nav className="hidden lg:flex bg-green-500">
                <DesktopNav/></nav>
        </>
    );
};

export default Navbar;


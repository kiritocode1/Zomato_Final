import React from "react";
import logo from "./Navbar/zomato-logo-white-removebg-preview.png";
import background from "./Navbar/background.jpeg";



const MovieNavBar = () => { 
    return (
        <>
            <div className="w-full flex relative items-center  justify-center h-96">
                
                <img src={background} alt="background" className="w-full z-0 absolute" />
                <h1 className="z-10 text-red-500 absolute">ggnori</h1>
                
            </div>
        
        </>
    );
};


export default MovieNavBar; 
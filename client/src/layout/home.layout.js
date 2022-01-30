import React from "react";
import Navbar from "../Component/Navbar/index";







const HomeLayout = (props) => {
    return (<div className="container mx-auto">
        <Navbar />    
        {props.children}

    </div>);
};

export default HomeLayout;
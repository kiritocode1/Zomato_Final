import React from "react";
import { Route } from "react-router-dom";
import HomeLayout from "../layout/home.layout";


const  HomeLayoutHOC = ({ component: Component, ...rest }) => {
    return (
        <>
            <Route
                {...rest}
                component={(props) => {
                    <HomeLayout>
                    <Component {...props}/>
                </HomeLayout>
            }}
        />
        </>
    );
};
export default HomeLayoutHOC;
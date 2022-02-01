import React from "react";
import Temp from "./Component/temp";
import HomeLayout from "./layout/home.layout";



function App() {
  return (
    <>
      <HomeLayout path="/" exact component={Temp} /> 
    </>
  );
};

export default App;

import React from "react";
// import HomeLayoutHOC from "./HOC/Home.Hoc";
import Temp from "./Component/temp";
import HomeLayout from "./layout/home.layout";

function App() {
  return (
    <>
      {/* <HomeLayoutHOC path="/" exact component={Temp}/> */}
      <HomeLayout path="/" exact component={Temp}/>
    </>
  );
};

export default App;

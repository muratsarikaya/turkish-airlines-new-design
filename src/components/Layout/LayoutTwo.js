import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../Header";
import Footer from "../Footer";

const LayoutOne = () => {
  return (
    <>
      <Header subPage={true}/>
      <Outlet />
      <Footer />
    </>
  );
};

export default LayoutOne;

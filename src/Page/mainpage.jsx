import React from "react";
import "../Assets/css/rest.css";
import Topnavbar from "../compoents/Topnavbar";
import Page from "../compoents/page";

function mainpage() {
  return (
    <>
      <div className="pb-5">
        <Topnavbar />
      </div>
      <div className="bg-set ">
        <Page />
      </div>
    </>
  );
}

export default mainpage;

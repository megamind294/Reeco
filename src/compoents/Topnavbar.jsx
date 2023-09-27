import React from "react";
import Logo from "../Assets/img/brand.png";
import "../Assets/css/topnavbar.css";
import { TfiShoppingCart } from "react-icons/tfi";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function Topnavbar() {
  return (
    <>
      <div className="sticky-top d-flex justify-content-between  bg-change p-3 ">
        <div className="d-flex">
          <img src={Logo} alt="logo" className="logo-adj" />
          <div className=" d-flex gap-5 text-light ps-5 pt-2 ">
            <p>Store</p>
            <p>Orders</p>
            <p>Analytics</p>
          </div>
        </div>
        <div className="d-flex justify-content-end gap-2 text-light pt-2 ">
          <div>
            <TfiShoppingCart fill="white" />
          </div>
          <div className="">
            <p>
              Hello, James <IoIosArrowDown />{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="bg-light pb-2 shadow-lg">
        <div className="d-flex align-items-center gap-2">
          <p className="pt-3 ps-4 ">Orders</p> <IoIosArrowForward />{" "}
          <a href="#" className="text-reset">
            Order3245ABC
          </a>
        </div>
        <div className="d-flex justify-content-between px-4">
          <div>
            <h4 className="">Order 3245ABC</h4>
          </div>
          <div>
            <div class="d-flex gap-1 ">
              <button
                className="btn border rounded-pill btn1 px-4"
                type="button"
              >
                Back
              </button>
              <button
                className="btn border rounded-pill btn2 px-4"
                type="button"
              >
                Approve order
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Topnavbar;

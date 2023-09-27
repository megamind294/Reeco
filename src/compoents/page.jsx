import React, { useState } from "react";
import "../Assets/css/rest.css";
import { connect } from "react-redux";
import {
  approveProduct,
  markAsMissing,
  editProduct,
  completeOrder,
  setUrgentProduct,
} from "../redux/Actions/productActions";
import { CiApple } from "react-icons/ci";
import { CiPillsBottle1 } from "react-icons/ci";
import { BsSnow2 } from "react-icons/bs";
import { GiSnowman } from "react-icons/gi";
import { PiPrinterThin } from "react-icons/pi";
import dummyData from "../Assets/Data/dummyData.json";
import { TiTick, TiTimes } from "react-icons/ti";
import UrgentConfirmationModal from "../compoents/UrgentConfirmationModal";

function Page({
  products,
  approveProduct,
  markAsMissing,
  editProduct,
  completeOrder,
  setUrgentProduct,
  urgentProductId,
}) {
  const [approvedItems, setApprovedItems] = useState([]);

  const handleCrossButtonClick = (productId) => {
    console.log("Cross button clicked for product ID:", productId);
    setUrgentProduct(productId); // Dispatch the action to set urgentProductId
  };
  const toggleApproval = (productId) => {
    if (approvedItems.includes(productId)) {
      setApprovedItems(approvedItems.filter((id) => id !== productId));
      approveProduct(productId);
    } else {
      setApprovedItems([...approvedItems, productId]);
      approveProduct(productId);
    }
  };

  return (
    <>
      <div className="container border rounded bg-card mb-4">
        <div className="row p-3">
          <div className="col border-end ">
            <p className="mb-1 text-p">Supplier</p>
            <span className="text-span">East coast fruits & vegetable</span>
          </div>
          <div className="col border-end ">
            <p className="mb-1 text-p">Shipping date</p>
            <span className="text-span">Thu,Feb 10</span>
          </div>
          <div className="col border-end ">
            <p className="mb-1 text-p">Total</p>
            <span className="text-span">$ 15,028.3</span>
          </div>
          <div className="col border-end ">
            {" "}
            <p className="mb-1 text-p">Category</p>
            <span className="text-span">
              <CiApple /> <CiPillsBottle1 /> <BsSnow2 /> <GiSnowman />
            </span>
          </div>
          <div className="col border-end ">
            {" "}
            <p className="mb-1 text-p">Department</p>
            <span className="text-span">300-444-678</span>
          </div>
          <div className="col">
            <p className="mb-1 text-p">Status</p>
            <span className="text-span"> Awaiting your approval</span>
          </div>
        </div>
      </div>
      <div className="container border rounded bg-card  mb-2 ">
        <div className="d-flex justify-content-between">
          <div className="form-group has-search pt-3">
            <span className="fa fa-search form-control-feedback"></span>
            <input
              type="text"
              className="form-control rounded-pill   "
              placeholder="Search"
            />
          </div>
          <div className="d-flex gap-4 align-items-center ">
            <button className="btn border rounded-pill btn1 " type="button">
              Add items
            </button>
            <div>
              <PiPrinterThin fill="#1e633f" />
            </div>
          </div>
        </div>

        <div className="px-3">
          <table className="table ">
            <thead className="rounded-top">
              <tr>
                <th>Product Name</th>
                <th>Brand</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {dummyData.map((item, index) => (
                <tr key={index}>
                  <td>
                    {item.productName.icon && (
                      <span className={item.productName.icon}></span>
                    )}
                    {item.productName.name}
                  </td>
                  <td>{item.brand}</td>
                  <td>{item.quantity}</td>
                  <td>{item.total}</td>
                  <td className="d-flex align-items-center gap-4">
                    {item.status.icon === "tick-mark" ? (
                      <>
                        {approvedItems.includes(item.id) ? (
                          <button className="btn btn-success">Approved</button>
                        ) : null}
                        <TiTick
                          className="tick-icon"
                          onClick={() => toggleApproval(item.id)}
                        />

                        <TiTimes
                          className="cross-icon"
                         onClick={() => handleCrossButtonClick(item.id)}
                        />
                        {urgentProductId !== null && (
                          <UrgentConfirmationModal
                            isOpen={true}
                            onClose={() => setUrgentProduct(null)} // Clear urgentProductId when the modal is closed
                            onConfirm={(isUrgent) => {
                              // Handle the urgent confirmation using Redux action
                              // Example: markAsMissing(urgentProductId, isUrgent ? "Urgent" : "Not Urgent");
                              setUrgentProduct(null); // Clear urgentProductId after confirmation
                            }}
                          />
                        )}
                      </>
                    ) : null}
                    <p className="mt-2">edit</p>
                    {/* Conditionally render buttons for completed orders */}
                    {item.isCompleted && (
                      <button className="btn btn-success">Completed</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

// Map Redux state to component props
const mapStateToProps = (state) => ({
  products: state.productReducer.products,
});

// Map action creators to component props
const mapDispatchToProps = {
  approveProduct,
  markAsMissing,
  editProduct,
  completeOrder,
  setUrgentProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);

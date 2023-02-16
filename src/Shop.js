import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";
const Shop = () => {
  const dispatch = useDispatch();
  const { depositMoney, withdrawMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button
        className="btn btn-danger mx-2"
        onClick={() => {
          withdrawMoney(100);
        }}
      >
        -
      </button>
      Update Wallet
      <button
        className="btn btn-success mx-2"
        onClick={() => {
          depositMoney(100);
        }}
      >
        +
      </button>
    </div>
  );
};

export default Shop;

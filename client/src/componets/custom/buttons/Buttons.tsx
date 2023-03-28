import classNames from "classnames";
import React from "react";
import { buttonType } from "../../../types/types";

const Buttons = ({ type, name,className ,onClick}: buttonType) => {
  return (
    <div>
      <button type={type} className="btn btn-outline-primary" onClick={onClick}>
        {name} <i className={className}></i>
      </button>
    </div>
  );
};

export default Buttons;
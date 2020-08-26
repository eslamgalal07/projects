import React from "react";
import { connect } from "react-redux";

import { decreament, increament } from "../actions";
const Counter = (props) => {
  return (
    <div>
      <button onClick={props.increament} style={{ marginRight: "10px" }}>
        Increament{" "}
      </button>
      <span>{props.count}</span>
      <button onClick={props.decreament} style={{ marginLeft: "10px" }}>
        {" "}
        Decreament
      </button>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};
export default connect(mapStateToProps, {
  increament,
  decreament,
})(Counter);

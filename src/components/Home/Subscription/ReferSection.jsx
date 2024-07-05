import React from "react";
import { ref_pic } from "../../../assets/assets";

const ReferSection = () => {
  return (
    <>
      <div className="heading">
        <hr className="hr-left" />
        <h2>Refer your Friend</h2>
        <hr className="hr-right" />
      </div>
      <br />
      <div className="refer-section">
        <img
          src={ref_pic}
          className="image1 h-[400px] w-[1200px] block m-auto shadow-[0px_0px_5px_#808080]"
          style={{ borderRadius: "10px" }}
        />
      </div>
      <br />
    </>
  );
};

export default ReferSection;

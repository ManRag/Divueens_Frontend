import React from 'react';
import { ref_pic } from '../../assets/assets';

const ReferSection = () => {
  return (
    <>
      <h2
        className="try11"
        style={{ alignItems: 'center', fontFamily: 'Montserrat' }}
      >
        Refer your Friend
      </h2>
      <br />
      <div className="refer-section">
        <img
          src={ref_pic}
          className="image1"
          style={{ borderRadius: '10px' }}
        />
      </div>
      <br />
    </>
  );
};

export default ReferSection;

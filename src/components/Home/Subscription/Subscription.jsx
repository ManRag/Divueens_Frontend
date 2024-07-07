import React from 'react';
import Slider from './Slider';
import ReferSection from './ReferSection';
import ContactSection from './ContactSection';
import './Subscription.css'


function Subscription() {
    return (
      <div className="combos_here">
        <div className="heading">
        <hr className="hr-left" />
        <h2>Exclusive Combos</h2>
        <hr className="hr-right" />
      </div>
        <Slider />
        <ReferSection />
        <ContactSection />
      </div>
    );
  }

export default Subscription

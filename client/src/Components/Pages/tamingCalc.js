import React from "react";

export default function TamingCalc() {
  return (
    <div className='tamingCalc-container'>
      <div className='calc-wrapper'>
        <div className='calc-details-wrapper'>
          <form>
            <input type='' />
            <li>Creature</li>
            <li>Level</li>
            <li>Taming Method</li>
            <li>Taming Multiplier</li>
            <li>Consumption Multiplier</li>
          </form>

          <div className='calc-details-wrapper'>
            <ul>
              <li>Food</li>
              <li>Mejoberry</li>
              <li>mixed berries</li>
              <li>crops</li>
              <li>kibble</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

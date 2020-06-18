import React, { useState, useEffect } from "react";

import "../Style/App.css";

export default function TamingCalc() {
  useEffect(() => {
    fetchTamingStats();
  }, []);

  const [tamingStats, setTamingStats] = useState([]);

  const fetchTamingStats = async () => {
    const data = await fetch("http://localhost:5000/tamingStats");
    const tamingStats = await data.json();
    setTamingStats(tamingStats);
    console.log(tamingStats);
  };

  return (
    <div className='tamingCalc-container'>
      <div className='calc-wrapper'>
        <div className='calc-form-wrapper'>
          <form>
            <select name='creature' className='select-element'>
              {tamingStats.map((stat) => (
                <option key={stat.id} value={stat.creature}>
                  {stat.creature}
                </option>
              ))}
            </select>
            <input
              type='text'
              className='form-imput'
              placeholder='Creature Level'
            />
            <input
              type='radio'
              value='Standard'
              name='method'
              className='radio-element'
            />
            <label for='method'>Standard</label>
            <input
              type='radio'
              value='Starve'
              name='method'
              className='radio-element'
            />
            <label for='method'>Starve</label>
            <input
              type='text'
              className='form-input'
              placeholder='Taming Multiplier'
            />
            <input
              type='text'
              className='form-input'
              placeholder='Consumption Multiplier'
            />
          </form>

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
  );
}

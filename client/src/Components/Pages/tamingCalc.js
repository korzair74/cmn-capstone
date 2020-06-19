import React, { useState, useEffect } from "react";

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
    <div className='taming-calc-container'>
      <div className='taming-comp-wrapper'>
        <div className='taming-components'>
          <div className='calc-wrapper'>
            <div className='calc-form-wrapper'>
              <form>
                <div>
                  <label className='form-label' for='creature'>
                    Creature:
                  </label>
                  <select name='creature' className='select-element'>
                    {tamingStats.map((stat) => (
                      <option key={stat.id} value={stat.creature}>
                        {stat.creature}
                      </option>
                    ))}
                  </select>
                  <label className='form-label'>Creature Level:</label>
                  <input
                    name='level-label'
                    type='text'
                    className='form-input'
                    placeholder='Creature Level'
                  />
                </div>
                <div>
                  <input
                    type='radio'
                    value='Standard'
                    name='method'
                    className='radio-element'
                  />
                  <label className='form-label' for='method'>
                    Standard
                  </label>
                  <input
                    type='radio'
                    value='Starve'
                    name='method'
                    className='radio-element'
                  />
                  <label for='method'>Starve</label>
                </div>
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
              <div className='food-wrapper'>
                <div className='food-form-wrapper'>
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
        </div>
      </div>
    </div>
  );
}

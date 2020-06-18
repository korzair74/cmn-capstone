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
    <div className='tamingCalc-container'>
      <div className='calc-wrapper'>
        <div className='calc-details-wrapper'>
          <form>
            <select name='creature' className='select-element'>
              {tamingStats.map((stat) => (
                <option key={stat.id} value={stat.creature}>
                  {stat.creature}
                </option>
              ))}
            </select>
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

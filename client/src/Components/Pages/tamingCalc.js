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

  const headings = ["Food Type", "Qty", "Time"];
  const rows = [
    "Kibble",
    "Crops",
    "Mejoberry",
    "Berries",
    "Raw Mutton",
    "Raw Prime Meat",
    "Cooked Lamb Chop",
    "Cooked Prime Meat",
    "Raw Prime Fish Meat",
    "Raw Meat",
    "Cooked Meat",
  ];

  return (
    <form>
      <div className='taming-calc-container'>
        <div className='taming-comp-wrapper'>
          <div className='taming-components'>
            <div className='calc-wrapper'>
              <div className='calc-form-wrapper'>
                <div>
                  <h5>
                    Creature:&emsp;
                    <select name='creature' className='select-element'>
                      {tamingStats.map((stat) => (
                        <option
                          className='select-option'
                          key={stat.id}
                          value={stat.creature}>
                          {stat.creature}
                        </option>
                      ))}
                    </select>
                  </h5>
                </div>
                <div>
                  <h5>
                    Creature Level:&emsp;
                    <input
                      type='number'
                      className='select-number'
                      defaultValue='1'
                    />
                  </h5>
                </div>
                {/* <div>
                  <h5>
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
                  </h5>
                </div> */}
                <div>
                  <h5>
                    Taming Multiplier:&emsp;
                    <input
                      type='number'
                      defaultValue='1'
                      className='select-number'
                    />
                  </h5>
                </div>
                <div>
                  <h5>
                    Consumption Multiplier:&emsp;
                    <input
                      type='number'
                      defaultValue='1'
                      className='select-number'
                    />
                  </h5>
                </div>
              </div>
            </div>
            <div className='food-details-wrapper'>
              <table></table>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

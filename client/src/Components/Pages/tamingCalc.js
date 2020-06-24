import React, { useState, useEffect, useRef } from "react";
import CreatureDetails from "../creatureDetails";

export default function TamingCalc() {
  useEffect(() => {
    fetchArkData();
  }, []);

  const [arkData, setArkData] = useState([]);
  const [creature, setCreature] = useState([]);
  const [level, setLevel] = useState("1");
  const [creatureDetails, setCreatureDetails] = useState([]);
  const stateRef = useRef(level);

  const fetchArkData = async () => {
    const data = await fetch("http://localhost:5000/arkdata");
    const arkData = await data.json();
    setArkData(arkData);
    setCreature(arkData[0].name);
    setCreatureDetails(arkData[0].levelOne);
  };

  const dataSelector = () => {
    // console.log(stateRef.current);
    if (Number(level) < 30) {
      console.log("this is arkData", arkData);
      // setCreatureDetails(arkData[0].levelOne);
      console.log("creature details", creatureDetails);
    } else if (Number(level) < 60) {
      console.log("60");
    } else if (Number(level) < 90) {
      console.log("90");
    } else if (Number(level) < 120) {
      console.log("120");
    } else if (Number(level) < 150) {
      console.log("150");
    } else {
      console.log("everything else");
    }
  };

  useEffect(() => {
    dataSelector();
    console.log("use effect data selector");
  }, [level, creature]);

  return (
    <form>
      <div className='taming-calc-container'>
        <div className='taming-comp-wrapper'>
          <div className='calc-wrapper'>
            <div className='calc-form-wrapper'>
              <div>
                <h5>
                  Creature:&emsp;
                  <select
                    name='creature'
                    className='select-element'
                    onChange={(e) => setCreature(e.target.value)}>
                    {arkData.map((stat) => (
                      <option
                        className='select-option'
                        key={stat._id}
                        value={stat.name}>
                        {stat.name}
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
                    onChange={(e) => setLevel(e.target.value)}
                    value={level}
                  />
                </h5>
              </div>
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

          <div className='details-wrapper'>
            <CreatureDetails
              key={creatureDetails.index}
              creatureDetails={creatureDetails}
            />
          </div>
        </div>
      </div>
    </form>
  );
}

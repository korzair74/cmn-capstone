import React, { useState, useEffect } from "react";
import CreatureDetails from "../creatureDetails";

export default function TamingCalc() {
  useEffect(() => {
    fetchArkData();
  }, []);

  const [arkData, setArkData] = useState([]);
  const [creature, setCreature] = useState("Argentavis");
  const [level, setLevel] = useState("1");
  const [creatureDetails, setCreatureDetails] = useState([]);

  const fetchArkData = async () => {
    const data = await fetch("http://localhost:5000/arkdata");
    const arkData = await data.json();
    console.log(arkData);
    setArkData(arkData);
    setCreatureDetails(arkData[0].levelOne);
  };

  useEffect(() => {
    // call your switch statement and pass the level
    console.log("level changed!");
  }, [level]);
  // levelSelector = () => {
  //   switch ({ level }) {
  //     case { level } < 30:
  //       return `${stat.levelOne}`;
  //     case { level } < 60:
  //       return `${stat.levelThirty}`;
  //     case { level } < 90:
  //       return `${stat.levelSixty}`;
  //     case { level } < 120:
  //       return `${stat.levelNinety}`;
  //     case { level } < 150:
  //       return `${stat.levelOneHundredTwenty}`;
  //     case { level } >= 150:
  //       return `${stat.levelOneHundredFifty}`;
  //   }
  // };

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
            {creatureDetails.map((creatureDetail) => {
              return <CreatureDetails creatureDetail={creatureDetail} />;
            })}
          </div>
        </div>
      </div>
    </form>
  );
}

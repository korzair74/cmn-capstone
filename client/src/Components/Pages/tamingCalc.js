import React, { useState, useEffect } from "react";
import CreatureDetails from "../creatureDetails";
export default function TamingCalc() {
  useEffect(() => {
    fetchArkData();
  }, []);
  const [arkData, setArkData] = useState([]);
  const [creatureName, setCreatureName] = useState("");
  const [level, setLevel] = useState("1");
  const [creatureDetails, setCreatureDetails] = useState([]);
  const fetchArkData = async () => {
    const data = await fetch("http://localhost:5000/arkdata");
    const arkData = await data.json();
    setArkData(arkData);
    setCreatureName(arkData[0].name);
    setCreatureDetails(arkData[0].levelOne);
  };
  const dataSelector = (currentLevel) => {
    if (Number(currentLevel) < 30) {
      console.log("ark data", arkData);
      console.log("currentLevel", currentLevel);
      console.log("creaturedetails", creatureDetails);
      filterCreatureCurrentLevel("levelOne");
    } else if (Number(currentLevel) < 60) {
      filterCreatureCurrentLevel("levelThirty");
      console.log("60");
    } else if (Number(currentLevel) < 90) {
      filterCreatureCurrentLevel("levelSixty");
      console.log("90");
    } else if (Number(currentLevel) < 120) {
      filterCreatureCurrentLevel("levelNinety");
      console.log("120");
    } else if (Number(currentLevel) < 150) {
      filterCreatureCurrentLevel("levelONeHundredTwenty");
      console.log("ark data", arkData);
      console.log("currentLevel", currentLevel);
      console.log("creaturedetails", creatureDetails);
      console.log("150");
    } else {
      filterCreatureCurrentLevel("levelOneHundredFifty");
      console.log("everything else");
    }
  };
  const filterCreatureCurrentLevel = (whichLevel) => {
    arkData.forEach((data) => {
      if (data.name === creatureName) {
        setCreatureDetails(data[whichLevel]);
      }
    });
  };
  const handleLevelSelectorChange = (e) => {
    console.log("yay!");
    setLevel(e.target.value);
    dataSelector(e.target.value);
  };
  const handleSetCreatureChange = (e) => {
    setCreatureName(e.target.value);
    setLevel("1");
    arkData.forEach((data) => {
      if (data.name === e.target.value) {
        setCreatureDetails(data.levelOne);
      }
    });
  };
  // useEffect(() => {
  //   dataSelector();
  //   console.log("use effect data selector");
  // }, [level, creature]);
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
                    onChange={handleSetCreatureChange}>
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
                    onChange={handleLevelSelectorChange}
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

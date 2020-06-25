import React, { useState, useEffect } from "react";
import CreatureDetails from "../creatureDetails";

import arkBackground from "../../Assets/images/arkBackground.jpg";

export default function TamingCalc() {
  useEffect(() => {
    fetchArkData();
  }, []);
  const [arkData, setArkData] = useState([]);
  const [creatureName, setCreatureName] = useState("");
  const [level, setLevel] = useState("1");
  const [creatureDetails, setCreatureDetails] = useState([]);
  const fetchArkData = async () => {
    const data = await fetch("https://cmn-capstone.herokuapp.com/arkdata");
    // const data = await fetch("http://localhost:5000/arkdata");
    const arkData = await data.json();
    setArkData(arkData);
    setCreatureName(arkData[0].name);
    setCreatureDetails(arkData[0].levelOne);
  };
  const dataSelector = (currentLevel) => {
    if (Number(currentLevel) < 30) {
      filterCreatureCurrentLevel("levelOne");
    } else if (Number(currentLevel) < 60) {
      filterCreatureCurrentLevel("levelThirty");
    } else if (Number(currentLevel) < 90) {
      filterCreatureCurrentLevel("levelSixty");
    } else if (Number(currentLevel) < 120) {
      filterCreatureCurrentLevel("levelNinety");
    } else if (Number(currentLevel) < 150) {
      filterCreatureCurrentLevel("levelONeHundredTwenty");
    } else {
      filterCreatureCurrentLevel("levelOneHundredFifty");
    }
  };
  const filterCreatureCurrentLevel = (levelSet) => {
    arkData.forEach((data) => {
      if (data.name === creatureName) {
        setCreatureDetails(data[levelSet]);
      }
    });
  };
  const handleLevelSelectorChange = (e) => {
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
  return (
    <form>
      <div className='taming-calc-container'>
        <div className='taming-comp-wrapper'>
          <div className='calc-wrapper'>
            <div className='calc-form-wrapper'>
              <div className='selectors-container'>
                <div className='selectors-wrapper'>
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
                  <div className='level-selector'>
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
                </div>
                <div className='image-wrapper'>
                  <img src={arkBackground} alt='' />
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
      </div>
    </form>
  );
}

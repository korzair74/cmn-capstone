import React from "react";

export default function CreatureDetails(props) {
  const details = props.creatureDetails;

  const renderHeader = () => {
    const headerElements = [
      "Food Type",
      "Food Qty",
      "Narco Berries",
      "Narcotics",
      "Bio Toxin",
      "Time",
    ];
    return headerElements.map((element, index) => {
      return <th key={index}>{element}</th>;
    });
  };

  const renderBody = () => {
    return details.map(
      ({
        index,
        food_type,
        food_qty,
        narcoBerries,
        narcotics,
        biotoxin,
        time,
      }) => {
        return (
          <tr key={index}>
            <td>{food_type}</td>
            <td>{food_qty}</td>
            <td>{narcoBerries}</td>
            <td>{narcotics}</td>
            <td>{biotoxin}</td>
            <td>{time}</td>
          </tr>
        );
      }
    );
  };
  return (
    <div>
      <table className='details-table'>
        <thead>{renderHeader()}</thead>
        <tbody>{renderBody()}</tbody>
      </table>
    </div>
  );
}

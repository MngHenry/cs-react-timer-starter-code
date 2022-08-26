import React from "react";

function HistoryRecord({ history }) {
  return (
    <div className="history">
      <h4>History Record:</h4>
      <ul>
        {history.map((record) => {
          const des = record
            ? `Rank #${history.indexOf(record) + 1}: ` + record
            : "Record:";
          return (
            <li key={record}>
              <p>{des}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default HistoryRecord;

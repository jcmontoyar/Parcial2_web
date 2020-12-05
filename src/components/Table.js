import React from "react";
import { FormattedMessage } from "react-intl";

const indexes = [10, 12, 2, 3, 6, 14];

export default function Table({ headers, data }) {
  let count = 1;
  return (
    <table className="table">
      <thead className="thead-dark">
        <tr>
          <th scope="col">#</th>
          {indexes.map((index) => (
            <th key={headers[index]} scope="col">
              <FormattedMessage id={"" + headers[index]} />
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((datica) => {
          return (
            <tr>
              <th scope="row">{count++}</th>
              <td>{datica[headers[indexes[0]]]}</td>
              <td>
                <img
                  src={datica[headers[indexes[1]]]}
                  alt={datica[headers[indexes[0]]]}
                  width="150px"
                  height="150px"
                />
              </td>
              <td>{datica[headers[indexes[2]]]}</td>
              <td>{datica[headers[indexes[3]]]}</td>
              <td>{datica[headers[indexes[4]]]}</td>
              <td>
                {datica[headers[indexes[5]]] !== undefined
                  ? datica[headers[indexes[5]]].map((type) => (
                      <div className="row spans">
                        <span className="badge badge-secondary">{type}</span>
                      </div>
                    ))
                  : ""}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

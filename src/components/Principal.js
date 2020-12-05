import React, { useEffect, useState } from "react";
import Table from "./Table";

export default function Principal({ link }) {
  // Estado que maneja la data
  const [data, setData] = useState([]);

  // Estado que maneja los headers
  const [headers, setHeader] = useState([]);

  useEffect(() => {
    obtenerData();
  }, []);

  // Obtener empleados llamando al back
  const obtenerData = async () => {
    fetch(link)
      .then((res) => res.json())
      .then((res) => {
        console.log(Object.keys(res[0]));
        setData(res);
        setHeader(Object.keys(res[0]));
      });
  };

  return (
    <main>
      <div className="container">
        <Table data={data} headers={headers}></Table>
        <hr />
      </div>
      <div className="container">
        <div className="canvas">
          <svg id="svg" width="300" height="300"> </svg>
        </div>
      </div>
    </main>
  );
}

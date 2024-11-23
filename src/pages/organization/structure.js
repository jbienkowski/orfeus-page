// src/pages/index.js
import React, { useEffect, useState } from "react";

export default function Structure() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/boards")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <h1>Structure</h1>

      <p>
        ORFEUS (Observatories and Research Facilities for EUropean Seismology)
        is a non-profit foundation under Dutch law and is directed by an
        international Board of Directors and its Executive Committee. The Board
        of Directors consists of representatives of the Core Participants and
        Participants by Right (EMSC, EFEHR, ESC, ISC) and appoints members of
        the Executive Committee.
      </p>
      <table>
        <thead>
          <tr>
            <th>Board</th>
            <th>Name</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.members}</td>
              <td>{item.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

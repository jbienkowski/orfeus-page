// src/pages/index.js
import React from "react";
import Table from "@/components/Table";
import data from "@/data/participation.json";

export default function Participation() {
  return (
    <>
      <h1>Participation</h1>

      <p>
        In general, all institutes and organisations interested in seismology
        can become an ORFEUS participant. The Board of Participants (BoP)
        consists of the participant representatives. The BoP brings issue
        regarding data and services improvements to the attention of the
        Secretary General, to be reported to the ExeCom and BoD.
      </p>

      <Table
        thead={
          <thead>
            <tr>
              <th>Country</th>
              <th>Institution</th>
            </tr>
          </thead>
        }
        tbody={
          <tbody>
            {data.map((item) => (
              <tr key={item.institution}>
                <td>{item.country}</td>
                <td>{item.institution}</td>
              </tr>
            ))}
          </tbody>
        }
      />
    </>
  );
}

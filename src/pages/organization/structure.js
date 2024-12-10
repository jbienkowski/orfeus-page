// src/pages/index.js
import Table from "@/components/Table";
import data from "@/data/structure.json";
import Prose from "@/components/Prose";

export default function Structure() {
  return (
    <>
      <Prose>
        <h1>Organization Structure</h1>
        <p>
          ORFEUS is a non-profit foundation that coordinates and promotes
          digital, broadband seismology in the European-Mediterranean area. The
          ORFEUS organization consists of a board of directors, a scientific
          advisory committee, and a number of working groups. The ORFEUS
          Secretariat is hosted by the Royal Netherlands Meteorological
          Institute (KNMI) in De Bilt, The Netherlands.
        </p>

        <Table
          thead={
            <thead>
              <tr>
                <th>Name</th>
                <th>Members</th>
                <th>Role</th>
              </tr>
            </thead>
          }
          tbody={
            <tbody>
              {data.map((item) => (
                <tr key={item.name}>
                  <td>{item.name}</td>
                  <td>{item.members}</td>
                  <td>{item.role}</td>
                </tr>
              ))}
            </tbody>
          }
        />
      </Prose>
    </>
  );
}

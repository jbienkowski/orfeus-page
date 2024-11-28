// src/pages/index.js
import Table from "@/components/Table";
import data from "@/data/structure.json";

export default function Structure() {
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

      <Table data={data} fields={["name", "members", "role"]} />
    </>
  );
}

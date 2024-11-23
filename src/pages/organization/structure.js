// src/pages/index.js
import React from "react";
import Table from "@/components/Table";

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

      <Table apiPath="/api/structure" fields={["name", "members", "role"]} />
    </>
  );
}

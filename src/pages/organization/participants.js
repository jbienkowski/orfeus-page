// src/pages/index.js
import React, { useEffect, useState } from "react";
import Table from "@/components/Table";

export default function Participants() {
  return (
    <>
      <h1>ORFEUS Core Participants</h1>

      <p>
        ORFEUS is funded and governed by Core Participants from European
        countries (see table below) with their representatives in the Board of
        Directors (BoD). The BoD is the governing body of the ORFEUS Foundation
        and takes the necessary decisions related to the Foundation, its
        objectives and activities. The BoD has power to:
      </p>

      <ul>
        <li>Authorize strategy on behalf of the Organization</li>
        <li>Make rules or regulations for its management</li>
        <li>Create and discharge additional offices or special committees</li>
        <li>
          Select, employ or remove such of its officers, agents or employees
        </li>
        <li>
          Approve and terminate core participation and set participation fees
        </li>
        <li>
          Fill vacancies and approve participant rotation in ORFEUS committees
        </li>
        <li>Select the Secretary General</li>
        <li>Review every 4 years and select, when needed, the Secretariat</li>
        <li>
          Approve the annual reports of activities and work programme
          propositions
        </li>
        <li>Approve the annual financial report</li>
        <li>Approve the provisional budget</li>
        <li>Approve contracts with other organisations.</li>
      </ul>

      <Table apiPath="/api/participants" fields={["country", "institution"]} />
    </>
  );
}

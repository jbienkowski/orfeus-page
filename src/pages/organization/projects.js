// src/pages/index.js
import React from 'react';
import Table from '@/components/Table';

export default function Projects() {
  return (
    <>
    <h1>Core projects involving ORFEUS</h1>
    <h2>Ongoing projects</h2>
    <Table apiPath="/api/projects?state=ongoing" fields={["name", "years", "description"]} />
    <h2>Finalized projects</h2>
    <Table apiPath="/api/projects?state=finalized" fields={["name", "years", "description"]} />
    </>
  );
}

// src/pages/index.js
import React from 'react';
import Table from '@/components/Table';
import projects_ongoing from '@/data/projects_ongoing.json';
import projects_finalized from '@/data/projects_finalized.json';

export default function Projects() {
  return (
    <>
    <h1>Core projects involving ORFEUS</h1>
    <h2>Ongoing projects</h2>
    <Table data={projects_ongoing} fields={["name", "years", "description"]} />
    <h2>Finalized projects</h2>
    <Table data={projects_finalized} fields={["name", "years", "description"]} />
    </>
  );
}

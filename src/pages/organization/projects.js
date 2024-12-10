// src/pages/index.js
import React from "react";
import Table from "@/components/Table";
import Prose from "@/components/Prose";
import projects_ongoing from "@/data/projects_ongoing.json";
import projects_finalized from "@/data/projects_finalized.json";

export default function Projects() {
  return (
    <Prose>
      <h1>Core projects involving ORFEUS</h1>
      <h2>Ongoing projects</h2>
      <Table
        thead={
          <thead>
            <tr>
              <th>Name</th>
              <th>Years</th>
              <th>Description</th>
            </tr>
          </thead>
        }
        tbody={
          <tbody>
            {projects_ongoing.map((project) => (
              <tr key={project.name}>
                <td>{project.name}</td>
                <td>{project.years}</td>
                <td>{project.description}</td>
              </tr>
            ))}
          </tbody>
        }
      />
      <h2>Finalized projects</h2>
      <Table
        thead={
          <thead>
            <tr>
              <th>Name</th>
              <th>Years</th>
              <th>Description</th>
            </tr>
          </thead>
        }
        tbody={
          <tbody>
            {projects_finalized.map((project) => (
              <tr key={project.name}>
                <td>{project.name}</td>
                <td>{project.years}</td>
                <td>{project.description}</td>
              </tr>
            ))}
          </tbody>
        }
      />
    </Prose>
  );
}

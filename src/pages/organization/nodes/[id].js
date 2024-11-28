// src/pages/organization/nodes/[id].js
import React from "react";
import data from "@/data/nodes.json";
import { useRouter } from "next/router";

export default function Node() {
  const router = useRouter();
  const { id } = router.query;
  const nodeData = data.filter((node) => node.node_code === id);

  if (nodeData.length === 0) {
    return <p>No data found for this node.</p>;
  }

  const node = nodeData[0];

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Node {id}</h1>
      <div className="mb-4">
        <p><strong>Node Code:</strong> {node.node_code}</p>
        <p><strong>Node Description:</strong> {node.node_description}</p>
        <p><strong>Node URL Base:</strong> <a href={`https://${node.node_url_base}`} target="_blank" rel="noopener noreferrer">{node.node_url_base}</a></p>
      </div>
    </>
  );
}
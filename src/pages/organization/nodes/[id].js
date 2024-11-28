// src/pages/organization/nodes/[id].js
import React from "react";
import Table from "@/components/Table";
import data from "@/data/nodes.json";
import { useRouter } from "next/router";

export default function Node() {
  const router = useRouter();
  const { id } = router.query;
  const nodeData = data.filter((node) => node.node_code === id);

  return (
    <>
      <h1>Node {id}</h1>
      {nodeData.length > 0 ? (
        <Table data={nodeData} fields={["node_code", "node_description", "node_url_base"]} />
      ) : (
        <p>No data found for this node.</p>
      )}
    </>
  );
}
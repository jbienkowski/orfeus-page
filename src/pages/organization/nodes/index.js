// src/pages/index.js
import Table from "@/components/Table";
import data from "@/data/nodes.json";

export default function Nodes() {
  return (
    <>
      <h1>Nodes</h1>

      <Table data={data} fields={["node_code", "node_description"]} />
    </>
  );
}

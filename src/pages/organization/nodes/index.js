// src/pages/index.js
import Table from "@/components/Table";
import Prose from "@/components/Prose";
import data from "@/data/nodes.json";
import Link from "next/link";

export default function Nodes() {
  return (
    <Prose>
      <h1>Nodes</h1>

      <Table
        thead={
          <thead>
            <tr>
              <th>Node Code</th>
              <th>Node Description</th>
              <th>Node URL Base</th>
            </tr>
          </thead>
        }
        tbody={
          <tbody>
            {data.map((node) => (
              <tr key={node.node_code}>
                <td>
                  <Link className="text-lg" href={`/organization/nodes/${node.node_code}`}>
                    {node.node_code}
                  </Link>
                </td>
                <td>{node.node_description}</td>
                <td>{node.node_url_base}</td>
              </tr>
            ))}
          </tbody>
        }
      />
    </Prose>
  );
}

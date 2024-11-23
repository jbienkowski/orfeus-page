import React, { useEffect, useState } from "react";

const Table = ({ apiPath, fields }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(apiPath)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [apiPath]);

  return (
    <div className="flex flex-col">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
              <thead>
                <tr>
                  {fields.map((field, fieldIndex) => (
                    <th
                      key={`${field}-${fieldIndex}`}
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                      {field}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                {data.map((item, itemIndex) => (
                  <tr key={itemIndex}>
                    {fields.map((field, fieldIndex) => (
                      <td
                        key={`${field.key}-${itemIndex}-${fieldIndex}`}
                        className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                        {item[field]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;

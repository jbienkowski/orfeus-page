import React, { useState, useEffect } from "react";
import axios from "axios";
import dynamic from "next/dynamic";
import Prose from "@/components/Prose";
import "leaflet/dist/leaflet.css";
import { useRouter } from "next/router";

// Dynamically import MapContainer and other Leaflet components to ensure they are only used on the client side
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});

const NodeComponent = () => {
  const router = useRouter();
  const { id } = router.query;

  const [stations, setStations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dotIcon, setDotIcon] = useState(null);

  useEffect(() => {
    const fetchStations = async () => {
      try {
        const response = await axios.get(
          `https://orfeus-eu.org/api/stations?station_node_code=${id}`
        );
        setStations(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching stations:", error);
        setLoading(false);
      }
    };

    fetchStations();
  }, [id]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const L = require("leaflet");
      const icon = new L.DivIcon({
        className: "custom-dot-icon",
        html: '<div style="background-color: blue; width: 5px; height: 5px; border-radius: 50%;"></div>',
        iconSize: [10, 10],
        iconAnchor: [5, 5],
      });
      setDotIcon(icon);
    }
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!stations || !stations.length) {
    return <p>No stations found for this node.</p>;
  }

  return (
    <div>
      <Prose>
        <h1 className="text-2xl font-bold mb-4">Node {id}</h1>
        <div className="mb-4">
          <p>
            <strong>Node Code:</strong> {id}
          </p>
          <p>
            <a
              href={`https://${stations[0].node_url_base}`}
              target="_blank"
              rel="noopener noreferrer">
              {stations[0].node_url_base}
            </a>
          </p>
        </div>
      </Prose>
      <MapContainer
        center={[54, 15]}
        zoom={3}
        style={{ height: "400px", width: "100%" }}
        scrollWheelZoom={false}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {stations.map((station) => (
          <Marker
            key={station.id}
            position={[station.station_latitude, station.station_longitude]}
            icon={dotIcon}>
            <Popup>
              <strong>
                {station.station_network_code}.{station.station_code}
              </strong>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default NodeComponent;

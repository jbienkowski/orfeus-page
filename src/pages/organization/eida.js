import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Prose from "../../components/Prose";

// Fix for default marker icon issue in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Dynamically import MapContainer to avoid SSR issues
const MapContainer = dynamic(() => import("react-leaflet").then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import("react-leaflet").then(mod => mod.Popup), { ssr: false });

export default function Eida() {
  const [stations, setStations] = useState([]);

  useEffect(() => {
    fetch("https://orfeus-eu.org/api/stations")
      .then((response) => response.json())
      .then((data) => setStations(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <Prose>
      {typeof window !== "undefined" && (
        <MapContainer center={[51.505, -0.09]} zoom={2} style={{ height: "500px", width: "100%" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {stations.map((station) => (
            <Marker
              key={station.id}
              position={[station.station_latitude, station.station_longitude]}
            >
              <Popup>
                {station.station_network_code}.{station.station_code} (
                {station.station_latitude}, {station.station_longitude})
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      )}
    </Prose>
  );
}
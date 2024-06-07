import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import LocationMarker from "./LocationMarker";
import "../style/map.scss";

function Map() {
  return (
    <div className="div-map">
      <MapContainer
        className="map-container"
        center={[48.8566, 2.3522]}
        zoom={13}
        style={{
          height: "40vh",
          width: "80vw",
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker />
      </MapContainer>
    </div>
  );
}

export default Map;

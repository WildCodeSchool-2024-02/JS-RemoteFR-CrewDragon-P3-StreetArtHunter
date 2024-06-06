import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../style/map.scss";

const position = [48.8566, 2.3522];
function Map() {
  return (
    <div className="div-map">
      <MapContainer
        className="map-container"
        center={position}
        zoom={13}
        style={{
          height: "40vh",
          width: "80vw",
        }}
      >
        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' />
      </MapContainer>
    </div>
  );
}

export default Map;

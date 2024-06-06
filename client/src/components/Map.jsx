import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const position = [48.8566, 2.3522];
function Map() {
  return (
    <div className="div-map">
      <MapContainer
        center={position}
        zoom={13}
        style={{
          height: "40vh",
          width: "80vw",
          borderBlockStyle: "solid",
          borderBlockColor: "white",
        }}
        className="map-container"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </MapContainer>
    </div>
  );
}

export default Map;

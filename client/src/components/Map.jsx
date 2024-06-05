import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const position = [48.8566, 2.3522];
function Map() {
  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "40vh", width: "80vw" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <p>Oups!</p>
    </MapContainer>
  );
}

export default Map;

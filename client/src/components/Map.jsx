import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import LocationMarker from "./LocationMarker";
import WorkArtMarker from "./WorkArtMarker";

function Map() {
  return (
    <section className="map-component">
      <div className="div-map">
        <MapContainer center={[48.8566, 2.3522]} zoom={13}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <LocationMarker />
          <WorkArtMarker />
        </MapContainer>
      </div>
    </section>
  );
}

export default Map;

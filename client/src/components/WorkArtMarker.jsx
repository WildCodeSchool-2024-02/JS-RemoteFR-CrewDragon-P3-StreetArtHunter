import { Marker, Popup } from "react-leaflet";
import GeolocWorkArt from "./GeolocWorkArt";
import icon from "./IconWorkArt";

function WorkArtMarker() {
  return (
    <>
      {GeolocWorkArt.map((art) => (
        <Marker key={art.id} position={art.position} icon={icon}>
          <Popup>
            <h2>{art.popup}</h2>
            <img
              src={art.picture}
              alt={`Work Art ${art.desc}`}
              style={{ width: "100%" }}
            />
          </Popup>
        </Marker>
      ))}
    </>
  );
}

export default WorkArtMarker;

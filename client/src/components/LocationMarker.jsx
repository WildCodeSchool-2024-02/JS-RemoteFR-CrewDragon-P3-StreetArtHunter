import L from "leaflet";
import { useEffect, useState } from "react";
import { Marker, Popup, useMap } from "react-leaflet";
import icon from "./IconMap";

function LocationMarker() {
  const [position, setPosition] = useState([48.8566, 2.3522]);
  const map = useMap();

  useEffect(() => {
    map.locate().on("locationfound", (loc) => {
      setPosition(loc.latlng);
      map.flyTo(loc.latlng, map.getZoom());
      const radius = loc.accuracy;
      const circle = L.Circle(loc.latlng, { radius });
      circle.addTo(map);
    });
  }, [map]);

  return position === null ? (
    <Marker position={[48.8566, 2.3522]} icon={icon}>
      <Popup>I'm in Paris in France</Popup>
    </Marker>
  ) : (
    <Marker position={position} icon={icon}>
      <Popup>I'm here </Popup>
    </Marker>
  );
}

export default LocationMarker;

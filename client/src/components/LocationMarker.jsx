import { useEffect, useState } from "react";
import { useMap, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import icon from "./IconMap";

function LocationMarker() {
  const [position, setPosition] = useState([50.0, 20.0]);
  const map = useMap();

  useEffect(() => {
    map.locate().on("locationfound", (loc) => {
      setPosition(loc.latlng);
      map.flyTo(loc.latlng, map.getZoom());
      const radius = loc.accuracy;
      const circle = L.Circle(loc.latlng, radius);
      circle.addTo(map);
    });
  }, [map]);

  return position === null ? (
    <Marker position={[50.0, 5.0]} icon={icon}>
      <Popup>I'm here </Popup>
    </Marker>
  ) : (
    <Marker position={position} icon={icon}>
      <Popup>I'm here </Popup>
    </Marker>
  );
}

export default LocationMarker;

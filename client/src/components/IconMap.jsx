import L from "leaflet";
import markerIcon from "../assets/Logo_SAH_P3_IF.png";

export default L.icon({
  iconUrl: `${markerIcon}`,
  iconSize: [35, 60],
  iconAnchor: [-14, 55],
  popupAnchor: [-3, -76],
  shadowUrl: "",
  shadowSize: [39, 51],
  shadowAnchor: [20, 46],
});

import L from "leaflet";
import markerIcon from "../assets/icons/marker_sah_workart.png";

const IconWorkArt = L.icon({
  iconUrl: `${markerIcon}`,
  iconSize: [35, 60],
  iconAnchor: [-14, 55],
  popupAnchor: [-3, -76],
  shadowUrl: "",
  shadowSize: [39, 51],
  shadowAnchor: [20, 46],
});

export default IconWorkArt;

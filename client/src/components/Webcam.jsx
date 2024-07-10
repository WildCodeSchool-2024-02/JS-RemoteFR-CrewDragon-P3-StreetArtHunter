/* eslint-disable jsx-a11y/media-has-caption */
import { useRef, useEffect } from "react";
import "../style/Webcam.scss";

// eslint-disable-next-line react/prop-types
function Webcam({ addPhoto }) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const getUserMedia = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error("Error accessing webcam: ", err);
      }
    };

    getUserMedia();
  }, []);

  const takePhoto = () => {
    if (videoRef.current) {
      const width = videoRef.current.videoWidth;
      const height = videoRef.current.videoHeight;

      const context = canvasRef.current.getContext("2d");
      canvasRef.current.width = width;
      canvasRef.current.height = height;

      context.drawImage(videoRef.current, 0, 0, width, height);
      const dataUrl = canvasRef.current.toDataURL("image/png");
      addPhoto(dataUrl);
    }
  };

  return (
    <div className="video-container">
      <video ref={videoRef} autoPlay playsInline />
      <canvas ref={canvasRef} style={{ display: "none" }} />
      <div className="buttons">
        <button type="button" onClick={takePhoto}>
          SNAP
        </button>
      </div>
    </div>
  );
}

export default Webcam;

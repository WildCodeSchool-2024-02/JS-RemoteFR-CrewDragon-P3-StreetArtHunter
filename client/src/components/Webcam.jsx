import { useRef, useState, useEffect } from "react";
import "../style/Webcam.scss";

function Webcam() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [photo, setPhoto] = useState(null);

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
      setPhoto(dataUrl);
    }
  };

  const savePhoto = () => {
    if (photo) {
      const link = document.createElement("a");
      link.href = photo;
      link.download = "photo.png";
      link.click();
    }
  };

  const deletePhoto = () => {
    setPhoto(null);
  };

  return (
    <div className="video-container">
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <video ref={videoRef} autoPlay playsInline />
      <canvas ref={canvasRef} style={{ display: "none" }} />
      <div className="buttons">
        <button type="button" onClick={takePhoto}>
          SNAP
        </button>
        <button type="button" onClick={savePhoto}>
          SAVE
        </button>
        <button type="button" onClick={deletePhoto}>
          DELETE
        </button>
      </div>
      {photo && <img src={photo} alt="Captured" />}
    </div>
  );
}

export default Webcam;

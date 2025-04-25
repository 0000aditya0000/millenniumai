import { useEffect, useRef } from "react";
import BgVideo from "../assets/Video/BgVideo.mp4";
const BackgroundVideo = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      className="fixed top-0 left-0 w-full h-full object-cover z-[-1]"
      src={BgVideo}
    />
  );
};

export default BackgroundVideo;

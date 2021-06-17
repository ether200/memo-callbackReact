import React from "react";

const MediaPlayer = () => {
  const videoRef = React.useRef();
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    const video = videoRef.current;
    isPlaying ? video.pause() : video.play();
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <video width="400" onClick={handlePlay}>
        <source src="videos" type="video/mp4" />
      </video>
      <button onClick={handlePlay}>{isPlaying ? "Pause" : "Play"}</button>
    </div>
  );
};

export default MediaPlayer;

import React, { useRef, useEffect } from 'react';

type VideoPlayerProps = {
  src: string;
  poster: string;
  isPlaying: boolean;
};

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, poster, isPlaying }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isPlaying && videoRef.current) {
      videoRef.current.play();
    } else if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.load();
    }
  }, [isPlaying]);

  return (
    <video
      ref={videoRef}
      width="280"
      height="175"
      src={src}
      poster={poster}
      muted
      loop
    />
  );
};

export default VideoPlayer;


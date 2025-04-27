import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

const BackgroundVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { darkMode } = useTheme();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75; // Làm chậm video để tạo hiệu ứng mượt mà hơn
    }
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60 z-10" />
      {darkMode ? (
        <>
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover scale-105 transform"
            style={{ filter: 'brightness(0.6)' }}
          >
            <source src="/assets/video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-dracula-bg/30 backdrop-blur-[2px]" />
        </>
      ) : (
        <>
          <img
            src="/assets/background.jpg"
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]" />
        </>
      )}
    </div>
  );
};

export default BackgroundVideo;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Music: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="container mx-auto px-4 pt-24 pb-12">
      <div className="max-w-4xl mx-auto">
        <div className="profile-card mb-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            My Music Collection
          </h1>
          
          <p className="text-center text-lg mb-8">
            Music is an essential part of my life. Here are some of my favorite playlists, songs, and albums.
          </p>
          
          <div className="space-y-8">
            <div className="music-card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-900 rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-headphones-alt text-2xl text-purple-400"></i>
                </div>
                <h2 className="text-2xl font-semibold text-purple-300">Favorite Playlist</h2>
              </div>
              
              <div className="relative">
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 rounded-xl">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
                  </div>
                )}
                <iframe 
                  src="https://open.spotify.com/embed/playlist/66Sp6mPVTB7ajVgdFL9FqZ?utm_source=generator&theme=0" 
                  width="100%" 
                  height="380" 
                  style={{ borderRadius: '12px' }}
                  frameBorder="0" 
                  allow="encrypted-media"
                  title="Spotify Playlist"
                  onLoad={handleIframeLoad}
                  className="shadow-xl"
                ></iframe>
              </div>
            </div>
            
            <div className="music-card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-900 rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-music text-2xl text-purple-400"></i>
                </div>
                <h2 className="text-2xl font-semibold text-purple-300">Favorite Song</h2>
              </div>
              
              <iframe 
                src="https://open.spotify.com/embed/track/1u3aGopt09bxmUDs8c94XY?utm_source=generator" 
                width="100%" 
                height="80" 
                style={{ borderRadius: '12px' }}
                frameBorder="0" 
                allow="encrypted-media"
                title="Spotify Song"
                className="shadow-xl"
              ></iframe>
            </div>
            
            <div className="music-card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-900 rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-compact-disc text-2xl text-purple-400"></i>
                </div>
                <h2 className="text-2xl font-semibold text-purple-300">Favorite Album</h2>
              </div>
              
              <iframe 
                src="https://open.spotify.com/embed/playlist/62SUSaw1MuupOsaCwaf7Sn?utm_source=generator" 
                width="100%" 
                height="380" 
                style={{ borderRadius: '12px' }}
                frameBorder="0" 
                allow="encrypted-media"
                title="Spotify Album"
                className="shadow-xl"
              ></iframe>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/" className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-lg transition transform hover:scale-105 hover:shadow-lg">
              <i className="fas fa-arrow-left mr-2"></i> Back to Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Music;
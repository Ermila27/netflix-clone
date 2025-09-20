import React from 'react';
import YouTube from 'react-youtube';
import './TrailerModal.css';

const TrailerModal = ({ trailerUrl, handleClose }) => {
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="trailer-modal-overlay" onClick={handleClose}>
      <div className="trailer-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={handleClose}>
          X
        </button>
        <YouTube videoId={trailerUrl} opts={opts} />
      </div>
    </div>
  );
};

export default TrailerModal;

import React from 'react';

const SongComponent = (props) => {

  return (
    <div className="single-song" onClick={props.handleAdd}>
      <div>
        {props.song.title}
      </div>
      <div className="song-author">
        {props.author}
      </div>
    </div>
  );
};

export default SongComponent;

import React from 'react';

const SongComponent = (props) => {

  return (
    <div onClick={props.handleAdd}>
      <div>
        {props.song.title}
      </div>
      <div>
        {props.author}
      </div>
    </div>
  );
};

export default SongComponent;

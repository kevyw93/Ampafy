import React from 'react';
import SongItemContainer from './song_item_container';

const SongIndex = (props) => {
  let songs = props.songs.map((song, idx) => (
      <SongItemContainer key= {idx} index={idx} playlistId={props.playlistId} song={song}/>
      )
  );

  return (
    <div>
    {songs}
    </div>
  );
};

export default SongIndex;

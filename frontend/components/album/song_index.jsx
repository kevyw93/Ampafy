import React from 'react';
import SongItemContainer from './song_item_container';

const SongIndex = (props) => {
  let songs = props.songs.map((song, idx) => (
      // console.log(idx)
      <SongItemContainer key= {song.id} index={idx} song={song}/>
      )
  );

  return (
    <div>
    {songs}
    </div>
  );
};

export default SongIndex;

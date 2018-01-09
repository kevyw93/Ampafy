import React from 'react';

class Player extends React.Component{
  constructor(props) {
    super(props);
  }



  render(){
    let songs;
    if (this.props.songs.length > 0) {

      songs = <audio src={this.props.songs[0].audioUrl} autoPlay></audio>;
    }
    return(
      <div>
        {songs}
        hi
      </div>
    );
    // figure out how to play an array of songs using fuking shit and how to pause plz bro

  }
}

export default Player;

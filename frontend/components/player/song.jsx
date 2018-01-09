import React from 'react';

class Song extends React.Component {
  constructor(props) {
    super(props);
    this.handlePlay = this.handlePlay.bind(this);
  }

  componentDidMount() {

    this.props.fetchSong(this.props.songId);
  }
  handlePlay(div) {
    return () => {
      div.play()
    }

  }

  render() {
    let song;

    if (this.props.isFetched) {
      song = this.props.song.audioUrl;
    }

    const div = (
      <div>
        <audio id='audio' autoPlay src={song} ref={(el) => { this.audio = el; } }/>
      </div>
    );

    return (
      <button onClick={this.handlePlay(div)}>click me</button>
    );
  }
}

export default Song;

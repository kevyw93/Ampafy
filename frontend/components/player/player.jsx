import React from 'react';

class Player extends React.Component{
  constructor(props) {
    super(props);
    const audio = document.createElement("audio");
    this.state = {audio};
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.changeSong = this.changeSong.bind(this);
    // this.duration;
  }
  // go to reducer and add a reducer with idx and array of songs from albums/ playlist

  componentWillReceiveProps(nextProps) {
    if (!this.props.song || nextProps.song.audioUrl !== this.props.song.audioUrl) {
      this.state.audio.setAttribute('src', nextProps.song.audioUrl);
      // this.state.audio.addEventListener('ended', this.changeSong);
      this.state.audio.load();
      this.props.receiveIsPlaying();
      this.state.audio.play();
    }
  }
  play() {
    this.state.audio.play();
    this.props.receiveIsPlaying();
  }

  pause() {
    this.state.audio.pause();
    this.props.receiveIsPlaying();

  }

  changeSong() {
    this.props.playNextSong();
    // playnextsong will increment till the end
    /**
     * 1. remove song that has finished playing
     * 2. if next song exists play next song (componentWillReceiveProps)
     * 3. play no songs (remove audio)?
     */
  }


  render(){

    // this.duration = document.getElementById('audio').duration;

    let playbutton = <button onClick={this.play} ><img className="pause-button"src="http://soundshareapp.com/assets/images/tours/play-button.png" /></button>;
    let pausebutton = <button onClick={this.pause}><img className="play-button"src="https://image.freepik.com/free-icon/pause-button-outline_318-40569.jpg" /></button>;
    let button = this.props.isPlaying ? pausebutton : playbutton;
    let title;
    if (this.props.song) {
      title = this.props.song.title;

    }
    return(
      <div className="player-outer-container">
        {button}
        {title}
        {this.duration}
      </div>
    );
    // figure out how to play an array of songs using fuking shit and how to pause plz bro

  }
}

export default Player;

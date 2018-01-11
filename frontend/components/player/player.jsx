import React from 'react';

class Player extends React.Component{
  constructor(props) {
    super(props);

    this.state = { progress: 0 };
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.changeSong = this.changeSong.bind(this);
    this.handleProgress = this.handleProgress.bind(this);
    // this.duration;
  }
  // go to reducer and add a reducer with idx and array of songs from albums/ playlist

  componentWillReceiveProps(nextProps) {
    if (!this.props.song || nextProps.song.audioUrl !== this.props.song.audioUrl) {
      this.audio.setAttribute('src', nextProps.song.audioUrl);
      // this.state.audio.addEventListener('ended', this.changeSong);
      // this.audio.load();

      this.props.receiveIsPlaying();
      // this.audio.play();

    }
  }
  play() {

    // console.log(this.audio.duration)
    this.audio.play();
    this.props.receiveIsPlaying();
  }

  handleProgress() {
    debugger
    let newProgress = (this.audio.currentTime);
    this.setState({ progress: newProgress});
    console.log(this.audio.currentTime / this.audio.duration);
  }

  pause() {
    this.audio.pause();
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
    let pausebutton = <button onClick={this.pause}><img className="play-button"src="http://pluspng.com/img-png/pause-button-png-pause-flat-button-png-512.png" /></button>;
    let button = this.props.isPlaying ? pausebutton : playbutton;
    let title;
    let pic;
    let src;

    if (this.props.song) {
      title = this.props.song.title;
      pic = this.props.song.albumImg;
      src = this.props.song.audioUrl;
    }

    return(
      <div className="player-outer-container">
        <div>{button}</div>
        <div>{title}</div>
      <div>
        <img src={pic} />
      </div>
      <audio src={src} ref={(audio) => {
          this.audio = audio;
        }}
        onCanPlayThrough={this.play}
        onTimeUpdate={this.handleProgress}
        ></audio>
      <input type="range" value={this.audio ? this.audio.currentTime : 0} className="progressBar" onChange={this.someCallback}></input>
      </div>
    );

// Some callback: Grab audio elements, reassign time to the value of the e.currentTarget / duration
    // set to the current time
    // figure out how to play an array of songs using fuking shit and how to pause plz bro

  }
}

export default Player;

import React from 'react';
import secToMin from 'sec-to-min';

class Player extends React.Component{
  constructor(props) {
    super(props);
    this.state = { progress: 0, length: 0};
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.changeSong = this.changeSong.bind(this);
    this.handleProgress = this.handleProgress.bind(this);
    this.handleLength = this.handleLength.bind(this);
    this.handleSeek = this.handleSeek.bind(this);
    this.volumeControl = this.volumeControl.bind(this);

  }
  // go to reducer and add a reducer with idx and array of songs from albums/ playlist

  componentWillReceiveProps(nextProps) {
    // this.props.getAlbum(this.props.albId);
    if (typeof this.props.song === 'undefined' && typeof nextProps.song === 'undefined') {
      return null;
      }else if (!this.props.song || nextProps.song.audioUrl !== this.props.song.audioUrl) {
        this.audio.setAttribute('src', nextProps.song.audioUrl);
      }else if (this.props.song){
        if(this.props.song.audioUrl === nextProps.song.audioUrl && this.props.status === 'paused'){

          this.audio.play();
        }else if (this.props.song.audioUrl === nextProps.song.audioUrl && this.props.status === 'playing') {

        this.audio.pause();
       }
     }
  }


  play() {
    if (this.props.song) {
      this.audio.play();
      this.props.receivePlay();
    }
  }

  handleLength(){
    let length = this.audio.duration;
    this.setState({length: length});
  }

  handleProgress() {
    let newProgress = (this.audio.currentTime);
    this.setState({ progress: newProgress});
  }

  pause() {
    this.audio.pause();
    this.props.receivePause();
  }
  volumeControl(e) {
    e.preventDefault();
    this.audio.volume = e.target.value/100;
  }

  handleSeek(e){
    e.preventDefault();
    this.audio.currentTime = e.target.value;
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
    let volumebutton = <input className="volume-bar" type="range" max={100} onChange={this.volumeControl} />;
    let button = this.props.status === 'playing' ? pausebutton : playbutton;
    let title;
    let pic;
    let src;
    let showTime;
    let img;

    if (this.props.song) {
      title = this.props.song.title;
      src = this.props.song.audioUrl;
      pic = this.props.song.albumImg;
      img = <img className="alb-pics" src={pic} />;
    }
    if (this.audio) {
      showTime = secToMin(this.audio.currentTime);
    }
    return(
      <div className="player-outer-container">
        <div className="player-alb-img-outerContainer">
          <div className="player-alb-img-innerContainer">
            {img}
          </div>

          <div className="player-alb-title-container">
            <h1 className="title">{title}</h1>
          </div>

        </div>

        <div className="playbar-container">

          <div className="playbar-inner-container">

            <div className="play-pause">{button}</div>
              <div className="playbar" >

                <input type="range" value={this.audio ? this.audio.currentTime : 0} onChange={this.handleSeek} max={this.state.length} className="progressBar" />
              </div>
            </div>

            <div className="player-song-time">
                {showTime}
                {volumebutton}
            </div>
          </div>

        <audio src={src} ref={(audio) => {
            this.audio = audio;
          }}
          onLoadedData={this.handleLength}
          onCanPlayThrough={this.play}
          onTimeUpdate={this.handleProgress}
          ></audio>
      </div>
    );


    // figure out how to play an array of songs using fuking shit and how to pause plz bro

  }
}

export default Player;

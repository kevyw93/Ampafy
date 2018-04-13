import React from 'react';
import secToMin from 'sec-to-min';

class Player extends React.Component{
  constructor(props) {
    super(props);
    this.state = { progress: 0, length: 0};
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.nextSong = this.nextSong.bind(this);
    this.prevSong = this.prevSong.bind(this);
    this.handleProgress = this.handleProgress.bind(this);
    this.handleLength = this.handleLength.bind(this);
    this.handleSeek = this.handleSeek.bind(this);
    this.volumeControl = this.volumeControl.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (typeof this.props.song === 'undefined' && typeof nextProps.song === 'undefined') {
      return null;
    }else if (!this.props.song || nextProps.song.audioUrl !== this.props.song.audioUrl) {
      this.audio.setAttribute('src', nextProps.song.audioUrl);
    }else if (this.props.song){
      if(this.props.song.audioUrl === nextProps.song.audioUrl && this.props.status === 'paused'){
        this.audio.play();
      }else if (this.props.song.audioUrl === nextProps.song.audioUrl && this.props.status === 'playing' && this.props.visitingStatus) {

      }else if (this.props.song.audioUrl === nextProps.song.audioUrl && this.props.status === 'playing'){
        debugger
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
    this.setState({length: this.audio.duration});
  }

  handleProgress() {
    this.setState({ progress: this.audio.currentTime});
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

  nextSong() {
    this.props.incrementCurrentSongIndex();
  }

  prevSong() {
    this.props.decrementCurrentSongIndex();
  }

  render(){

    let playbutton = <button onClick={this.play} ><img className="pause-button" src="https://cdn2.iconfinder.com/data/icons/media-and-navigation-buttons-round/512/Button_3-512.png" /></button>;
    let pausebutton = <button onClick={this.pause}><img className="play-button" src="https://cdn3.iconfinder.com/data/icons/buttons/512/Icon_4-512.png" /></button>;
    let nextButton = <button onClick={this.nextSong}><img className="next-button" src="https://cdn2.iconfinder.com/data/icons/multimedia-glyph-black/2048/Next_Track-512.png"/></button>;
    let prevButton = <button onClick={this.prevSong}><img className="prev-button" src="https://cdn2.iconfinder.com/data/icons/multimedia-glyph-black/2048/Previous_Track-256.png" /></button>;
    let volumebutton = <input className="volume-bar" type="range" max={100} onChange={this.volumeControl} />;
    let button = this.props.status === 'playing' ? pausebutton : playbutton;
    let title;
    let src;
    let showTime;
    let img;
    const pic = this.props.albumImg;
    let value;

    if (this.props.song) {
      title = this.props.song.title;
      src = this.props.song.audioUrl;
      img = <img className="alb-pics" src={pic} />;
    }
    if (this.audio) {
      showTime = secToMin(this.audio.currentTime);
      value = this.audio.currentTime;
    }else {
      value = 0;
    }

    return(
      <main className="player-outmost-container">
        <section className="left-side-container">
          {img}
          <h1>{title}</h1>
        </section>
        <section className="right-side-container">
          <section className="button-bar-container">
            <div className="button-holder">
              {prevButton}
              {button}
              {nextButton}
            </div>
              <input type="range" onChange={this.handleSeek} max={this.state.length} value={value} className="progressBar" />

          </section>

          <section className="time-vol-bar-container">
            <div className="player-song-time">
              <div className="show-time">{showTime}</div>
              <div className="volume-container"><i class="fas fa-volume-up"></i>{volumebutton}</div>
            </div>
          </section>
        </section>
        <audio
          src={src}
          ref={(audio) => {
            this.audio = audio;
          }}
          onCanPlayThrough={this.play}
          onLoadedData={this.handleLength}
          onTimeUpdate={this.handleProgress}
          onEnded={this.nextSong}
          >
        </audio>

      </main>
    );
  }
}

export default Player;

import React from 'react';

class Player extends React.Component{
  constructor(props) {
    super(props);
    const audio = document.createElement("audio");
    this.state = { audio: audio, play: true };
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);

    // this.handlePlayPause = this.handPlayPause();
    debugger
  }

  componentWillReceiveProps(nextProps) {
    debugger
    if ((this.props.songs.length < 1) || nextProps.songs[0].audioUrl !== this.props.songs[0].audioUrl) {
      this.state.audio.setAttribute('src', nextProps.songs[0].audioUrl);
      this.state.audio.load();
      this.state.audio.play();
    }
  }
  play() {
    // let newState = Object.assign({}, this.state);
    // newState.play = true;
    // this.setState(newState);
    // this.state.play = true;
    // debugger
    this.state.audio.play();
  }

  pause() {
    // let newState = Object.assign({}, this.state);
    // newState.play = false;
    // this.setState(newState);
    this.state.audio.pause();
  }
  handlePlayPause(){
    // let newState = Object.assign({}, this.state);
    // if (newState.play) {
    //   newState.play = false;
    //   // this.setState(newState);
    //
    // }else {
    //   newState.play = true;
    // }
  }


  render(){
    // let songs;
    // if (this.props.songs.length > 0) {
    //
    //   songs = <audio src={this.props.songs[0].audioUrl} autoPlay={this.state.play}></audio>;
    // }
    let playbutton;
    let pausebutton = <button onClick={this.pause}><img className="play-button"src="https://image.freepik.com/free-icon/pause-button-outline_318-40569.jpg" /></button>;


      debugger
      playbutton = <button onClick={this.play} ><img className="pause-button"src="http://soundshareapp.com/assets/images/tours/play-button.png" /></button>;
    return(
      <div className="player-outer-container">
        {/* {songs}
        <div className="player-inner-container">
        </div> */}
        {playbutton}
        {pausebutton}
      </div>
    );
    // figure out how to play an array of songs using fuking shit and how to pause plz bro

  }
}

export default Player;

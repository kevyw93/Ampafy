// import React from 'react';
// import Modal from 'react-modal';
// import {Link} from 'react-router-dom';
// class PlaylistDropDown extends React.Component {
//   constructor(props){
//     super(props);
//     this.handleAddSong = this.handleAddSong.bind(this);
//     // this.state = {bool:false};
//     // this.handleOpen = this.handleOpen.bind(this);
//     // this.handleClose = this.handleClose.bind(this);
//   }
//
//   // componentDidMount(){
//   //   this.props.fetchAllPlaylist();
//   // }
//   // handleOpen() {
//   //   let modalMod = this.state.bool;
//   //   modalMod = true;
//   //   this.setState({bool: modalMod });
//   //
//   // }
//   //
//   // handleClose(){
//   //   let modalMod = this.state.bool;
//   //   modalMod = false;
//   //   this.setState({bool: modalMod });
//   // }
//
//   componentDidMount(){
//     this.props.fetchAllPlaylist();
//   }
//
//   handleAddSong(songId, playlistId) {
//
//     return e => {
//
//       this.props.addSongToPlaylist(
//       {playlist_tagging:{song_id: songId, playlist_id: playlistId}});
//       this.handleOpenClose();
//     };
//   }
//
//   render(){
//     let playlists;
//     const playlistImg = "https://s3.amazonaws.com/ampafy-seeds/Screen+Shot+2018-01-12+at+12.28.18+PM.png";
//     // if (this.props.openListPlaylist) {
//       playlists = this.props.playlists.map((play, idx) =>
//
//
//         <li key={idx} onClick={this.handleAddSong(this.props.songId, play.id)} className="single-playlist">
//           <Link className="img-hover-cont" to={`/browse/playlist/${play.id}`}>
//           <div className="img-div" style={{backgroundImage: `url(${playlistImg})`}}>
//           {/* <img  src="https://i.ebayimg.com/images/g/K-oAAMXQLw1R0v2T/s-l300.gif" /> */}
//           </div>
//           <img className="img-hover-div-playlist" src="http://www.pngmart.com/files/3/Play-Button-PNG-Picture.png" />
//           </Link>
//           <h1 className="alb-title">{play.title}</h1>
//       </li>
//     );
//
//     // }
//     debugger
//     return (
//       <div>
//
//         <button onClick={this.handleClose}>Close</button>
//         <div className="adding-playlists-container">
//         {playlists}
//         </div>
//
//       </div>
//     );
//   }
// }
//
// export default PlaylistDropDown;

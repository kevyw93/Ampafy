import React from 'react';

class Discover extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount() {
    this.props.fetchAllPlaylist();
  }

  render() {
    let playlist;
    if (this.props.playlists) {
      playlist = this.props.playlists.map(play =>

        <div key={play.id}>
          {play.id}
          <img src="https://i.ebayimg.com/images/g/K-oAAMXQLw1R0v2T/s-l300.gif" />
          {play.title}
        </div>

      );
    }
    return(
      <div>
        {playlist}
      </div>
    );
  }

}

export default Discover;

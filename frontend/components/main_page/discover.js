import React from 'react';

class Discover extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount() {
    this.props.receiveAllPlaylist();
  }

  render() {
    let playlist = this.props.playlists.map(play =>
      <div>

      </div>
  );
    return {

    };
  }

}

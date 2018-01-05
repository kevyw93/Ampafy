import React from 'react';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getAllAlbums();
  }

  render() {
    const albs = Object.values(this.props.albums).map(alb => <ul>{alb.title}</ul>);

    debugger
    return(
      <div>
        {albs}
      </div>
    );
  }
}

export default MainPage;

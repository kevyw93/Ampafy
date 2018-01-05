import React from 'react';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getAllAlbums();
  }

  render() {
    const albs = Object.values(this.props.albums).map(
      alb => <ul className="albums">
        <li>{alb.title}</li>
      <li>
        <div className='album-hover'>

          <img className="album-img" src={alb.album_img} />
        </div>
        </li>
      </ul>);

    return(
      <div>
        {albs}
      </div>
    );
  }
}

export default MainPage;

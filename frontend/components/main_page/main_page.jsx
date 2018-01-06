import React from 'react';
import AlbumContainer from '../album/album_container';
import {Link, Route} from 'react-router-dom';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getAllAlbums();
  }




  render() {
    // switch case here for top nav bar its going to be feature browse discover
    // routes will differ for each
    // the components that will always render on this page are top nav bar side bar and playbar
    // <TopNav /> <PlayBar /> <SideBar />
    // <Switch>
    // <Route path ="/browse/feature" component={Feature} />
    // <NavBar>
    // <Link to='/browse'>Browse</Link>
    // <Link to='/browse/feature'>Feature</Link>
    // <Link to='/browse/discover'>Discover</Link>
    // <NavBar>
    // <Route path ="/browse/discover" component={Discover} />
    debugger
    const albs = Object.values(this.props.albums).map(
      alb => <li><Link to={`/album/${alb.id}`}><img className="album-img" src={alb.album_img} /></Link></li>
    );
    return(
      <div>
        <Route path="/album/:id" component={AlbumContainer} />
        {albs}
      </div>
    );
  }
}

export default MainPage;

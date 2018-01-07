import React from 'react';

class Album extends React.Component {

 constructor(props) {
   super(props);
 }



 componentWillMount(){
   this.props.getAlbum(this.props.albumId);
   debugger
 }

  render(){
    debugger
    return (
      <ul className="albums">
        {/* <li>{this.props.albums.title}</li> */}
        hello
      </ul>
    );
  }


}

export default Album;

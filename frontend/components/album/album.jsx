import React from 'react';

class Album extends React.Component {

 constructor(props) {
   super(props);
 }



 componentWillMount(){
   debugger
    this.props.getAlbum(this.props.albumId);
 }

  render(){
    debugger
    let alb;
    if (this.props.album) {
      alb =
      (
        <div>
          <img src={this.props.album.album_img} />
          {this.props.album.title}

        </div>
      );

    }
    return (
      <div className="albums">
        {alb}
        {/* hello */}
      </div>
    );
  }


}

export default Album;

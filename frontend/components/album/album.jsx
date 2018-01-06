import React from 'react';

class Album extends React.Component {

 constructor(props) {
   super(props);
 }


 componentWillMount(){
 }

  render(){
    return (
      <ul className="albums">
        <li>{this.props.album.title}</li>

        <li >
        </li>
      </ul>
    );
  }


}

export default Album;

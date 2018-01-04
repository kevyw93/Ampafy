import React from 'react';

class LoggedIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.props;
  }

  render() {

    return (
      <div>
        <header>
          Hi Welcome {this.state.currentUser.username}
        </header>
      </div>
    );
  }



}


export default LoggedIn;

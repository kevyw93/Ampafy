import React from "react";
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = { 'username': "", 'password': "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleGuestLogin = this.handleGuestLogin.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.loggedIn){
      this.props.history.push('/');
    }
  }

  handleSubmit(e){
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm({user: user});
  }

  handleGuestLogin(e){
    e.preventDefault();
    const user = Object.assign({'username':'user', 'password':'password'});
    this.props.login({user: user});
  }

  handleChange(field){
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  renderErrors () {
    return (
      <ul>
        {this.props.errors.map((error, i) =>(
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    let buttonholder;
    let butt;
    let sign;
    if (this.props.formType === "login") {
      sign = <Link to="/signup">SIGN UP</Link>;
      butt = 'LOG IN';
      buttonholder = "Don't have an account?";
    }else {
      butt = 'SIGN UP';
      sign = <Link to="/login">LOG IN</Link>;
      buttonholder = 'Already have an account?';
    }

    return (
      <div className="form-container">
        <h1 className="logo">Sandrafy</h1>

      <form className="form" onSubmit={this.handleSubmit}>



        <h1 className="errors">{this.renderErrors()}</h1>
        <br />

        <div className="input-container">
          <input className="username-password-input" type="text" value={this.state.username} placeholder={'Username'} onChange={this.handleChange("username")} />

          <br/>

          <input className="username-password-input" type="password" value={this.state.password}  placeholder={'Password'} onChange={this.handleChange("password")} />
      </div>
          <br />

          <button className="guest-signin-button" onClick={this.handleGuestLogin} >GUEST LOGIN</button>
        <br />
          <button className="login-signup-button">{butt}</button>
        <br />
      <h1 className="form-bot">{buttonholder} {sign} </h1>

      </form>
    </div>
    );
  }
}

export default SessionForm;

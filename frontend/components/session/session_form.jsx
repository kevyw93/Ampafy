import React from "react";
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = { 'username': "", 'password': "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

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
    let sign;
    if (this.props.formType === "login") {
      sign = <Link to="/signup">SIGN UP</Link>;
      buttonholder = 'LOG IN';
    }else {
      sign = <Link to="/login">LOG IN</Link>;
      buttonholder = 'SIGN UP';
    }

    return (
      <div className="form-container">
        <h1 className="logo">Sandrafy</h1>

      <form className="form" onSubmit={this.handleSubmit}>



        <br />
      <h1 className="form-top">{buttonholder} or {sign} </h1>
      {this.renderErrors()}

        <div className="input-container">
          <input className="username-password-input" type="text" value={this.state.username} placeholder={'Username'} onChange={this.handleChange("username")} />

          <br/>

          <input className="username-password-input" type="password" value={this.state.password}  placeholder={'Password'} onChange={this.handleChange("password")} />
      </div>
          <br />
        <button className="login-signup-button">{buttonholder}</button>

      </form>
    </div>
    );
  }
}

export default SessionForm;

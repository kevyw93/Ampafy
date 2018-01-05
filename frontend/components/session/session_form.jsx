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
    if (this.props.match.path !== nextProps.match.path) {
      this.props.clearErrors();
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



  render() {
    let buttonholder;
    let butt;
    let sign;
    let loadpage;
    if (this.props.formType === "login") {
      sign = <Link to="/signup">SIGN UP</Link>;
      butt = 'LOG IN';
      buttonholder = "Don't have an account?";
      loadpage = (
        <form className="form" onSubmit={this.handleSubmit}>
          {creds}
          <div className="input-container">
            <input className="username-password-input" type="text" value={this.state.username} placeholder={'Username'} onChange={this.handleChange("username")} />
          <br/>
          <h1 className="errors">{this.props.errors.username}</h1>

          <br/>

          <input className="username-password-input" type="password" value={this.state.password}  placeholder={'Password'} onChange={this.handleChange("password")} />
          <br />
          <h1 className="errors">{this.props.errors.password}</h1>

          </div>
          <br />

          <button className="guest-signin-button" onClick={this.handleGuestLogin} >GUEST LOGIN</button>
          <br />
          <button className="login-signup-button">{butt}</button>
          <br />
          <h1 className="form-bot">{buttonholder} {sign} </h1>
        </form>
      );
    }else {
      butt = 'SIGN UP';
      sign = <Link to="/login">LOG IN</Link>;
      buttonholder = 'Already have an account?';

      loadpage = (
        <form className="form" onSubmit={this.handleSubmit}>
          {creds}
          <div className="input-container">
            <input className="username-password-input" type="text" value={this.state.username} placeholder='Email' onChange={this.handleChange("username")} />
            <h1 className="errors">{this.props.errors.username}</h1>
            <br/>
          <input className="username-password-input" type="text" placeholder='Confirm Email' onChange={this.handleChange("email")} />
            <h1 className="errors">{this.props.errors.username}</h1>
            <br />
          <input type="text" className="username-password-input" placeholder='What do you want to be called?' />
          <div className="date-input">
              <select className="month" >
                <option className="initial-month" disabled selected="true">Month</option>
                <option value="January">January</option>
                <option value ="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
              </select>
              <input className="day-year" type="day" placeholder='Day' />
              <input className="day-year" type="year" placeholder='Year' />
          </div>

          <br/>

          <input className="username-password-input" type="password" value={this.state.password}  placeholder='Password' onChange={this.handleChange("password")} />
          <br />
          <h1 className="errors">{this.props.errors.password}</h1>

          </div>
          <br />

          <button className="guest-signin-button" onClick={this.handleGuestLogin} >GUEST LOGIN</button>
          <br />
          <button className="login-signup-button">{butt}</button>
          <br />
          <h1 className="form-bot">{buttonholder} {sign} </h1>
        </form>
      );


    }
    let creds;
    if (this.props.errors.creds) {
      creds = <h1 className="top-error">{this.props.errors.creds}</h1>;
    }


    return (
      <div className="form-container">
        <h1 className="logo">Sandrafy</h1>
      {loadpage}
      </div>
    );
  }
}

export default SessionForm;

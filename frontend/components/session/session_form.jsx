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
    let sign;
    if (this.props.formType === "login") {
      sign = <Link to="/signup">SignUp instead</Link>;
    }else {
      sign = <Link to="/login">LogIn instead</Link>;
    }
    return (
      <div>

      <form onSubmit={this.handleSubmit}>
        Welcome to BenchBnB!
        <br />
        Please {this.props.formType} or {sign}
        {this.renderErrors()}
        <label>Username
          <input type="text" value={this.state.username} onChange={this.handleChange("username")} />
        </label>

        <label>Password
          <input type="password" value={this.state.password} onChange={this.handleChange("password")} />
        </label>

        <input type="submit" />

      </form>
    </div>
    );
  }
}

export default SessionForm;

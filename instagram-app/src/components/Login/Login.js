import React from "react";
import "./Login.css";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    login = async (event) => {
        event.preventDefault();
       await localStorage.setItem('username', this.state.username);
        window.location.reload();

    }

  render() {

    return (
      <div className="form-container">
        <form>
          <h1>LOGIN</h1>
          <input-group>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" onChange={(event) => this.handleChange(event)} />
          </input-group>

          <input-group>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" onChange={(event) => this.handleChange(event)}/>
          </input-group>

          <button type="submit" onClick={(event) => this.login(event)}>Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
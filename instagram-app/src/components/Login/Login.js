import React from "react";
import { FormGroup, Input, Label, Button } from "reactstrap";
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
          <FormGroup>
            <Label htmlFor="username">Username</Label>
            <Input type="text" name="username" id="username" onChange={(event) => this.handleChange(event)} />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <Input type="password" name="password" id="password" onChange={(event) => this.handleChange(event)}/>
          </FormGroup>

          <Button type="submit" onClick={(event) => this.login(event)}>Login</Button>
        </form>
      </div>
    );
  }
}

export default Login;
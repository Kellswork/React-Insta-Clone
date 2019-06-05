import React from "react";

const withAuthenticate = Component => Login => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isUserloggedIn: false
      };
    }

    componentDidMount() {
      const user = localStorage.getItem("username");
      if (user) {
        this.setState({
          isUserloggedIn: true
        });
      }
    }

    render() {
      return this.state.isUserloggedIn ? (
        <Component {...this.props} />
      ) : (
        <Login />
      );
    }
  };
};

export default withAuthenticate;

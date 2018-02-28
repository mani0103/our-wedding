import React, { Component } from 'react';

class Home extends Component {

  
  render() {
    const isAuthenticated = this.props.authed;
    return (
      <div className="container">
        {
          isAuthenticated && (
              <h4>
                You are logged in!
              </h4>
            )
        }
        {
          !isAuthenticated && (
              <h4>
                You are not logged in! Please Log In to continue.
              </h4>
            )
        }
      </div>
    );
  }
}

export default Home;

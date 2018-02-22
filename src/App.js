import React, { Component } from 'react';
import { Grid, Row, Col, Navbar, NavItem, Nav, NavDropdown, MenuItem, Jumbotron, Button } from 'react-bootstrap';
import Logo from './logo.svg'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={isHide:false};
    this.hideBar = this.hideBar.bind(this)
  }

  hideBar(){
    let {isHide} = this.state
    window.scrollY > 200 ?
    !isHide && this.setState({isHide:true})
    :
    isHide && this.setState({isHide:false})

 }

  componentDidMount(){
    window.addEventListener('scroll',this.hideBar);
  }
  componentWillUnmount(){
    window.removeEventListener('scroll',this.hideBar);
  }

  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }


  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div>
        <div className="container-fluid bg-1 text-center">
          <h3></h3>
        </div>
        <div className="Navigation">
          <Navbar fixedTop={this.state.isHide} bsStyle="custom">
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#home">Our-Wedding</a>
              </Navbar.Brand>
            </Navbar.Header>
            <Nav>
              <NavItem eventKey={1} href="#">
                Detials
              </NavItem>
              <NavItem eventKey={2} href="#">
                Photos
              </NavItem>
              <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.4}>Separated link</MenuItem>
              </NavDropdown>
              {
                !isAuthenticated() && (
                    <Button
                      bsStyle="primary"
                      className="btn-margin"
                      onClick={this.login.bind(this)}
                    >
                      Log In
                    </Button>
                  )
              }
              {
                isAuthenticated() && (
                    <Button
                      bsStyle="primary"
                      className="btn-margin"
                      onClick={this.logout.bind(this)}
                    >
                      Log Out
                    </Button>
                  )
              }
            </Nav>
          </Navbar>
          <div className="scroll-test">
          </div>
        </div>
      </div>   

    );
  }
}

export default App;
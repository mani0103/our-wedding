import React, { Component } from 'react';
import { Navbar, NavItem, Nav, NavDropdown, MenuItem } from 'react-bootstrap';
import './App.css';
import LoginModal from './Login-dialog/LoginModal';

class App extends Component {
  constructor(props){
    super(props);

    this.hideBar = this.hideBar.bind(this)
    this.login = this.login.bind(this);
    this.hideLogin = this.hideLogin.bind(this);

    this.state = {
      showModal: false,
      isHide:false
    };
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
    this.setState({ showModal: true });
  }

  hideLogin() {
    this.setState({ showModal: false });
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
                    <NavItem
                      onClick={this.login}
                    >
                      Log In
                    </NavItem>
                  )
              }
              {
                isAuthenticated() && (
                    <NavItem
                      onClick={this.logout.bind(this)}
                    >
                      Log Out
                    </NavItem>
                  )
              }
            </Nav>
          </Navbar>
        </div>
        <div id="firebaseui-auth-container"></div>

        <LoginModal showModal={this.state.showModal} hideLogin={this.hideLogin} />
      </div>   

    );
  }
}

export default App;
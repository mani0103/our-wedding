import React, { Component } from 'react';
import { Navbar, NavItem, Nav, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './Navigation.css';
import LoginModal from '../Login-dialog/LoginModal';
import fire from '../fire'

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.hideBar = this.hideBar.bind(this)
    this.openloginDialog = this.openloginDialog.bind(this);
    this.closeLoginDialog = this.closeLoginDialog.bind(this);

    this.state = {
      showModal: false,
      navbarFixedToTop: false,
      slectedNav: ""
    };
  }

  hideBar() {
    let { navbarFixedToTop } = this.state
    window.scrollY > 200 ?
      !navbarFixedToTop && this.setState({ navbarFixedToTop: true })
      :
      navbarFixedToTop && this.setState({ navbarFixedToTop: false })

  }

  componentDidMount() {
    window.addEventListener('scroll', this.hideBar);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.hideBar);
  }

  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  openloginDialog() {
    this.setState({ showModal: true });
  }

  closeLoginDialog() {
    this.setState({ showModal: false });
  }

  logout() {
    fire.auth.logout();
  }


  render() {
    const isAuthenticated = this.props.authed;
    return (
      <div>
        <div className="container-fluid bg-1 text-center">
          <h3>asdsa</h3>
        </div>
        <div className="Navigation">
          <Navbar fixedTop={this.state.navbarFixedToTop} bsStyle="custom">
            <Navbar.Header>
              <Navbar.Brand>
                <Link to="/home">Our-Wedding</Link>
              </Navbar.Brand>
            </Navbar.Header>
            <Nav>
              <NavItem href="/details">
                Detials
              </NavItem>
              <NavItem href="/photos">
                Photos
              </NavItem>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <MenuItem href="/3_1">Action</MenuItem>
                <MenuItem href="/3_2">Another action</MenuItem>
                <MenuItem href="/3_3">Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem href="/3_4">Separated link</MenuItem>
              </NavDropdown>
              {
                !isAuthenticated && (
                  <NavItem
                    onClick={this.openloginDialog}
                  >
                    Log In
                    </NavItem>
                )
              }
              {
                isAuthenticated && (
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

        <LoginModal showModal={this.state.showModal} hideLogin={this.closeLoginDialog} />
      </div>

    );
  }
}

export default Navigation;
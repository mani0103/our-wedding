import React, { Component } from 'react';
import { Navbar, NavItem, Nav, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navigation.css';
import LoginModal from '../Login-dialog/LoginModal';
import fire from '../fire';
import Auth from '../Auth/Auth';
import LocalizedText from '../Translations/LocalizedText';

const auth = new Auth();

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
    window.scrollY > 600 ?
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
    auth.logout();
  }


  render() {
    const isAuthenticated = this.props.authed;
    return (
      <div>
        <div className="Navigation">
          <Navbar fixedTop={this.state.navbarFixedToTop} bsStyle="custom" fluid="true">
            <Navbar.Header>
              <Navbar.Brand>
                <Link to="/home"><LocalizedText stringUN='ourWedding' lang='eng'/></Link>
              </Navbar.Brand>
            </Navbar.Header>
            <Nav>
              <NavItem>
                <Link to="/details">Detials</Link>
              </NavItem>
              <NavItem>
                <Link to="/photos">Photos</Link>
              </NavItem>
              {isAuthenticated && (
                <NavDropdown title="Guests" id="basic-nav-dropdown">
                  <MenuItem>
                    <Link to="/locations">Locations</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="/accomodation">Accomodation</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="/gifts">Gift Information</Link>
                  </MenuItem>
                  <MenuItem divider />
                  <MenuItem>
                    <Link to="/meals">Meal Options</Link>
                  </MenuItem>
                </NavDropdown>
              )}
            </Nav>
            <Nav pullRight>
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
              <NavDropdown title="Language" id="basic-nav-dropdown">
                <MenuItem href="/3_1">English</MenuItem>
                <MenuItem href="/3_2">Magyar</MenuItem>
                <MenuItem href="/3_3">Česky</MenuItem>
              </NavDropdown>
            </Nav>
          </Navbar>
        </div>

        <LoginModal showModal={this.state.showModal} hideLogin={this.closeLoginDialog} />
      </div>

    );
  }
}

export default Navigation;
import React, { Component } from 'react';
import { Navbar, NavItem, Nav, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './Navigation.css';
import LoginModal from '../Login-dialog/LoginModal';
import fire from '../fire';
import Auth from '../Auth/Auth';
import LocalizedText from '../Translations/LocalizedText';
import { TRANSLATIONS } from '../Translations/Translations'

const auth = new Auth();

class Navigation extends Component {
  constructor(props) {
    super(props);

    
    this.openloginDialog = this.openloginDialog.bind(this);
    this.closeLoginDialog = this.closeLoginDialog.bind(this);

    this.state = {
      showModal: false,
      slectedNav: ""
    };
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
          <Navbar fixedTop={this.props.navbarFixedToTop} bsStyle="custom" fluid={true}>           
            <Nav>
              <LinkContainer to="/home">
                <NavItem><LocalizedText stringUN='ourWedding' {...this.props}/></NavItem>
              </LinkContainer>
              <LinkContainer to="/photos">
                <NavItem><LocalizedText stringUN='photos' {...this.props}/></NavItem>
              </LinkContainer>  
              {isAuthenticated && (
                <NavDropdown title={TRANSLATIONS['details'][this.props.lang]} id="basic-nav-dropdown">
                  <LinkContainer to="/details">
                    <NavItem><LocalizedText stringUN='program' {...this.props}/></NavItem>
                  </LinkContainer>
                  {/*<LinkContainer to="/accomodation">
                    <MenuItem><LocalizedText stringUN='accomodation' {...this.props}/></MenuItem>
              </LinkContainer>*/} 
                  <LinkContainer to="/gifts">
                    <MenuItem><LocalizedText stringUN='gift-information' {...this.props}/></MenuItem>
                  </LinkContainer> 
                  <LinkContainer to="/music">
                    <MenuItem><LocalizedText stringUN='music' {...this.props}/></MenuItem>
                  </LinkContainer>
                  <LinkContainer to="/rsvp">
                    <MenuItem><LocalizedText stringUN='rsvp' {...this.props}/></MenuItem>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
            <Nav pullRight className='fill'>
              {
                !isAuthenticated && (
                  <NavItem
                    onClick={this.openloginDialog}
                  >
                    <LocalizedText stringUN='login' {...this.props}/>
                    </NavItem>
                )
              }
              {
                isAuthenticated && (
                  <NavItem
                    onClick={this.logout.bind(this)}
                  >
                    <LocalizedText stringUN='logout' {...this.props}/>
                    </NavItem>
                )
              }
              <NavDropdown title={`${TRANSLATIONS['language'][this.props.lang]}: ${this.props.lang}`} id="basic-nav-dropdown" onSelect={(key) => this.props.changeLanguage(key)}>
                {/*<MenuItem eventKey={"eng"} >English</MenuItem>*/}
                <MenuItem eventKey={"hun"} >Magyar</MenuItem>
                <MenuItem eventKey={"cz"} >Česky</MenuItem>
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
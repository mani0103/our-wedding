import React, { Component } from 'react';
import { Modal, OverlayTrigger, FormGroup, ControlLabel, FormControl, HelpBlock, Button, Alert } from 'react-bootstrap';
import Auth from '../Auth/Auth'

const auth = new Auth();

const INITIAL_STATE = {
    email: '',
    password: '',
    error: ''
  };

class LoginModal extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this);

        this.state = { ...INITIAL_STATE };
    }


    handleChange(propertyName, value) {
        this.setState({
            [propertyName]: value,
        })
    }

    loginClicked(event) {
        const {
          email,
          password,
          error
        } = this.state;
    
        auth.login(email, password)
          .then(authUser => {
            this.setState(() => ({ ...INITIAL_STATE }));
            this.props.hideLogin();
          })
          .catch(error => {
            //console.log(error.message)
            this.setState(() => ({ error: error.message}));
          });
        event.preventDefault();
    }

    render() {
        const {
            email,
            password
          } = this.state;
        const inputsFilled = email === '' || password === '';

        return (
            <div>
                <Modal show={this.props.showModal} onHide={this.props.hideLogin}>
                    <Modal.Header closeButton>
                        <Modal.Title>Login</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {this.state.error && 
                            <Alert bsStyle="danger">
                                {this.state.error}
                            </Alert>
                        }
                        <form>
                            <FieldGroup
                                id="formControlsEmail"
                                type="email"
                                label="Email address"
                                placeholder="Enter email"
                                onChange={(e) => this.handleChange('email', e.target.value)}
                                value={this.state.email}
                            />
                            <FieldGroup
                                id="formControlsPassword"
                                placeholder="Enter password"
                                label="Password"
                                type="password"
                                onChange={(e) => this.handleChange('password', e.target.value)}
                                value={this.state.password}
                            />

                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.loginClicked} disabled={inputsFilled}>Login</Button>
                        <Button onClick={this.props.hideLogin}>Close</Button>
                    </Modal.Footer>             
                </Modal>
                <div>{this.state.error.message}</div>
            </div>
            
        )
    }
}

function FieldGroup({ id, label, help, ...props }) {
    return (
        <FormGroup controlId={id} validationState={props.validationState}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
        </FormGroup>
    );
}

export default LoginModal;
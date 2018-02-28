import React, { Component } from 'react';
import { Modal, OverlayTrigger, FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap';
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

    getValidationState() {
        const length = this.state.email.length;
        if (length > 10) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
        return null;
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
          })
          .catch(error => {
            this.setState(() => ({ ...error }));
          });
        this.props.hideLogin();
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
                        <form>
                            <FieldGroup
                                id="formControlsEmail"
                                type="email"
                                label="Email address"
                                placeholder="Enter email"
                                validationState={this.getValidationState()}
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
            <FormControl.Feedback />
            {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
    );
}

export default LoginModal;
import React, { Component } from 'react';
import { Modal, OverlayTrigger, FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap';

class LoginModal extends Component {
    constructor(props){
        super(props);
        
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            email: "",
            password: "",
            value: ""
        };
    }

    
  getValidationState() {
    const length = this.state.email.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
    return null;
  }

  handleChange(e) {
    this.setState({ email: e.target.value });
  }

    render() {
        return(
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
                            onChange={this.handleChange}
                            value={this.state.email}
                            />
                        <FieldGroup id="formControlsPassword" label="Password" type="password" />

                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.hideLogin}>Login</Button>
                    <Button onClick={this.props.hideLogin}>Close</Button>
                </Modal.Footer>
            </Modal>
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
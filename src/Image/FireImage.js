import React, { Component } from 'react';
import fire from "../fire"
import { Image } from 'react-bootstrap';
import './FireImage.css'

class FireImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: ''
        }

    }
    componentWillMount(){
        const storage = fire.storage();
        const storageRef = storage.ref();
        const imagesRef = storageRef.child(this.props.src);
        imagesRef.getDownloadURL().then(url => this.setState({url: url}))
    }

    render(){
        return (
            //<div>{this.imageRef}</div>
            <Image bsClass="fire-image" responsive={true} src={this.state.url} />
        )
    }
}

export default FireImage;

 
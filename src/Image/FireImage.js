import React, { Component } from 'react';
import fire from "../fire"
import { Image } from 'react-bootstrap';
import './FireImage.css'

class FireImage extends Component {
    constructor(props) {
        super(props);
        //this.storageRef = fire.storage().ref();
        //this.imageRef = this.storageRef.child(this.props.src);
    }

    render(){
        return (
            //<div>{this.imageRef}</div>
            <Image bsClass="fire-image" responsive="true" src="https://firebasestorage.googleapis.com/v0/b/silvi-and-attila.appspot.com/o/header.png?alt=media&token=d0909dbc-c3ec-42a0-8142-93fb1564bb9d" />
        )
    }
}

export default FireImage;
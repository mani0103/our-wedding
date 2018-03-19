import React, { Component } from 'react';
import Gallery from 'react-grid-gallery';
import { Modal, Button, ButtonGroup } from 'react-bootstrap';
import fire from '../fire';
import UploadImageDialog from '../Image/UploadImageDialog';
import './Photos.css'
/*
const IMAGES =
[{
        src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        caption: "After Rain (Jeshu John - designerspics.com)"
},
{
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        caption: "Boats (Jeshu John - designerspics.com)"
},
 
{
        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
}]
*/
const storage = fire.storage();
const storageRef = storage.ref();
const db = fire.database();
const dbref = db.ref();

class PhotoGallery extends Component {
    constructor(props) {
        super(props);
        
        this.openUploadDialog = this.openUploadDialog.bind(this);
        this.closeUploadDialog = this.closeUploadDialog.bind(this);
        this.onSelectImage = this.onSelectImage.bind(this);
        this.deleteImages = this.deleteImages.bind(this);
        this.deselectAll = this.deselectAll.bind(this);

        this.state = {
            showUploadDialog: false
        };
    }

    openUploadDialog() {
        this.setState({showUploadDialog: true})
    }
    closeUploadDialog() {
        this.setState({
            showUploadDialog: false,
            pics: []
        })
    }

    deleteImages() {
        for(const [key, value] of Object.entries(this.props.photos)){
             if(value.hasOwnProperty("isSelected") && value.isSelected){
                dbref.child(`/pictures/${key}`).remove();
            }
        }
    }

    onSelectImage (index, image) {
        this.props.selectImage(image.un);
    }

    deselectAll() {
        for(const [key, value] of Object.entries(this.props.photos)){
            if(value.hasOwnProperty("isSelected") && value.isSelected){
                this.props.selectImage(key);
           }
       }
    }

    render() {
        const IMAGES = Object.values({...this.props.photos});
        const isSomethingSelected = IMAGES.some((p) => p.hasOwnProperty("isSelected") && p.isSelected === true)
        
        console.log(IMAGES)
        return (
            <div>
                { this.props.authed &&
                    <ButtonGroup>
                        <Button onClick={this.openUploadDialog} >Upload Pictures</Button>
                        {isSomethingSelected && <Button onClick={this.deleteImages}>Delete Pictures</Button>}
                        {isSomethingSelected && <Button onClick={this.deselectAll}>Deselect All</Button>}
                    </ButtonGroup>
                }

                <Gallery images={IMAGES} onSelectImage={this.onSelectImage}/>
                <UploadImageDialog closeUploadDialog={this.closeUploadDialog} showUploadDialog={this.state.showUploadDialog} {...this.props}/>
            </div>
            
        )
    }
}  

export default PhotoGallery;
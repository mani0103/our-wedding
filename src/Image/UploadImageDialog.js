import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import fire from '../fire'

const storage = fire.storage();
const storageRef = storage.ref();
const db = fire.database();
const dbref = db.ref();

class UploadImageDialog extends Component {
    constructor(props) {
        super(props);
        
        this.uploadToFirebase = this.uploadToFirebase.bind(this);
        this.handleFileSelect = this.handleFileSelect.bind(this);
        this.closeUploadDialog = this.closeUploadDialog.bind(this);    

        this.state = {
            pics: []
        };
    }


    getImageDetails(file) {
        return new Promise((resolve, reject) =>{
            let fr = new FileReader;
            fr.onload = () => {
                let image = new Image;
                image.onload = () => {
                    resolve({
                        width: image.width, 
                        height: image.height
                    })
                }
                image.onerror = () => {
                    return reject(this);
                };
                image.src = fr.result;

            }
            fr.onerror = () => {
                return reject(this);
            };
            fr.readAsDataURL(file);
            }
        )
    }

    async handleFileSelect(evt) { 
        let images = await Promise.all(
            [...evt.target.files].map(async (file) => {
                let imageData = await this.getImageDetails(file);
                return {file: file, uploaded: 0, ...imageData}
            }) 
        ) 
        this.setState( { 
            pics: images  
        });
        console.log(this.state.pics)
        this.setState( { uploadButtonDisabled:  false} )
    }

    uploadToFirebase() {
        this.setState( { uploadButtonDisabled:  true} )       
        this.state.pics.map( (pic, i) => {
            const file = pic.file;
            const metadata = {
                contentType: file.type,
                width: pic.width,
                height: pic.height
            };

            //console.log(i)
    
            let uploadTask = storageRef.child(file.name).put(file, metadata);
    
            uploadTask.on('state_changed',
            (snapshot) => {
                let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100 || 0;
                let nextState = [...this.state.pics];
                nextState[i].uploaded = progress;
                this.setState({pics: nextState});
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused': 
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                }
            }, (error) => {
            switch (error.code) {
                case 'storage/unauthorized':
                break;
                case 'storage/canceled':
                break;
                case 'storage/unknown':
                break;
            }
            }, () => {
                let url = uploadTask.snapshot.downloadURL;
                let newPicKey = dbref.child('pictures').push().key;
                var updates = {};
                updates[`/pictures/${newPicKey}`] = {
                    src: url,
                    thumbnail: url,
                    un: newPicKey,
                    caption: file.name,
                    width: pic.width,
                    height: pic.height,
                    uid: this.props.user.uid,
                    userEmail: this.props.user.email
                };
                dbref.update(updates);
            });
        })
        
    }
    closeUploadDialog() {
        this.setState({pics: []});
        this.props.closeUploadDialog();
    }

    render() {
        return (
            <Modal show={this.props.showUploadDialog} onHide={this.closeUploadDialog}>
                <Modal.Header closeButton>
                    <Modal.Title>Upload Photos</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input type="file" id="files" name="files[]" multiple onChange={this.handleFileSelect} />
                    {/*<label for="files">Choose a file</label>*/}
                    {this.state.pics.map(pic => <div key={pic.key}>{pic.file.name}: {pic.uploaded.toFixed()}% Uploaded</div>)}
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.uploadToFirebase} disabled={this.state.uploadButtonDisabled} >Upload</Button>
                    <Button onClick={this.closeUploadDialog}>Close</Button>
                </Modal.Footer>             
            </Modal>
            
        )
    }
}  

export default UploadImageDialog;
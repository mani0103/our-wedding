import React, { Component } from 'react';
import Gallery from 'react-grid-gallery';
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


class PhotoGallery extends Component {
    constructor(props) {
      super(props);
    }

    handleFileSelect(evt) {
        var files = evt.target.files;
        for (var i = 0, f; f = files[i]; i++) {
          console.log(f)
        }
    }

    render() {
        const IMAGES = Object.values(this.props.urls);
        return (
            [
                <input type="file" id="files" name="files[]" multiple onchange={(evt) => console.log(evt)} />,
                <label for="files">Choose a file</label>,
                <Gallery images={IMAGES}/>,  
            ]
            
        )
    }
}  

export default PhotoGallery;
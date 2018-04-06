import React, { Component } from 'react';
import fire from '../fire';
import LocalizedText from '../Translations/LocalizedText';
import './Music.css';


const db = fire.database();
const dbref = db.ref();

const INIT_STATE = {
        artist: '',
        title: ''
}


class MusicList extends Component {
    constructor() {
        super();

        this.handleChange = this.handleChange.bind(this);
        this.onTrackAdd = this.onTrackAdd.bind(this);

        this.state = {
            tracks: {},
            track: INIT_STATE
        }
    }

    componentDidMount() {
        dbref.child('music').on('value', (data) => {
            this.setState(
                {
                    tracks: data.val()
                }
            );

        })
    }

    handleChange(propertyName, value) {
        const newTrack = {...this.state.track, [propertyName]: value}
        this.setState({
            track: newTrack,
        })
    }

    onTrackAdd(e){
        e.preventDefault();
        let newTrackKey = dbref.child('music').push().key;
        let updates = {};
        updates[`/music/${newTrackKey}`] = {
            ...this.state.track,
            uid: this.props.user.uid,
            userEmail: this.props.user.email,
        };
        dbref.update(updates);

        this.setState({track: INIT_STATE})
    }


    render() {
        const {
            track: {
                artist,
                title
            },
            tracks
        } = this.state;

        //console.log(artist, title)
        return (
            <div className='music-list-container'>
                <h1> <LocalizedText stringUN='musicList' {...this.props} /> </h1>
                <h2> <LocalizedText stringUN='musicListDescription' {...this.props} /> </h2>
                <div className="input-flex-wrapper">
                    <form className="form-container">
                        <input type="text" placeholder="Artist" onChange={(e) => this.handleChange('artist',e.target.value)} value={artist} />
                        &nbsp;&nbsp;-&nbsp;&nbsp;
                        <input type="text" placeholder="Title" onChange={(e) => this.handleChange('title',e.target.value)} value={title}/>
                        &nbsp;&nbsp;
                        <button
                            className="add-track"
                            type="submit"
                            onClick = {this.onTrackAdd}
                            disabled={!artist || !title}
                        >
                            +
                        </button>
                    </form>
                </div>
                
                {
                    Object.entries(this.state.tracks).map(([key, value]) => {

                        return <div key={key} className="track-item">{value.artist} - {value.title}</div>
                    })
                }
                
            </div>
        )
    }
}

export default MusicList;
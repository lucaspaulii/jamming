import React from "react";
import './Playlist.css';

import TrackList from "../TrackList/TrackList";

class Playlist extends React.Component {

    constructor(props) {
        super(props);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePlaylistSave = this.handlePlaylistSave.bind(this);
    }
    handleNameChange(event) {
        this.props.onNameChange(event.target.value);
    }
    handlePlaylistSave() {
        this.props.onSave;
        this.props.savedPlaylist;
    }

    render() {
        return (
            <div className="Playlist">
                <input defaultValue={"Insert Playlist Name"} onChange={this.handleNameChange}/>
                <TrackList tracks={this.props.playlistTracks} 
                           onRemove={this.props.onRemove} 
                           isRemoval={true}/>
                <button className="Playlist-save" onClick={this.handlePlaylistSave}>SAVE TO SPOTIFY</button>
            </div>
        )
    }
}

export default Playlist;
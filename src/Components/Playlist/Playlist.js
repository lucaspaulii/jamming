import React from "react";
import './Playlist.css';

import TrackList from "../TrackList/TrackList";

class Playlist extends React.Component {

    constructor(props) {
        super(props);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.clearInput = this.clearInput.bind(this);
        this.handleClick = this.handleClick.bind(this)
    }
    handleNameChange(event) {
        this.props.onNameChange(event.target.value);
    }

    clearInput() {
        document.getElementById("input").value = "Let's do it again!";
    }

    handleClick() {
        this.props.onSave();
        setTimeout(this.clearInput(), 2000);
    }

    render() {
        return (
            <div className="Playlist">
                <input defaultValue={this.props.playlistName} onChange={this.handleNameChange} id="input"/>
                <TrackList tracks={this.props.playlistTracks} 
                           onRemove={this.props.onRemove} 
                           isRemoval={true}/>
                <button className="Playlist-save" onClick={this.handleClick}>SAVE TO SPOTIFY</button>
            </div>
        )
    }
}

export default Playlist;
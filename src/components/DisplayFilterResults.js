import React, {Component} from 'react'
import * as firebase from 'firebase'



export default class DisplayFilterResults extends Component {

  constructor() {
    super()

    this.state={
      songData: []
    }
  }

  handleClick = (e) => {
    let song = this.props.datum
    this.fetchFunction(song)
  }

  fetchFunction = (song) => {
    let newSongRef = firebase.database().ref('songs/').push()
    console.log(newSongRef.key)

    newSongRef.set({
      id: newSongRef.key,
      song: song.name,
      artist: song.artists[0].name,
      album: song.album.name,
      upVote: 0,
      downVote: 0,
      user: 'brooke',
      datum: song
    })
  }

  render(){
    console.log(this.props.datum)
    return(
      <div>
        <div onClick={this.handleClick} id={this.props.datum}>
          <p id={this.props.datum}>Track: {this.props.datum.name}</p>
          <p id={this.props.datum}>Artist: {this.props.datum.artists[0].name}</p>
          <p id={this.props.datum}>Album: {this.props.datum.album.name}</p>
          <p>---</p>
        </div>
      </div>
    )
  }
}

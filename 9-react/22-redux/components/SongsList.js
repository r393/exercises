import React from 'react'
import {connect} from 'react-redux'
import {selectSong} from '../actions'

// the component get the data from outside as props  and there is no other way
class SongsList extends React.Component {


    onSelectBtnClick = (song) => {
        // this.props.dispatch(selectSong(song))
        this.props.selectSong(song)
    }
    

  render() {
      console.log(this.props);
    const songsItems = this.props.songs.map((song, idx) => {
        return(
            <li key={idx} className="list-group-item">{song.title} <button onClick={() => {this.onSelectBtnClick(song)}} className="btn btn-primary float-right">Show</button></li>
        )
    })
    return (
      <div className="col-md-6">
        <ul className="list-group">
          {songsItems}
        </ul>
      </div>
    )
  }
}

// this function is to cnvert some data from main state to props to be passed to
// a component using connect method
const mapStateToProps = (state) => {
    // console.log(state);
  return ({songs: state.songs})
}

export default connect(mapStateToProps, {selectSong})(SongsList)
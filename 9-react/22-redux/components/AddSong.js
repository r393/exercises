import React from 'react'
import {connect} from 'react-redux'
import {addSong} from '../actions'

class AddSong extends React.Component {
    state = {
        songTitle: '',
        songDuration: ''
    }
    onDurationChange = (e) => {
        this.setState({songDuration: e.target.value})
    }
    onTitleChange = (e) => {
        this.setState({songTitle: e.target.value})
    }
    onAddBtnClick = () => {
        this.props.addSong({
            title: this.state.songTitle,
            duration: this.state.songDuration
        })
    }
  render() {
    return (
      <div className="col-md-12">
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" >Song Title</span>
          </div>
          <input
            type="text"
            className="form-control"
            value={this.state.songTitle}
            onChange={this.onTitleChange}
            placeholder="Song Title"/>
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Song Duration</span>
          </div>
          <input
            type="text"
            className="form-control"
            value={this.state.songDuration}
            onChange={this.onDurationChange}
            placeholder="Song Duration"/>
        </div>
        <button onClick={this.onAddBtnClick} className="btn btn-success">Add</button>
      </div>
    )
  }
}

export default connect(null, {addSong})(AddSong)
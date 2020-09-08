import React from 'react'

class SearchBar extends React.Component {
  state = {searchWord: '', color: null}

  onSearchInpChange = (e) => {
    this.setState({searchWord: e.target.value})
    
  }

  // componentDidUpdate(){
  //   console.log(this.state.searchWord);
  // }

  onSearchBtnClick = () => {
    this.props.runSearch(this.state.searchWord, this.state.color)
  }

  setColor = (e)=>{
    this.setState({color: e.target.value})
    //console.log(this.state.color);
  }

  render() {
    return (
      <div className="row">
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <button className="btn btn-outline-secondary" type="button" onClick={this.onSearchBtnClick}>Search</button>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Type somethimg to search"
            value={this.state.searchWord}
            onChange={this.onSearchInpChange}
            />
        </div>
        <div className="input-group-prepend">
          <select onChange={this.setColor}>
            <option value="0">select a color</option>
            <option value="grayscale">grayscale</option>
            <option value="transparent">transparent</option>
            <option value="red">Red</option>
            <option value="orange">Orange</option>
            <option value="yellow">Yellow</option>
            <option value="green">Green</option>
            <option value="tuequoise">tuequoise</option>
            <option value="blue">blue</option>
            <option value="lilac">lilac</option>
            <option value="pink">pink</option>
          </select>
        </div>
      </div>
    )
  }
}
export default SearchBar
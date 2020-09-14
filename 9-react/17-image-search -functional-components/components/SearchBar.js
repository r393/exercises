import React, {useState} from 'react'

const SearchBar = (props) => {
  const [searchWord, setSearchWord] = useState('')

  const onSearchInpChange = (e) => {
    setSearchWord(e.target.value)
    
  }

  // componentDidUpdate(){
  //   console.log(this.state.searchWord);
  // }

  const onSearchBtnClick = () => {
   props.runSearch(searchWord)
  }

  

  
    return (
      <div className="row">
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <button className="btn btn-outline-secondary" type="button" onClick={onSearchBtnClick}>Search</button>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Type somethimg to search"
            value={searchWord}
            onChange={onSearchInpChange}
            />
        </div>
        {/* <div className="input-group-prepend">
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
        </div> */}
      </div>
    )
  
}
export default SearchBar
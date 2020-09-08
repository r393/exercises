import React from 'react'


class SearchBtn extends React.Component{
    state={
        searchWord: ''
    }
    onInputSearchChange = (e) => {
        e.preventDefault()

        this.setState({searchWord: e.target.value})
    }
    triggerSearch = (keyWord) => {
        this.props.runSearch(keyWord)
    }
    onSearchBtnClick = () => {
        this.triggerSearch(this.state.searchWord)
    }
    render(){
        return (
            <div className="row">
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <button className="btn btn-outline-secondary" type="button" onClick={this.onSearchBtnClick}>Search</button>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder=""
            aria-label=""
            aria-describedby="basic-addon1"
            value={this.state.searchWord}
            onChange={this.onInputSearchChange}/>
        </div>
      </div>
        )
    }
}
export default SearchBtn
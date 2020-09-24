import React from 'react'
import {connect} from 'react-redux'

import getData from '../services/pixabay'
import {setImages, nextAction} from '../actions'

class SearchBar extends React.Component {

    state ={
        searchWord: '',
        page: 1
    }


    onSearchInpChange = (e) => {
        this.setState({
            searchWord: e.target.value
        })
    }

    onSearchBtnClick = () => {
        getData(this.state.searchWord, 5, 1).then(data => {
            //console.log(data);
            this.props.setImages(data.hits)
        })
    }

    componentDidUpdate(){
        if(this.props.next){
            getData(this.state.searchWord, 5, this.state.page + 1).then(data => {
                //console.log(data);
                this.setState({
                    page: this.state.page + 1
                })
                this.props.nextAction(false)
                this.props.setImages([...this.props.images, ...data.hits])
            })
        }
    }

  render() {
    return (
      <div className="input-group mb-3 mt-3">
        <div className="input-group-prepend">
          <button onClick={this.onSearchBtnClick} className="btn btn-outline-secondary" type="button">Search</button>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Search Word"
          value={this.state.searchWord}
          onChange={this.onSearchInpChange}
          />
      </div>
    )
  }
}
// state on mapStateToProps is gonna be the main State 
const mapStateToProps = (state) => {
    return { images: state.images, next: state.next}
}

export default connect(mapStateToProps, {setImages, nextAction})(SearchBar)
import React from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './Components/SearchBar'
import Time from './Components/Time'
import getImages from './services/pixabay'
import ShowImages from './Components/ShowImages'
import Pagging from './Components/Pagging'
class App extends React.Component {

    constructor(props) {
        super(props)
        // component refrences must be created on constructor
        this.blaspinnerRef = React.createRef()
    }

  state = {
    totalImages: null,
    imagesList: [],
    searchWord: null,
    color: null
  }
  search = (searchWord, color,pageNumber) => {
    //console.log(searchWord); search proccess

    this.blaspinnerRef.current.classList.add('active')
    getImages(searchWord, color, pageNumber).then(data => {
        this.blaspinnerRef.current.classList.remove('active')
      console.log(data);
      this.setState({
        totalImages: data.total,
        imagesList: [...data.hits],
        searchWord: searchWord,
        color: color
      })
    }).catch(error => {
        this.blaspinnerRef.current.classList.remove('active')
      console.log(error);
    })
  }
  goToPage = (num) => {
      this.search(this.state.searchWord, this.state.color, num)
  }
  render() {
    // let foundMessage = '' if (this.state.totalImages != null) {     foundMessage
    // = 'Found: ' + this.state.totalImages + ' Images' }
    return (
      <div className="ui segment">
        <Time/>
        <SearchBar text="Enter Search word" runSearch={this.search}/> {/* {foundMessage} */}
        {this.state.totalImages != null
          ? 'Found: ' + this.state.totalImages + ' Images'
          : ''}
          
        <ShowImages images={this.state.imagesList}/>
        {/* {this.state.totalImages != null ? <Pagging /> : ''} */}
        <Pagging totalImages={this.state.totalImages} runPage={this.goToPage}/>
          <div ref={this.blaspinnerRef} className="ui  dimmer">
            <div className="ui text loader">Loading</div>
          </div>
          <p></p>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>, document.querySelector('#container'))
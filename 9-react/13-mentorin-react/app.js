import React from 'react'
import ReactDOM from 'react-dom'
import SearchBtn from './component/SearchBtn'
import getProducts from './service/getProducts'
import ShowProducts from './component/ShowProducts'


class App extends React.Component{
    state = {
        searchWord: null,
        perPage: 20,
        pageNum: 1,
        searchResult: []
    }
    search = (keyWord) => {
        if(keyWord){
            getProducts(keyWord, this.state.perPage, this.state.pageNum).then(data => {
                console.log(data);
                this.setState({searchWord: keyWord, searchResult: [ ...data.results[0].hits ]})
            })
        }
    }
    onMoreBtnClick =() => {
        if(this.state.searchWord) {
            getProducts(this.state.searchWord, this.state.perPage, this.state.pageNum +1).then(data => {
                console.log(data);
                this.setState({searchResult: [...this.state.searchResult, ...data.results[0].hits], pageNum: this.state.pageNum + 1})
            })
        }
    }
    render(){
        return(
            <div className="container">

                <SearchBtn runSearch={this.search}/>
                <ShowProducts hits={this.state.searchResult} goNext={this.onMoreBtnClick}/>
                {/* <button className="btn btn-success" onClick={this.onMoreBtnClick}>view more</button> */}
             </div>
        )
    }
}
ReactDOM.render(<App />, document.querySelector('#container'))
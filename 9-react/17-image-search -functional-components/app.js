import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/SearchBar'
import getData from './services/pixabay'
import ShowImages from './components/ShowImages'


const App = () => {


    const defaultState = {
        results: [],
        searchWord: '',
        pageNum: 1,
        perPage: 4,
        
    }
    const [myState, setMyState] = useState(defaultState)


    const search = (keyWord) => {
        
        if(keyWord){
            getData(keyWord, 4, 1).then(data => {
                console.log(data);
                setMyState({searchWord: keyWord,pageNum: 1, perPage: 4,results: [...data.hits]})
            })
        } else {
            setMyState({searchWord: keyWord,pageNum: 1, perPage: 4,results: []})
        }
    }
    const goNext = () => {
        getData(myState.searchWord, myState.perPage, myState.pageNum + 1).then(data => {
            setMyState({
                searchWord:myState.searchWord,
                perPage: myState.perPagr,
                pageNum: myState.pageNum + 1,
                results: [...myState.results, ...data.hits]
            })
        })
    }
    
    
        return(
            <div className="container">
                <SearchBar runSearch={search} />
                {myState.results.length ? <ShowImages images={myState.results} runNext={goNext}/> : ''}
            </div>
        )
    
}

ReactDOM.render(<App />, document.querySelector('#container'))
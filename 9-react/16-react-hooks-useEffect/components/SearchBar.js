import React, {useState, useEffect, useRef} from 'react'
import getWiki from '../service/Wikipedia'

const SearchBar = () => {

    const btnRef = useRef()
    useEffect(() => {
        console.log(btnRef.current);
    })

    

    const [searchWord, setSearchWord] = useState('')
    const [articles, setArticles] = useState([])
  
    const onSearchInpChange = (e) => {
      console.log(e.target.value);
      setSearchWord(e.target.value)
      //getWiki(e.target.value).then(data => {     console.log(data); })
    }
  
    // useEffect(() => {     console.log('I will be called in first time and in
    // every update'); }) useEffect(() => {     console.log('I am gonna becalled
    // ONLY for the first time'); }, [])
  
    useEffect(() => {
      // console.log('I am gonna be called for the first time and when "searchWord in
      // the state"  is changed');

      const timmer = setTimeout(() => {
        if (searchWord) {
            getWiki(searchWord).then(data => {
              console.log(data);
              setArticles([...data.query.search])
            })
          }
      
      }, 1000)
      // clean up function
        return () => {
          console.log('this is a clean up function which will be invoked directly before the call of the same useEffect function for the second time');
          clearTimeout(timmer)
      }
      
    }, [searchWord])
  
    const articlesElements = articles.map(article => {
      return (
        <div key={article.pageid} className="card">
          <div className="card-header">
            {article.title}
          </div>
          <div className="card-body">
            
            <p className="card-text"  dangerouslySetInnerHTML={{__html: article.snippet}}></p>
            <a href={`https://en.wikipedia.org?curid=${article.pageid}`} target="_blank" className="btn btn-primary">Open In Wikipedia</a>
          </div>
        </div>
      )
    })
  
    return (
      <div className="row">
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <button ref={btnRef} className="btn btn-outline-secondary" type="button">Search</button>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Type somthing to search"
            onChange={(e) => {
            onSearchInpChange(e)
          }}
            value={searchWord}/>
        </div>
  
        <div className="col-sm-12">
            {articlesElements}
        </div>
  
      </div>
    )
}
export default SearchBar
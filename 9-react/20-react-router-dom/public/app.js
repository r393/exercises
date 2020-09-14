import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import NavBar from './components/NavBar'


const PageOne = () => {
    return(
        <div>
            Page One
            <br />
            {/* <a href ="/pagetwo">Page two</a> */}
            <Link to="/pagetwo">Page two</Link>
        </div>
    )
}
const PageTwo = () => {
    return(
        <div>
            PageTwo
            <br />
            {/* <a href ="/pageone">Page one</a> */}
            <Link to="/">Page one</Link>

        </div>
    )
}
const PageThree = () => {
    return(
        <div>PageThree</div>
    )
}
class App extends React.Component{
    render() {
        return(
            
                <BrowserRouter>
                    <div>
                    <NavBar />
                        {/* <Route path="/" component={NavBar} /> */}
                        <Route path="/" exact component={PageOne} />
                        <Route path="/pagetwo" exact component={PageTwo} />
                        <Route path="/pagetwo/pagethree" component={PageThree} />

                    </div>
                </BrowserRouter>
            
        )
    }
}
ReactDOM.render(<App />, document.querySelector('#container'))
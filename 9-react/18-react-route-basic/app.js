import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from 'reactstrap';


class App extends React.Component{

    render(){
        let currentPage = null;
        if (window.location.pathname === '/dist/index.html'){
            currentPage = <Home />
        }
        if (window.location.pathname === '/dist/contact.html'){
            currentPage = <Contact />
        }
        if (window.location.pathname === '/dist/about.html'){
            currentPage = <About />
        }
        
        return(
            <div>
                {currentPage}
            </div>
        )
    }
}


class Home extends React.Component{
    render(){
        return(
            <div>
                Home
                <br />
                <a href="/dist/contact.html">Contact</a>
                <br />
                <a href="/dist/about.html">About</a>
                <br />
                <Button color="danger">Danger</Button>

            </div>
        )
    }
}

class Contact extends React.Component{
    render(){
        return(
            <div>
                Contact
                <br />
                <a href="/dist/index.html">Home</a>
                <br />
                <a href="/dist/about.html">About</a>

            </div>
        )
    }
}

class About extends React.Component{
    render(){
        return(
            <div>
                About
                <br />
                <a href="/dist/contact.html">Contact</a>
                <br />
                <a href="/dist/index.html">home</a>

            </div>
        )
    }
}


ReactDOM.render(<App />, document.querySelector('#container'))
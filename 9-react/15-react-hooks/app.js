import React from 'react'
import ReactDOM from 'react-dom'
import Accordion from './components/Accordion'



const items = [
    {
        title: 'What is React?',
        content: 'React is a front end javascript framework'
    },
    
    {
        title: 'Why do you use React?',
        content: 'React is a favourit library for front enf developers'
    },
    
    {
        title: 'How do you use React?',
        content: 'React is is used by creating Components'
    }
]
const App = () => {
    return (
        <div className="container">
            <Accordion items={items}/>
        </div>
        
    )
}
ReactDOM.render(<App />, document.querySelector('#container'))
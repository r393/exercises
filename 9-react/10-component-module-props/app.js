import React from 'react'
import ReactDOM, {render} from 'react-dom'
import faker from 'faker'
import Comment from './components/Comment'
import ApprovaCard from './components/ApprovalCard'

const App = () => {
  return (
    <div className ="ui container comments">
        <ApprovaCard>
            I am a beautiful card
        </ApprovaCard>
        <ApprovaCard>
            <h2>Confirm</h2>
        <Comment text="Nice comment" rate ="5" starColor ="red" />
        </ApprovaCard>
       
        <Comment text="I like it" rate ="4" starColor ="yellow"  />
        <Comment text="not bad" rate="1" starColor ="blue" />
        <Comment rate="3" starColor ="grey" />

    </div>
    
  )
}
ReactDOM.render(
  <App/>, document.querySelector('#container'))

import React, {useState} from 'react'


// const useState = React.useState

const Accordion = ({items}) => {

    //const [index, setIndex] = useState(null)
    const activeState = useState(null)
    let index = activeState[0]
    let setIndex = activeState[1]
    //class component it will be like the following
    // state = {index: null}


    const onTitleClick = (itemIndex) => {
        console.log(itemIndex + 'title is clicked');
        setIndex(itemIndex)
        
    }
  console.log(items);
  const itemsElements = items.map((item, idx) => {
    return (
      <div key={idx} className="card">
        <div className="card-header">
          <h2 className="mb-0">
            <button className="btn btn-link" onClick = {() => {onTitleClick(idx)}}>
              {item.title}
            </button>
          </h2>
        </div>
        <div className={`collapse ${index === idx ? 'show' : ''}`}>
          <div className="card-body">
            {item.content}
          </div>
        </div>
      </div>
    )
  })
  return (
    <div className="row">
      <div className="accordion">
        {itemsElements}
      </div>
    </div>

  )
}
export default Accordion
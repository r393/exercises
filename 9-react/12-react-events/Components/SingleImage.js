import React from 'react'

class SingleImage extends React.Component{
    constructor(props) {
        super(props)
        this.overallDivRef = React.createRef()
    }
    onthumbImageClick = () => {
        this.overallDivRef.current.classList.add('active')
        this.overallDivRef.cuttent.addEventlistener('click', this.onOverrallClick)
    }
    render(){
        return (
            <div >
                <img onClick={this.onthumbImageClick} src={this.props.imageData.previewURL} />
                <div ref={this.overallDivRef} className="ui  dimmer">
                    <img onLick={(e) => {e.stopPropagation()}} src={this.props.imageData.largeImageURL} />
                </div>
            </div>
        )
        
    }
}

export default SingleImage
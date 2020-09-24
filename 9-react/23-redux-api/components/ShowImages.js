import React from 'react'
import {connect} from 'react-redux'

import {selectImage, nextAction} from '../actions'

class ShowImages extends React.Component{
  constructor(props){
    super(props)
    this.ulRef = React.createRef()
  }
  scroll = () => {
    console.log(this.ulRef.current.getBoundingClientRect().bottom);
    console.log(window.innerHeight);
    if (this.ulRef.current.getBoundingClientRect().bottom < window.innerHeight){
      console.log('reach the end');
      this.props.nextAction(true)
    }
  }
  componentDidUpdate(){
    window.addEventListener('scroll',() => {
      this.scroll()
    })
  }
    onSelectImgBtnClick = (image) => {
        this.props.selectImage(image)
    }
    render() {
        const imagesElements = this.props.images.map((image, idx) => {
            return(
              <li key={idx} className="list-group-item">
              <div className="media align-items-lg-center flex-column flex-lg-row p-3">
                <div className="media-body order-2 order-lg-1">
                  <h5 className="mt-0 font-weight-bold mb-2">Photographer: {image.user} </h5>
                  <p className="font-italic text-muted mb-0 small">Tags: {image.tags} </p>
                  <div className="d-flex align-items-center justify-content-between mt-1">
                    <button className="btn btn-primary" onClick={() =>{this.onSelectImgBtnClick(image)}}>show Large Image</button>
                  </div>
                </div><img
                  src={image.previewURL}
                  alt="Generic placeholder image"
                  width="200"
                  className="ml-lg-5 order-1 order-lg-2"/>
              </div>
            </li>
            )
        })
      return (
        <ul ref={this.ulRef} className="list-group shadow col-md-12 mb-3">
          {imagesElements}
        </ul>
      )
    }
}


const mapStateToProps = (state) => {
    console.log(state.selectedImage);
    return{images: state.images}
}

export default connect(mapStateToProps, {selectImage, nextAction})(ShowImages)
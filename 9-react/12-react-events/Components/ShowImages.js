import React from 'react'

class ShowImages extends React.Component{
    render(){
        console.log(this.props.images);
        // let imagesElements = this.props.images.map(image => {
        //     return(
        //         <img key ={idx} src={image.prewiewURL} />
        //     )
        // })
        let imagesElements = []
        this.props.images.forEach((image, idx) => {
            imagesElements.push(
                
                        <img key={idx} src={image.previewURL} />
                    
                )
        });
        return(
            <div className="container">
                {imagesElements}
            </div>
        )
    }
}
export default ShowImages
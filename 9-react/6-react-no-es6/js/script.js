class MyDiv extends React.Component {
    render() {

        return (
            <div>
                
                <span>Hello World</span>
                <br />
                <MySpan />{/* calling component in React*/}
                <MySpan />
               
            </div>

        ) 
    }
}
class MySpan extends React.Component {
    render(){
        return <div><span>I am a new span</span> <span>I am new span1</span></div>
    }
}

ReactDOM.render(<MyDiv /> , document.querySelector('#container'));
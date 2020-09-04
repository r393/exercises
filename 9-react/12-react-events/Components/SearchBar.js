import React from 'react'

class SearchBar extends React.Component{
    state = {keyWord: null, color: null}
    //onInputChange:(e){ 
    onkeyWordInputChange =  (e) => {
        //console.log(e.target.value);
        this.setState({keyWord: e.target.value})
        //console.log(this);
    }
    onColorSelectChange = (e) => {
        // console.log(e.target.value);
        this.setState({color: e.target.value})
    }
    onFormSubmit = (e) => {
        e.preventDefault()
        // console.log(this.state.keyWord);
        if (this.state.keyWord) {
            this.props.runSearch(this.state.keyWord, this.state.color)
        }
        

    }
    
    render(){
        return(
            <div>
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>{this.props.text}</label>
                        <input type="text"  onChange={this.onkeyWordInputChange} />
                    </div>
                    <div className="field">
                        <label>Choose Image Color</label>
                        <select onChange={this.onColorSelectChange}>
                            <option value="">Choose Color</option>
                            <option value="grayscale">grayscale</option> 
                            <option value="transparent">transparent</option> 
                            <option value="red">red</option> 
                            <option value="orange">orange</option> 
                            <option value="yellow">yellow</option> 
                            <option value="green">green</option> 
                            <option value="turquoise">turquoise</option> 
                            <option value="blue">blue</option> 
                            <option value="lilac">lilac</option> 
                            <option value="pink">pink</option >
                            <option value="white">white</option> 
                            <option value="gray">gray</option> 
                            <option value="black">black</option> 
                            <option value="brown">brown</option>
                        </select>
                    </div>
                    <button className="ui positive basic button">Search</button>
                </form>
            </div>
        )
    }
}

export default SearchBar
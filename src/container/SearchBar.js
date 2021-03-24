import React from 'react';
import {connect} from 'react-redux';
import {fetchWeather} from '../actions';

class SearchBar extends React.Component{
    state={term:' '}

    onInputChange=(e)=>{
        console.log(e.target.value)
      this.setState({term:e.target.value})

    }

    onFormSubmit=(e)=>{
        e.preventDefault() 
        this.props.fetchWeather(this.state.term )
        this.setState({term:''})
    }
    render(){
        return(
           <form onSubmit={this.onFormSubmit} className="input-group">
               <input 
               className="form-control"
               
                value={this.state.term}
                onChange={this.onInputChange}/>
               <span className="input-group-btn ">
                   <button  type="submit" className="btn btn-secondary">Submit</button>
               </span>
           </form>

        )
    }
}

export default connect(null,{fetchWeather})( SearchBar);
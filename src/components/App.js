import React  from 'react';
import SearchBar from '../container/SearchBar';
import WeatherList from '../container/WeatherList';


class App extends React.Component{
    render(){
        return(
            <div className="container">
                <SearchBar/>
                <WeatherList/>
            </div>
        )
    }
}

export default App;
import '../style/style.css';
import React from 'react';
import { connect } from "react-redux";
import Chart from '../components/chart';
import GoogleMap from '../components/Google_map';




class WeatherList extends React.Component {
    renderweather(data) {
        const temp = data.list.map(weather =>
            weather.main.temp)
        const pressure = data.list.map(weather =>
            weather.main.pressure)
        const humidity = data.list.map(weather =>
            weather.main.humidity)
        const {lon,lat}=data.city.coord;


        return (
            <tr key={data.city.name}>
                <td><GoogleMap lon={lon} lat={lat} /></td>
                <td> <Chart data={temp} color="orange"  units="k"/></td>
                <td><Chart data={pressure} color="green"   units="hPa"/></td>
                <td><Chart data={humidity} color="blue"   units="%"/></td>

            </tr>
        )
    }


    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (k)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderweather)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps(state) {
    return { weather: state.weather }
}


export default connect(mapStateToProps)(WeatherList);
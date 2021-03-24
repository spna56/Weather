import React from 'react';

class GoogleMap extends React.Component{
componentDidMount(){
    const google=window.google;
    new google.maps.Map(this.refs.map,{            //reference to html element div where the map will render  with help of ref="map"
        zoom:12,
        center:{
            lat:this.props.lat,
            lng:this.props.lon
        }
    })
}

    render(){
      

        return (
            <div ref="map">                  
                
            </div>
        )
}}

export default GoogleMap;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

class Weather extends React.Component {
   render() {
      return(
         <div className="weather-board text-muted">
           <div className="condition">
               { this.props.icon
                  ? <img src={`http://openweathermap.org/img/w/${this.props.icon}.png`} alt={this.props.description} width="50px"/> 
                  : <img src={`http://openweathermap.org/img/w/09n.png`} alt={this.props.description} width="50px"/>  
               }<br/>
               </div>
            <div className="city_name">
               <h3 className="city-fade-name">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />  &nbsp;
                  {this.props.city}, {this.props.country}
               </h3>
            </div>
            <div className="local-currentDay">
               {this.props.date}
            </div>
            {/* {this.props.description} */}
            <div className="condition">
               <div className="container">
               <div className="row">
                  <div className="col-4">
                  {this.props.condition.toUpperCase()} <br/>
                  condition
                  </div>
                  <div className="col-4">
                  {this.props.temperature} &deg;C <br/>
                  Degree
                     </div>
                  <div className="col-4">
                     {this.props.humidity} % <br/>
                     humidity
                  </div>
               </div>
            </div>
            </div>
         </div>
      )
   }
}

export default Weather;
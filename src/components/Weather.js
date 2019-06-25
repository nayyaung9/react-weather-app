import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

class Weather extends React.Component {
    render() {
        return(
            <div className="weather-board text-muted">
                <div className="city_name">
                    <h3 className="city-fade-name">
                        <FontAwesomeIcon icon={faMapMarkerAlt} />  &nbsp;
                        {this.props.city}, {this.props.country}
                    </h3>
                </div>
                <div className="local-currentDay">
                    {this.props.date}
                </div>
                <div className="condition">
                {/* {'\u2728'} */}
                    {this.props.condition.toUpperCase()} <br/>
                    {this.props.temperature} &deg;C
                </div>
            </div>
        )
    }
}

export default Weather;
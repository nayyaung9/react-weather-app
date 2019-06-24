import React from 'react';

class Weather extends React.Component {
    render() {
        return(
            <div>
                <p className="weather_key"> Temperature:        {this.props.temperature}
                </p>
                <p className="weather_key"> City:                    {this.props.city}
                </p>
                <p className="weather_key"> Country:                    {this.props.country}
                </p>
                <p className="weather_key"> description:         {this.props.description}
                </p>
                <p className="weather_key"> Condition:         {this.props.condition}
                </p>
            </div>
        )
    }
}

export default Weather;
import React, { Component } from 'react';
// import Header from './components/Header';
import Form from './components/Form';
import Weather from './components/Weather';
import './App.css';
import './Weather.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Api_Key = '1101c777c19f28cb85b1d7b77d88e6a6';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      temperature: '0',
      city: 'City',
      country: 'Country',
      description: '',
      condition: '',
      icon: '',
      date: '',
      humidity: '0',
      error: ''
    }
  }

  getWeather = async (e) => {
    const city =  e.target.elements.city.value;
    const country = e.target.elements.country.value;
    e.preventDefault();
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}&units=metric`);
    const response = await api_call.json();
    console.log(response);
    if(city && country) {
      this.setState({
        temperature: response.main.temp,
        city: response.name,
        country: response.sys.country,
        description: response.weather[0].description,
        condition: response.weather[0].main,
        humidity: response.main.humidity,
        icon: response.weather[0].icon,
        error: ""
      })
    } else {
      this.setState({
        error: 'Input field required...'
      })
    }
  }

  componentDidMount() {
    this.getDate();
  }

  getDate = () => {
    var date = new Date().toDateString();
    this.setState({ date });
  }

  render() {
    const { date } = this.state;
    return(
      <React.Fragment>
        <div className="container">
          <div className="header">
            {/* <Header />  */}
          </div>
          <div className="row">
            
            <div className="col-sm-8 mobile-view">
              <div className="data-weather">
                <Weather 
                  temperature={this.state.temperature}
                  city={this.state.city}
                  country={this.state.country}
                  description={this.state.description}
                  condition={this.state.condition}
                  humidity={this.state.humidity}
                  icon={this.state.icon}
                  date={date}
                />
              </div>
            </div>
            <div className="col-sm-4">
              <div className="get-weather">
                <Form getWeather={this.getWeather}/>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default App;

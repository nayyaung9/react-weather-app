import React from 'react';

class Form extends React.Component {
   render() {
      return(
         <div>
            <form onSubmit={this.props.getWeather}>
               <input type="text" name="city" placeholder="City" className="form-control"/> <br/>
               <input type="text" name="country" placeholder="Country" className="form-control"/> <br />
               <button className="btn btn-info">Get Weather</button>
            </form>
         </div>
      )
   }
}

export default Form;
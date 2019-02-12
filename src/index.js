import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    //THIS IS THE ONLY TIME we do direct assignment
    //to this.state We always use setState
    this.state = { lat: null, errorMesage: '' };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // We called setState!!!!
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }
  //React says that we have to define render!!
  render() {
    return (
      <div>
      Latitude: {this.state.lat}
      <br />
      Error: {this.state.errorMessage}
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
<<<<<<< HEAD
import Spinner from './Spinner';

class App extends React.Component {
  state = { lat: null, errorMessage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
=======

class App extends React.Component {
    state = { lat: null, errorMessage: ''};

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

    //React says that we have to define render!!
  render() {
>>>>>>> 38c4991e52782c3d97f626d1ed5ff036ac642e3c
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
<<<<<<< HEAD
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Spinner message="Please accept location request" />;
  }

  render() {
    return <div className="border red">{this.renderContent()}</div>;
=======
      return <SeasonDisplay lat={this.state.lat} />
    }
    
    return <div>Loading!</div>;
>>>>>>> 38c4991e52782c3d97f626d1ed5ff036ac642e3c
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));

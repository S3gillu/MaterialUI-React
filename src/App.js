import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './App.css';
import AppBar from './components/materialUI/appBar/appBar';
import Signup from './components/materialUI/signup/signup';


class App extends Component {
  state = {
    fields: {}
  };
  onChange = updatedValue => {
    this.setState({
      fields: {
        ...this.state.fields,
        ...updatedValue
      }
    });
  };
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <AppBar />
        </div>
        <Signup onChange={fields => this.onChange(fields)}/>
      </MuiThemeProvider>
    );
  }
}

export default App;

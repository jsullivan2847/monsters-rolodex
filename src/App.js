import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component{
  constructor(){
    super();

    this.state = {
      name: 'Jimmy',
      company: 'ZTM'
    };
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi my name is {this.state.name} I work at {this.state.company}
          </p>
          <button onClick={() => { this.setState({name: "diff"}) 
          console.log(this.state)}}>
            Change Name
          </button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
export default App;

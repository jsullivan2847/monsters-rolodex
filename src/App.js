import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import {render} from 'react-dom'

class App extends Component{
  constructor(){
    super();

    this.state = {
      monsters: [{
        name: 'Frank'
      },{
        name: 'Linda'
      },{
        name: 'Jackie'
      }]
    }
  }  
  render(){
    return(
      <div className='App'>
        {this.state.monsters.map((monster, key) => {
          return (
          <h1 key={key}>{monster.name}</h1>
          )
        })}
      </div>
    )
  }
}
export default App;

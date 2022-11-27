import logo from './logo.svg';
import './App.css';
import { Component, useEffect } from 'react';
import {render} from 'react-dom'

class App extends Component{
  constructor(){
    super();
    
    this.state = {
      monsters: [],
    };
  } 
  
  componentDidMount(){
    const url = 'https://jsonplaceholder.typicode.com/users'
    fetch(url)
    .then(response => response.json())
    .then(users => this.setState(() => {
      return {monsters:users}
    }, () => {
      console.log((this.state))
    }))
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

import logo from './logo.svg';
import './App.css';
import { Component, useEffect } from 'react';
import {render} from 'react-dom'
import CardList from './components/card-list/CardList';
import SearchBox from './components/search-box/SearchBox';

class App extends Component{
  constructor(){
    super();
    
    this.state = {
      monsters: [],
      searchField:'',
    };
    // console.log('constructor')
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

    // console.log('componentDidMount');
  }
  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchField };
    }) 
  }

  render(){
    console.log('render')
    const {monsters, searchField} = this.state;
    const {onSearchChange} = this;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField)
    })

    return(
      <div className='App'>
        <SearchBox search={onSearchChange} placeholder="search monsters" className="search-bar"/>
        {filteredMonsters.length > 0 && <CardList monsters={filteredMonsters}/>}
      </div>
    )
  }
}
export default App;

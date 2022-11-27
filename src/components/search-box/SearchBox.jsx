import { Component } from "react";

class SearchBox extends Component{
    render(){
        const { search, placeholder, className } = this.props;
        return (
        <input 
        className={className} 
        type='search' 
        placeholder={placeholder}
        onChange={search}
        />
        )
    }
}

export default SearchBox;
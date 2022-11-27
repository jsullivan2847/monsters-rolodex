import { Component } from "react";

class Card extends Component{
    render(){
        const {id, className, name} = this.props;
        return (
            <div className={className}>
                  <img src={`https://robohash.org/${id}?set=set2&180x180`} alt={name} />
                        <h1>{id + 1}: {name}</h1>
            </div>
        )
    }
}

export default Card;
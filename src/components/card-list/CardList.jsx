import { Component } from "react";

class CardList extends Component{
    constructor(){
        super()
    }
    render(){
        console.log(this.props)
        console.log('render from Card List')
        const {monsters} = this.props
        return (
            <div>
                {monsters.map((monster, key) => {
                    return <h1 key={key}>{monster.name}</h1>
                })}
            </div>
        )
    }
}

export default CardList;
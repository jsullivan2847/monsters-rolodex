import { Component } from "react";
import './CardList.css'
import Card from "../card/Card";

class CardList extends Component{
    constructor(){
        super()
    }
    render(){
        console.log(this.props)
        console.log('render from Card List')
        const {monsters} = this.props
        return (
            <div className="card-list">
                {monsters.map((monster, key) => {
                    return <Card className="card" key={key} id={key} name={monster.name}>
                        </Card>
                })}
            </div>
        )
    }
}

export default CardList;
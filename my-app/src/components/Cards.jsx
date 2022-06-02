import React from "react";
import "./css/Cards.css";

class Cards extends React.Component {
    render() {
        return (
            <div >
                <img className="img-fluid" src={this.props.img} alt="image"></img>
                <h3>{this.props.name} {this.props.surname}</h3>
                <p id="prop">{this.props.parag}</p>
            </div>
        );
    }
}

export default Cards;
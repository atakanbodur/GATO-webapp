import React from "react";

class Cards extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.img} alt="image"></img>
                <h3>{this.props.name} {this.props.surname}</h3>
                <p>{this.props.parag}</p>
            </div>
        );
    }
}

export default Cards;
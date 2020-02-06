import React, { Component } from "react";

class Vehicles extends Component {
    constructor(props) {
        super(props)
        this.list_element = React.createRef()
        this.state = {
            items: [
                { text: 'MG Hector' },
                { text: 'Hyundai Venue' },
                { text: 'Toyota Fortuner' },
                { text: 'Hyundai Creta' }

            ]
        }
    }

    doSomething(text, index) {
        alert(text);
    }

    render() {
        return ( // render returns list of <li>
            <ol>
                {this.state.items.map((item, index) => (
                    <li key={item.text} onClick={() => this.doSomething(item.text, index)}>
                        <span>{item.text}</span>
                    </li> // onClick property
                ))}
            </ol>
        );
    }
}

export default Vehicles;
import React, {Component} from 'react';

export default class Header extends Component {
    constructor(){
        super()
        this.state = {
            name: 'Voltron'
        }
    }


    render(){
        console.log(this.state)
        return (
            <header>
                <span>This is {this.state.name}'s header</span>
            </header>
        )
    }
}

// export default Header;
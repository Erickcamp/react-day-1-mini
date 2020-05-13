import React, {Component} from 'react';

export default class Header extends Component {
    constructor(){
        super()
        this.state = {
            name: 'Voltron'
        }
    }


    render(){
        console.log(this.props)
        return (
            <header>
                <span>This is {this.props.favPokemon}'s header</span>
            </header>
        )
    }
}

// export default Header;
import React, {Component} from 'react';
import './App.css';
import Header from './components/Header'
import Functional from './components/Functional'


class App extends Component {
  constructor(){
    super()
    this.state = {
      friends: [],
      picture: '',
      name: '',
      favPokemon: 'Charizard',
      message: 'Guten Tag, WR1!'
    }
    this.updatePicture = this.updatePicture.bind(this)
    this.updateName = this.updateName.bind(this)
    this.addFriend = this.addFriend.bind(this)
  }

  updatePicture(value){
    this.setState({
      picture: value
    })
  }

  updateName(value){
    this.setState({
      name: value
    })
  }

  addFriend(){
    const {picture,name, friends} = this.state
    const newFriend = {picture, name}
    this.setState({
      friends: [...friends, newFriend],
      picture: '',
      name: ''
    })
  }

  render(){
    const friends = this.state.friends.map((friend, index) => {
      return <div key={`friend-index-${index}`}>
        <img alt ={'friend-pic'}src={friend.picture} width='200px'></img>
        <span>{friend.name}</span>
      </div>
    })
    return (
      <div className="App">
        <Header propName='test test test hello wr1' favPokemon={this.state.favPokemon}/>
        <Functional 
        picture = {this.state.picture}
        name = {this.state.name}
        addFriend={this.addFriend}
        updatePicture={this.updatePicture}
        updateName={this.updateName}
        myMessage={this.state.message}/>
          {/* <span>Photo URL</span>
          <input placeholder="add url here...." 
           onChange={ (e) => this.updatePicture(e.target.value) }
           value={this.state.picture}/>
          <span>Friend name</span>
          <input placeholder="add name..." 
           onChange={(e) => this.updateName(e.target.value) }
           value={this.state.name}/>
          <button onClick={() => this.addFriend()}>Add Friend</button> */}
          {friends}
      </div>
    );
  }
}

export default App;

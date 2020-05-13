import React from 'react';

const Functional = (props) => {
    return <div>
        <span>Photo URL</span>
          <input placeholder="add url here...." 
           onChange={ (e) => props.updatePicture(e.target.value) }
           value={props.picture}/>
          <span>Friend name</span>
          <input placeholder="add name..." 
           onChange={(e) => props.updateName(e.target.value) }
           value={props.name}/>
          <button onClick={() => props.addFriend()}>Add Friend</button>
    </div>
}    

export default Functional
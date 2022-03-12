import './App.css';
import React, {useEffect, useState} from 'react'
import {Button, Input, InputLabel} from '@mui/material'
import FormControl from '@mui/material/FormControl';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase/app';
import FlipMove from 'react-flip-move';

import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';


function App() {
  
 const [input, setInput] = useState('');
 const [messages, setMessages] = useState([]);
 const [username, setUsername] = useState('');

  
 useEffect(()=> {
    db.collection('messages')
    .orderBy('timestamp', 'desc')
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc =>({id: doc.id, message: doc.data()})))
    });
  },[]);

 useEffect(()=> {

    setUsername(prompt("please enter your name"))

  },[]);

 const sendMessage = (event) => {
  event.preventDefault()

  db.collection('messages').add({
    message: input,
    username: username,
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  })
    setInput('');
 }
  
  return (
    <div className="App">
      <img id="logo" src="https://www.internetmatters.org/wp-content/uploads/2020/12/FB-messenger-1.png?w=100" alt="" />

      <form className='app_form'>
        <FormControl className='app_formControl'>
          <InputLabel>Enter a message</InputLabel>
          <Input className='app_input' placeholder='Enter a message...' value={input} onChange={event => setInput(event.target.value)}/>
          <IconButton className='app_iconButton' variant='contained' disabled={!input} color="primary" type="submit" onClick={sendMessage}>
            <SendIcon />
          </IconButton>
        </FormControl>

        <Button/>
        
      </form>
        
    <FlipMove>
        {messages.map(({id ,message}) => (
            <Message key={id} username={username} message={message} />
          ))
          }
    </FlipMove>

    </div>
  );
}

export default App;

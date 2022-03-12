import React, {forwardRef} from 'react'
import { Card, CardContent } from '@mui/material';
import Typography from '@mui/material/Typography';
import './Message.css'
import firebase from 'firebase/app';


const Message = forwardRef(({message, username},ref )  => {
    const isUser = username === message.username

  return (
 
    <div ref={ref} className={`message ${isUser && 'message_user'}`}> 

        <Card className={isUser? "message_userCard" : "message_guestCard"}>
            <CardContent>
                <Typography
                    color="black"
                    variant="h5"
                    component="h2"
                    >
                {!isUser && `${message.username  || 'unknow user'}:` } {message.message}
                </Typography>
            </CardContent>
        </Card>

    </div>
         
  )
})

export default Message
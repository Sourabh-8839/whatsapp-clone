
import { Box,styled } from "@mui/material";
import ChatFooter from "./ChatFooter";
import { AccountContext } from "../../../context/AccountProvider";
import { useContext, useEffect, useState,useRef } from "react";
import { getMessages, newMessages } from "../../../service/api";

import Message from "./Message";


const Wrapper =styled(Box)`
    Background-image:url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'});
    Background-size:50%;
`
const Component =styled(Box)`
    height:80vh;
    overflow-y:scroll;


`
const Container =styled(Box)`

    padding:1px 80px;
`

const ChatMessages =({person,conversation})=>{

    const [value,setValue] = useState('');

    const [messages,setMessages] =useState([]);

    

    const [file,setFile] = useState();

    const [image,setImage] = useState('');

    const [incomingMessage,setIncomingMessage] = useState(null);

 

    const {account,socket,setNewMeassageflag,newMessagesflag} = useContext(AccountContext);


    const scrollRef = useRef();

    // console.log(conversation);

    useEffect(()=>{

        socket.current.on('getMessage',data=>{

            setIncomingMessage({
                ...data,
                createdAt:Date.now()
            })
        })
    })
  
    useEffect(()=>{
        //Replacement of Document.getElemenbyId,query
        scrollRef.current?.scrollIntoView({transition: 'smooth'});     
    },[messages]);


    //for coming message
    useEffect(()=>{

        incomingMessage && conversation?.members?.includes(incomingMessage.senderId) &&
        setMessages(prev=> [...prev,incomingMessage]);
    },[incomingMessage,conversation])



    useEffect(()=>{
        const getMessagesDetails = async()=>{


            let data=await getMessages(conversation._id);

            console.log(data);
            setMessages(data);

        };

        conversation._id && getMessagesDetails();

    },[person._id, conversation._id, newMessagesflag]);


  
    // Function for sendig messages
    const sendText =async(e)=>{

      
         const code =e.keyCode|| e.which;

         //13 is code of enter button
        if(code === 13){

            let message={};
            if(!file){

            message={
                senderId:account.sub,
                receiverId:person.sub,
                conversationId:conversation._id,
                type:'text',
                text:value

            }
        }
        else{
            
            message={
                senderId:account.sub,
                receiverId:person.sub,
                conversationId:conversation._id,
                type:'file',
                text:image

        }
    }
            
            //it help us to send message in real time

            socket.current.emit('sendMessage',message);

            await newMessages(message);

            setValue('');
            setFile('');
            setImage('');
            setNewMeassageflag(prev=>!prev);
        }
    }

    return (

       <Wrapper>
            <Component>
            {
                messages && messages.map((message) => (
                    <Container ref={scrollRef}>
                        <Message message={message}/>
                    </Container>
                    
                    ))
            }
            </Component>
            <ChatFooter 
            sendText={sendText}
             setValue={setValue}
              value={value} file={file} 
              setFile={setFile}
               setImage={setImage}/>
       </Wrapper>
    )
}


export default ChatMessages;
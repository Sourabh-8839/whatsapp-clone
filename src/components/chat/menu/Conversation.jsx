
import { Box,Typography, styled } from "@mui/material";
import { AccountContext } from "../../../context/AccountProvider";
import { useContext, useEffect, useState } from "react";
import { getConversation, setConversation } from "../../../service/api";
import { formatDate } from "../../../utils/Common-utils";

const Component = styled(Box)`
display:flex;
align-items:center;
height:10px;
padding : 2rem 0;
cursor:pointer;

&:hover{
    background-color :#F0F2F5;

}
`
   
const Image = styled('img')({

    width:'50px',
    height:'50px',
    borderRadius:'50%',
    padding:'0 15px'

})

const  Container = styled(Box)`
    display:flex;

`;
const TimeStamp = styled(Box)`
    font-Size:13px;
    color:#00000099;
    margin-left:auto;
    margin-right:20px;
`

const TextMessage = styled(Box)`

        font-Size:15px;
        color:#3B4A54
`

const Conversation =({user})=>{

    const {setPerson,account,newMessagesflag}=useContext(AccountContext);

    const[message,setMessage ] = useState({});


    useEffect(()=>{
            const getConversationDetails = async()=>{

                const data=await getConversation({senderId:account.sub, receiverId:user.sub});
                setMessage({text:data?.message,timeStamp:data?.updatedAt});
            }

            getConversationDetails();
    },[newMessagesflag])

    const getuser=async()=>{
        setPerson(user);
        await setConversation({senderId:account.sub,receiverId: user.sub  });
    };
    

    return(
       <Component onClick={()=>getuser()}>
            <Box>
                <Image src={user.picture} alt="dp"/>
            </Box>
            <Box style={{width:'100%'}}>
                <Container>
                    <Typography> {user.name}</Typography>
                    {
                        message?.text && 
                        <TimeStamp>{formatDate(message?.timeStamp)}</TimeStamp>
                    }
                </Container>
                <Box>
                    <TextMessage>
                        {
                            message?.text?.includes('localhost') ? 'media' :message.text
                        }
                    </TextMessage>
                </Box>
            </Box>
       </Component>  
       
       )
}


export default Conversation ;

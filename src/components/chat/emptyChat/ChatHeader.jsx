
import MoreVert from "@mui/icons-material/MoreVert";
import Search from "@mui/icons-material/Search";
import {Box,Typography,styled } from "@mui/material";

import { AccountContext } from "../../../context/AccountProvider";
import { useContext, useState } from "react";


const Component = styled(Box)`
    height:48px;
    padding :2px 16px;
    Background-color :#F0F2F5;
    display:flex;
    align-items:center;
`

const Image =styled('img')({

    height:"40px",
    width:"40px",
    objectFit:"cover",
    borderRadius:"50%",
    
})

const Name =styled(Typography)`
    margin-left:13px !important;
`
const Status =styled(Typography)`
    margin-left:13px !important;
    font-size:12px;
    color:rgb(0,0,0,0.6);

`

const RightContainer =styled(Box)`
    margin-left:auto;

    &>svg {
        padding:10px;
        font-size:24px;
        color:#54656F;
    }
`


const ChatHeader =({person})=>{

    const {activeUsers} = useContext(AccountContext);

    return (
    
        <Component>
            <Image src={person.picture} alt="dp" />
            <Box>
            <Name>{person.name}</Name>
            <Status>{activeUsers?.find(user=> user.sub === person.sub)? 'online':'offline'}</Status>
            </Box>
            <RightContainer>
                <Search/>
                <MoreVert/>

            </RightContainer>
        </Component>
       
        
    )
}

export default ChatHeader ;

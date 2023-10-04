import { useEffect, useState,useContext} from "react";
import { getuser } from "../../../service/api";
import { Box, styled,Divider} from "@mui/material";

import Conversation from "./Conversation";
import { AccountContext } from "../../../context/AccountProvider";

const Conversations =({text})=>{

    const [users ,setUsers] = useState([]);

    const {account,socket,setActiveUsers} = useContext(AccountContext);


    useEffect(()=>{
        const fetchData = async()=>{

           const response= await getuser();
            
           const filterData = response.filter(user=>user.name.toLowerCase().includes(text.toLowerCase()));


         setUsers(filterData);

        }

        fetchData();
    },[text]);


    useEffect(()=>{
       
        socket.current.emit('addUsers',account);

        socket.current.on('getUsers', users=>{
                 setActiveUsers(users);
        })
    },[account]);



   const Component = styled(Box)`
        
        height:81vh;
        overflow:overlay;
   `

   const StyleDivider = styled(Divider)`
        margin:0 0 0 70px;
        background-color :#e9edef;
        opacity:0.6;
        

   `
    return (

        <Component>
            {
                users.map( user => (
                    user.sub!== account.sub &&
                    <>
                    <Conversation user={user}/>
                    <StyleDivider/>
                    </>
                ))
            }
        </Component>
    )
}

export default Conversations ;

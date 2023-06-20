
import { useContext } from "react";
import Login from "./account/LoginDialog";

import { AccountContext } from "../context/AccountProvider";

import {AppBar,Toolbar,styled,Box} from '@mui/material';

import ChatDialog from "./chat/Chatdialog";

const Component = styled(Box)`
    height:100vh;
    background-color:#F0F2F5;


`
const Header = styled(AppBar)`
    height:125px;
    background-color:#00A884;
    box-shadow:none;
`
const LoginHeader = styled(AppBar)`
    height:210px;
    background-color:#00A884;
    box-shadow:none;
`
const Messenger =()=>{

    const {account}=useContext(AccountContext);

    return(
 
    <Component>

        {   account ? 
        <> 
        <Header>
              <Toolbar>

              </Toolbar>
          </Header>  
        <ChatDialog/>
        </> 
        :
           <>
              <LoginHeader>
              <Toolbar>

              </Toolbar>
          </LoginHeader>  
          <Login/>  
          </>
     }
   
    </Component>
    );

}


export default Messenger;
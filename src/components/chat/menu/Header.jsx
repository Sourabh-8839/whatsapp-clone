
import { useContext, useState } from "react";

import { AccountContext } from "../../../context/AccountProvider";
import { Box,styled} from "@mui/material";


import MessageIcon from '@mui/icons-material/Message';
import Diversity1Icon from '@mui/icons-material/Diversity1';

//componets
import HeaderMenu from "./HeaderMenu";
import ProfileInfo from '../Drawer/ProfileInfo';

const Component =styled(Box)`
    height:48px;
    background:#F0F2F5;
    padding:2px 16px;
    display:flex;
    align-items:center;
 

`
const Image =styled('img')({
    height:40,
    width:40,
    borderRadius:'50%',
})

const Options =styled(Box)`
margin-left:auto;

&>*{
    margin:3px;
    padding:6px;
    color:#54656F

}

& >:first-child{
    font-size:22px;
    margin-right:20px;
}

`


const Header=()=>{

    const {account}=useContext(AccountContext);

    const [openDrawer,setOpenDrawer] = useState(false);

    
    const toggleDrawer=()=>{
       
        setOpenDrawer(true);
    }

    return (
       <>
       <Component>
        <Image src={account.picture} alt="dp" srcset="" onClick={toggleDrawer} />
        <Options>
            <Diversity1Icon/>
            <MessageIcon/>
            <HeaderMenu setOpenDrawer={setOpenDrawer}/>
        </Options>
       </Component>
       <ProfileInfo open={openDrawer} setOpen={setOpenDrawer}/>
       </>
    )
}

export default Header;
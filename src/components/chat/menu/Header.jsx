
import { useContext } from "react";

import { AccountContext } from "../../../context/AccountProvider";
import { Box,styled} from "@mui/material";

import MoreVertIcon from '@mui/icons-material/MoreVert';
import MessageIcon from '@mui/icons-material/Message';
import Diversity1Icon from '@mui/icons-material/Diversity1';

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

    return (
       <>
       <Component>
        <Image src={account.picture} alt="" srcset="" />

        <Options>
            <Diversity1Icon/>
            <MessageIcon/>
            <MoreVertIcon/>
        </Options>
       </Component>
       </>
    )
}

export default Header;
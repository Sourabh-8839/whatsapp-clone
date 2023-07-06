import { useState } from 'react';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Menu,MenuItem,styled} from '@mui/material';

const MenuOption = styled(MenuItem)`
    font-size:14px;
    padding:15px 60px 24px 5px;
    color:#4A4A4;
`

const HeaderMenu =({setOpenDrawer})=>{

    const [open,setOpen] = useState(null);

    const handleClose =()=>{
        setOpen(null);
    }

    const handleClick =(e)=>{
            setOpen(e.currentTarget);
    }
    return(
     <>
     <MoreVertIcon onClick={handleClick}/>
     <Menu
        anchorEl={open}
        keepMounted={true}
        open={open}
        onClose={handleClose}
        getContentAnchorE1 ={null}
        anchorOrigin={{
            vertical:'bottom',
            horizontal:'center'
        }}
        transformOrigin={{
            vertical:'top',
            horizontal:'right'
        }}
      >
        <MenuOption onClick={()=>{handleClose(); setOpenDrawer(true);}}>Profile</MenuOption>
     
      </Menu>

     </> 
    )
}

export default HeaderMenu;
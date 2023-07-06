import { Box, Drawer, Typography,styled } from "@mui/material"

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import Profile from "./Profile";


const drawerStyle={
    left:20,
    top:18,
    height:'95%',
    width:'29.5%',
    boxShadow:'none',


}

const Header = styled(Box)`
    display:flex;
    height:15.1%;
    background-color:#008069;
    color:#FFFFFF;
    & > svg,& > p{
        margin-Top:auto;
        padding:1rem;
        font-weight:600;
    }
`;

const Component =styled(Box)`
        background-color:#F0F2F5;
        height:85%
`

const ProfileInfo=({open,setOpen})=>{

    const handleClose=()=>{
        setOpen(false);
    };

    // console.log(open);
    // console.log(setOpen);

    return(
        <Drawer
        open={open}
        onClose={handleClose}
        PaperProps={{sx:drawerStyle}}
        style={{zIndex:1500}}
        hideBackdrop={true}
        >
        <Header>
            <ArrowBackIcon onClick={()=>{setOpen(false)}}/>
            <Typography>
                Profile
            </Typography>
        </Header>
        <Component>
            <Profile/>  
        </Component>
        </Drawer>
        
    )
}

export default ProfileInfo;


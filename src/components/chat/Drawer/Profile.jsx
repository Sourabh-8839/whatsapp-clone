
import { useContext } from "react"

import { Box,Typography,styled } from "@mui/material"

import { AccountContext } from "../../../context/AccountProvider";

const ImageContainer = styled(Box)`

    height:42%;
    display:flex;
    justify-content:center;


`

const Image =styled('img')({

    height:"200px",
    width:"200px",
    borderRadius:"50%",
    margin:'25px',

})

const BoxWrapper =styled(Box)`

    background:#FFFFFF;
    padding:12px 30px 2px;
    box-shadow:0px 1px 2px rgba(0,0,0,0.08);

    & :first-child{
        font-size:13px;
        color:#008081;
        font-weight:200;

    }
    & :last-child{
        margin:14px 0px;
        color:#4a4a4a

    }

`
const DescriptionBox = styled(Box)`
   
    margin: 12px 30px 20px; 

    & > p{
        font-size:14px;
        color:#667790
    }
`


const Profile =()=>{

    const{account}=useContext(AccountContext);

    return(
        <>
        <ImageContainer>
            <Image src={account.picture} alt="dp"/>
        </ImageContainer>
        <BoxWrapper>
            <Typography>Your Name</Typography>
            <Typography>{account.name}</Typography>
        </BoxWrapper>
        <DescriptionBox>
            <Typography>This is not your username or pin. This name will be visible to your WhatsApp contacts.</Typography>
        </DescriptionBox>
        <BoxWrapper>
            <Typography>
                About
            </Typography>
            <Typography>
                Eat! Sleep! Repeat!
            </Typography>
        </BoxWrapper>
        </>
    )
}


export default Profile
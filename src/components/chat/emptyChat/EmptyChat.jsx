import { Box, Typography,Divider } from "@mui/material";
import {emptyChatImage} from "../../../Constants/Constants"
import styled from "@emotion/styled";

const Component = styled(Box)`

    height:87vh;
    background:#F0F2F5;
    padding :30px 0px;
    text-align:center;
 
`
const Container = styled(Box)`

    padding:  0px 20px;
`
const Image =styled('img')({

    width:"36rem",
    marginTop:100
});

const Title = styled(Typography)`

        font-size:2rem;
        margin:2rem 0 1.2rem ;
        font-family:inherit;
        font-weight:300;
        color:#41525d;

`

const SubTitle = styled(Typography)`
    font-family:inherit;
    font-size:14px;
    color:#667781;
    font-weight:400;

`
const StyleDivider = styled(Divider)`
        margin:40px 0px;
        opacity:0.4;

`

const EmptyChat=()=>{

    return (
       <Component>
        <Container>
            <Image src={emptyChatImage} alt="" srcset="" />
            <Title>
            WhatsApp Web
            </Title>
            <SubTitle>Send and receive messages without keeping your phone online.<br/>
            Use WhatsApp on up to 4 linked devices and 1 phone at the same time.
            </SubTitle>
            
            
            <StyleDivider/>
        </Container>
       </Component>
    );

};

export default EmptyChat;

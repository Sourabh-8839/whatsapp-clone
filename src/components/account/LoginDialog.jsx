
import { useContext } from 'react';

import {Dialog,Box,styled,Typography,List,ListItem} from '@mui/material';

import {GoogleLogin} from '@react-oauth/google';

import { qrCodeImage } from '../../Constants/Constants';

import { AccountContext } from '../../context/AccountProvider';

import jwt_decode from "jwt-decode";

const dialogStyle ={
  height:'96%',
  maxHeight:'100%',
  marginTop:'12%',
  width:'60%',
  maxWidth:'100%',
  boxShadow:'none',
  overFlow:'hidden'
}

const Container = styled(Box)`
  display:flex;
`

const Component = styled(Box)`
  padding:4rem 0 2rem 3rem ;
`
const QrCode = styled('img')({
  height:'15rem',
  width:'15rem',
  margin:'3rem 0rem 0 8rem'
})

const Title =styled(Typography)`
    font-size:30px;
    color:#475262;
    font-weight:300;
    font-family:inherit;
    margin-bottom:20px;

`
const StyledList =styled(List)`
    & > li{
      padding:0;
      margin-Top:15px;
      color:#414A54;
      font-size:18px;
      line-height:30px;
    }
`

const Login = () => {

  const {setAccount} = useContext(AccountContext);

  const onLoginSuccess=(res)=>{
      const decode = jwt_decode(res.credential);

      setAccount(decode);
      
  }

  const onLoginError =(err)=>{
      console.log(err);
  }

  return (
    <>
      <Dialog 
        open={true}
        PaperProps={{sx:dialogStyle}}
        hideBackdrop={true}
      >
          <Container>
            <Component>
                <Title>Use WhatsApp on your computer</Title>
                <StyledList>
                  <ListItem>1. Open WhatsApp on your phone</ListItem>
                  <ListItem>2. Tap Menu or Settings and select Linked Device  </ListItem>
                  <ListItem>3. Tap on Link a device</ListItem>
                  <ListItem>4. Point your phone to this screen to capture the QR code</ListItem>
                </StyledList>
                
            </Component>
            <Box style={{position:'relative'}}>
                <QrCode src={qrCodeImage} alt="Qr Code" />
                <Box style={{position:'absolute',top:'50%',transform:'translate(50%)'}}>
                <GoogleLogin 
                  onSuccess={onLoginSuccess}
                  onError={onLoginError}
                />
                </Box>
                
            </Box>
          </Container>
      </Dialog>
    </>
  )
}

export default Login;

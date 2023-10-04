

import {Box,Typography,styled} from '@mui/material'
import { formatDate,downloadMedia } from '../../../utils/Common-utils';
import { useContext } from 'react';
import { AccountContext } from '../../../context/AccountProvider';
import GetAppIcon from '@mui/icons-material/GetApp';

import { iconPDF } from '../../../Constants/Constants';

const Own = styled(Box)`
    background-color:#D9FDD3;
    max-width:60%;
    margin-left:auto;
    width:fit-content;
    padding:5px;
    display:flex;
    border-radius:10px;
    margin-top:2px;
    word-break:break-word;
`


const Wrapper = styled(Box)`
    background-color:#FFFFFF;
    max-width:60%;
    width:fit-content;
    padding:5px;
    display:flex;
    border-radius:10px;
    margin-top:2px;
    word-break:break-word;
`

const Text = styled(Typography)`

    font-size:14px;
    padding:0 25px 0 5px;

`;

const Time =styled(Typography)`
     font-size:10px;
    color:#919191;
    margin-top:auto;
    width:fix-content;
    word-break:keep-all;

`;

const TextMessages = ({message})=>{

    return(
        <>
        <Text>{message.text}</Text>
            <Time>{formatDate(message.createdAt)}</Time>
        </>
    )

}

const ImageText =({message})=>{

    return(
        <Box style ={{position: 'relative'}}>
             {message?.text?.includes('.pdf') ?
                <Box style={{display:'flex'}}>

                    <img src={iconPDF} alt='pdf' style={{width:60}}/>
                    <Typography style={{fontSize:14}}>{message.text.split('/').pop()}</Typography>

                </Box>
                 :
                 <img style ={{width:'200px', height:'100%', objectFit:'contain'}} src={message.text} alt={message.text}/> 
             }
             <Time style={{position:'absolute', bottom:0, right:'4px'}}>
                <GetAppIcon 
                 onClick={(e)=> downloadMedia(e,message.text)}
                style={{borderRadius:'50%' ,marginRight:'10px', border:'1px solid grey', cursor:'pointer'}}
                    fontSize='small'
                />

                 {formatDate(message.createdAt)}</Time>
        </Box>
       
    )
}

const Message =({message})=>{

    const {account} = useContext(AccountContext);

    return(
<>  
        {account.sub===message.senderId?
        <Own>

            {
                message.type==='file'? <ImageText message={message}/> :<TextMessages message={message}/>
            }
            
        </Own>
    :

    <Wrapper>
     {
                message.type==='file'? <ImageText message={message}/> :<TextMessages message={message}/>
            }
    </Wrapper>
        }
</>
    
        
    )
};


export default Message ;
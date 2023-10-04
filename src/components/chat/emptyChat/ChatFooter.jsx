
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import MicIcon from '@mui/icons-material/Mic';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { Box, InputBase,styled } from '@mui/material';
import { useEffect } from 'react';
import { uploadFile } from '../../../service/api';



const Container = styled(Box)`
    height:50px;
    background:#ededed;
    display:flex;
    align-items:center;
    overflow: hidden;
    
    padding:0 15px;
    & >*{
        margin:5px;
        color:#919191
    }
`
const Search = styled(Box)`
    background-color:#FFFFFF;
    border-radius:5px;
    width : 88%;
    
`;

const InputField =styled(InputBase)`
    width:100%;
    padding:20px;
    height:20px;
    padding-left:25px;
`

const ClipIcon = styled(AttachFileIcon)`
    transform : rotate(40deg);
    cursor:pointer;
`

const ChatFooter =({sendText,setValue,value,file,setFile,setImage})=>{

    useEffect(()=>{

        const getImage = async()=>{

            if(file){
                const data =new FormData();

                data.append('name',file.name);
                data.append('file',file);

                const response = await uploadFile(data);
                
                setImage(response.data);
            }
        }
        getImage();
    },[file])

    const onFileChange=(e)=>{
        console.log(e.target.files);
        setFile(e.target.files[0]);
        setValue(e.target.files[0].name);


    }
     return (

        <Container>
   
        
        <EmojiEmotionsOutlinedIcon/> 
        <label htmlFor='fileInput'>
            <ClipIcon />
        </label>
        
        <input 
            type='file'
            id='fileInput'
            style={{display:'none'}}
            onChange={(e)=>onFileChange(e)}

        />
        <Search>
            <InputField placeholder='Type a message'
                onChange={(e)=>{setValue(e.target.value)}}
                onKeyUp={(e)=>{sendText(e)}}
                value={value}
            />
        </Search>
        <MicIcon/>

        </Container>
             
    
    )
}

export default ChatFooter;

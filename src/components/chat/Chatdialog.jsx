
import { Dialog ,Box,styled} from "@mui/material";

import Menu from "./menu/Menu";

import EmptyChat from "./emptyChat/EmptyChat";

const dialogStyle = {
    height:'95%',
    width:'100%',
    maxHeight:'100%',
    maxWidth:'100%',
    margin:'25px',
    boxShadow:'none',
    borderRadius:'0',
    
};

const Container =styled(Box)`
  display:flex;
  over-flow:hidden;
  
`;

const LeftComponent =styled(Box)`
  width:28rem;
  min-width:20rem;
  

`;

const RightComponent =styled(Box)`
  width:70%;
  min-widht:45rem;
  height:100%;
  border-left:2px solid #E9EDEF;

`


const ChatDialog=()=>{
    return(
      <Dialog
      open={true}
      PaperProps={{sx:dialogStyle}}
      hideBackdrop={true}
      maxWidth={'md'}
      >
        <Container>
          <LeftComponent>
              <Menu/>
          </LeftComponent>

          <RightComponent>
            <EmptyChat/>
          </RightComponent>

        </Container>
        
      </Dialog>
    )
};

export default ChatDialog ;

import { Box, styled,InputBase} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';


const Component = styled(Box)`
    margin:3px;
    padding:6px;
    display:flex;
    align-items:center;
    
    border-bottom:2px solid #F0F2F5;
`
const Wrapper = styled(Box)`
    display:flex;
    align-items:center;
    background:#F0F2F5;
    width:100%;
    border-radius:5px;

    
`;

const Icon =styled(SearchIcon)`
    position:relative;
    top:2px;
    margin:5px;
    padding-left:12px;
    color:#54656F
`
const InputField = styled(InputBase)`
    width:100%;
    padding-left:25px;
    

`
const Search = ({setText}) => {

    return (
        <>
            <Component>
                <Wrapper>
                    <Box>
                      <Icon
                      fontSize="small"
                      />
                    </Box>
                    <InputField
                    placeholder="Search or start new chat "
                    onChange={(e)=>setText(e.target.value)}               
                        />
                </Wrapper>
            </Component>
        </>
    )
};

export default Search;
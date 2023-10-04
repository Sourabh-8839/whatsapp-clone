import axios from 'axios';
 
const axiosInstance = axios.create({
    baseURL:'http://localhost:8000'
})

export const addUser = async(data)=>{

    try {

        await axiosInstance.post('/add',data) ;
        
    } catch (error) {
        
    }


}

export const getuser = async()=>{
            try {
              const users = await axiosInstance.get('/users');
              return users.data ;

            } catch (error) {
                
                console.log('Error while Calling getUserApi ',error.message);
            }   
}


export const setConversation = async(data) =>{

    try {

          await axiosInstance.post('/conversation/add',data) ;
         
        
    } catch (error) {
        console.log('Error while Calling setConversation Api ',error.message);
    }
};


export const getConversation=async(data)=>{

    try {
        
        const response = await axiosInstance.post('/conversation/get',data);

        return response.data;
        
    } catch (error) {
        console.log('Error while Calling getConversation Api ',error.message);
    }
};


//New messages
export const newMessages =async(data) =>{

    try {
         await axiosInstance.post('/messages/add',data);



    } catch (error) {
        console.log('Error while Calling newMessages Api ',error.message);
    }
}

export const getMessages = async(id) =>{

    try {
    
        let response=await axiosInstance.get(`/messages/get/${id}`);

        return response.data;


    } catch (error) {
        
        console.log('Error while Calling getMessages Api',error.message);
    }
};


export const uploadFile = async(data)=>{

    try {

        return await axiosInstance.post('/file/upload',data);

        
    } catch (error) {
     
        console.log('Error while Calling uploadFile Api',error.message);
    }
}
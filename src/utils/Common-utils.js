


export const formatDate =(date)=>{

    const Hours = new Date(date).getHours();

    const minutes = new Date(date).getMinutes();


    return `${Hours<10 ? '0'+ Hours : Hours} : ${minutes< 10 ? '0'+minutes :minutes} `;
    


};


export const downloadMedia =(e,originalImage)=>{

        e.preventDefault();

        try {
             
            fetch(originalImage)
            .then(res=>res.blob())
            .then(blob=>{
                const url =window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.style.display ='none';
                a.href = url;

                const nameSplit = originalImage.split('/').pop();

                a.download = ""+nameSplit+"";


                document.body.append(a);

                a.click();
                window.URL.revokeObjectURL(url);

            }).catch(error=>console.log("Error while downloading",error.message));

        } catch (error) {
            console.log("Error while downloading",error.message)

        }
}
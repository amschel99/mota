
import { BlobServiceClient } from "@azure/storage-blob"



const blobServiceClient= new BlobServiceClient("https://motaautombiles.blob.core.windows.net/?sv=2021-06-08&ss=bfqt&srt=sco&sp=rwdlacupiytfx&se=2023-01-21T04:00:56Z&st=2023-01-20T20:00:56Z&spr=https,http&sig=7uQNCY1Urfr4v3rhPps3GFyyBSLALJneCQFLhNk4avs%3D")
const containerClient= blobServiceClient.getContainerClient("cars")
let blobUrl;
let blockBlobClient;
export const  uploadBlob=  async (files)=>{
  try{

        const promises = [];
        let urls=[]
        for (const file of files) {
            const blockBlobClient = containerClient.getBlockBlobClient(file.name);
                blobUrl= blockBlobClient.url;// 
            promises.push(blockBlobClient.uploadBrowserData(file));
             urls.push(blobUrl)
        }
        await Promise.all(promises);
        return urls;
        
  }
  catch(e){
console.log(e)
  }
    


}
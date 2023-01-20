
import { BlobServiceClient } from "@azure/storage-blob"



const blobServiceClient= new BlobServiceClient("https://motaautombiles.blob.core.windows.net/cars?sp=r&st=2023-01-19T11:41:12Z&se=2023-01-19T19:41:12Z&sv=2021-06-08&sr=c&sig=cGWdyw82hfUA3Od%2Fa3%2FFxzM08hMzOniiITdzHEdwmZI%3D")
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
console.log(error)
  }
    


}
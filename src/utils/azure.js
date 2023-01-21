
import { BlobServiceClient, StorageSharedKeyCredential} from "@azure/storage-blob"
import {DefaultAzureCredential} from '@azure/identity'


const accountName="motaautombiles"



const blobServiceClient = new BlobServiceClient(
  `https://${accountName}.blob.core.windows.net`,
  new DefaultAzureCredential()
);

let blobUrl;
let blockBlobClient;
export const  uploadBlob=  async (files)=>{
  try{
    const containerClient=  blobServiceClient.getContainerClient("cars")
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
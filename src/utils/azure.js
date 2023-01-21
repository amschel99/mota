
import { BlobServiceClient } from "@azure/storage-blob"



const blobServiceClient= new BlobServiceClient("https://motaautombiles.blob.core.windows.net/?sv=2021-06-08&ss=bfqt&srt=sco&sp=rwdlacupiytfx&se=2023-01-21T15:56:48Z&st=2023-01-21T07:56:48Z&spr=https,http&sig=HRAkAHxWtU0EMsbT080sUUmP0nmQ044zVyEDcwY1Mkc%3D")
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
        alert(urls)
        return urls;
        
  }
  catch(e){
console.log(e)
  }
    


}
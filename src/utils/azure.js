
import { BlobServiceClient, StorageSharedKeyCredential} from "@azure/storage-blob"


const accountKey="9mvfsI+x7fmnEEv9LDjwPxZkd4erWnTKwWvKkoPjtemXSXCCINSLn6Eb1PYowFyErSCukhDqkbC/+AStwkwQsw=="
const accountName="motaautombiles"
const sharedKeyCredential = new StorageSharedKeyCredential(accountName, accountKey);

const blobServiceClient = new BlobServiceClient(
  `https://${accountName}.blob.core.windows.net`,
  sharedKeyCredential
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
            promises.push(blockBlobClient.upload(file,file.length));
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
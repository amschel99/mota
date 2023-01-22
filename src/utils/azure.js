import "regenerator-runtime/runtime"// for features built only for node js to work
import { BlobServiceClient, StorageSharedKeyCredential} from "@azure/storage-blob"



const accountName="motaautombiles"
const accountKey='9mvfsI+x7fmnEEv9LDjwPxZkd4erWnTKwWvKkoPjtemXSXCCINSLn6Eb1PYowFyErSCukhDqkbC/+AStwkwQsw=='
if (!accountName) throw Error('Azure Storage accountName not found');
if (!accountKey) throw Error('Azure Storage accountKey not found')
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
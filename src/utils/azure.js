
import { BlobServiceClient, StorageSharedKeyCredential} from "@azure/storage-blob"


//const accountKey="9mvfsI+x7fmnEEv9LDjwPxZkd4erWnTKwWvKkoPjtemXSXCCINSLn6Eb1PYowFyErSCukhDqkbC/+AStwkwQsw=="
//const accountName="motaautombiles"
//const sharedKeyCredential = new StorageSharedKeyCredential(accountName, accountKey);
const sasToken="https://motaautombiles.blob.core.windows.net/?sv=2021-06-08&ss=bfqt&srt=sco&sp=rwdlacupiytfx&se=2023-01-21T19:13:54Z&st=2023-01-21T11:13:54Z&spr=https,http&sig=Hj15E3l7QqDoD0Nnk7iXOWrFj3FeQP3bXhvbp8bUXF4%3D"
const blobServiceClient = new BlobServiceClient(
 `${sasToken}`
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
        alert(urls)
        return urls;
        
  }
  catch(e){
console.log(e)
  }
    


}
import {disableResponseDecompressionPolicy} from "@azure/core-http"
import {ClientRequest} from "http"
import "regenerator-runtime/runtime"
import { BlobServiceClient, BlobServiceClient } from "@azure/storage-blob"
import { io } from "socket.io-client"
import { send } from "process"
import dotenv from "dotenv"
dotenv.config()

const blobServiceClient= new BlobServiceClient("https://motaautombiles.blob.core.windows.net/cars?sp=r&st=2023-01-19T11:41:12Z&se=2023-01-19T19:41:12Z&sv=2021-06-08&sr=c&sig=cGWdyw82hfUA3Od%2Fa3%2FFxzM08hMzOniiITdzHEdwmZI%3D")
const containerClient= blobServiceClient.getContainerClient("cars")
let blobUrl;
let blockBlobClient;
export const  uploadBlob=  (files)=>{
    const urls=[]
  //passing the file to the API
  files.map((file)=>{
    blockBlobClient= containerClient.getBlockBlobClient(file.name)
    blobUrl= blockBlobClient.url;// 
    console.log(blobUrl)
  
 
       blockBlobClient.uploadBrowserData(file)
    
    
  // here, what we should be pushing is the blob data
    urls.push(blobUrl)
    
  })

 return urls;

}
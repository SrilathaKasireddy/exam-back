import express from 'express';
import { MongoClient } from 'mongodb';
import dotenv from "dotenv";
import { contactsRouter } from "./routes/contacts.js";
import cors from "cors"
dotenv.config();
const app = express()
app.use(cors());
const PORT=process.env.PORT;
 app.use(express.json())
const MONGO_URL=process.env.MONGO_URL;
 async function createConnection(){
  const client =new MongoClient(MONGO_URL);
   await client.connect();
   
   return client;
}
 export const client =await createConnection();



app.get('/', function (request, response) {
  response.send("Hello world 🌍🎉🎉🎉")
})



app.use("/contacts",contactsRouter)


app.listen(PORT,()=>console.log(`App started in ${PORT}`));
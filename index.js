import { MongoClient } from 'mongodb';
import dotenv from "dotenv";
import { contactsRouter } from "./routes/contacts.js";
import cors from "cors"
import express  from 'express'
import  csrf  from 'csurf'
import  cookieParser  from 'cookie-parser'
import  bodyParser  from 'body-parser'
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


var csrfProtection = csrf({ cookie: true });
var parseForm = bodyParser.urlencoded({ extended: false });


app.set('view engine','ejs')

app.use(cookieParser());

app.get('/get', csrfProtection, function (req, res) {

res.send('contacts', { csrfToken: req.csrfToken() });
});

app.post('/', parseForm,
	csrfProtection, function (req, res) {
res.send('Successfully Validated!!');
});



app.listen(PORT,()=>console.log(`App started in ${PORT}`));


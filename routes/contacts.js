import express from "express";
import {createNewContacts ,getAllContacts} from "./helper.js";
const router =express.Router();
router.post('/',async function (req, res) {
    const data=req.body;
    console.log(data)
    const result=await createNewContacts(data);
      res.send(result);
      console.log(result)
    })
   
    router.get('/get', async function (request, response) {
     const contacts= await getAllContacts(request);
     response.send(contacts);
     })
   
    export const contactsRouter=router;
  
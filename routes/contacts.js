import express from "express";
import {createNewContacts ,getAllContacts} from "./helper.js";
import {csrfProtection} from "../routes/users.js"
const router =express.Router();
router.post('/',csrfProtection,async function (req, res) {
  
  res.send({csrftoken: req.csrfToken() })  
  const data=req.body;

    console.log(data)
    const result=await createNewContacts(data);
      res.send(result);
      console.log(result)
    })
    
    

    router.get('/get', csrfProtection,async function (request, response) {
      res.send({csrftoken: req.csrfToken() })
     const contacts= await getAllContacts(request);
     response.send(contacts);
     
     })
   
    export const contactsRouter=router;

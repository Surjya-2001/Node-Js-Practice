import  express  from "express";
import URL from "../model/model.js";
const router = express.Router();


router.get('/',async(req,res)=>{
   const allUrl =  await URL.find({});
    return res.render("home",{
        urls:allUrl
    });
})


export default router;
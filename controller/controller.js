import {nanoid} from "nanoid";
import URL from "../model/model.js";


const generateNewShortUrl = async(req,res)=>{
    const body = req.body;
    // console.log(body.url)
    if(!body.url){
        return res.status(400).json({error:'url is required'});
    }else{
        const shortId = nanoid(8);
            await URL.create({
                shortId : shortId,
                redirectUrl: body.url,
                visitHistory:[],
        });
        return res.render('home',{
            id: shortId
        })
        // return res.json({id: shortId});
    }
   


// return res.json({msg:"done"})
};

const updareUrlandTime = async(req,res)=>{
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
    {
        shortId
    },
    {
        $push:{ 
        visitHistory : {timestamp:Date.now()}
        },
    }
);
   res.redirect(entry.redirectUrl)
};

const clickAnalytice = async(req,res)=>{
    const shortId = req.params.shortId;
    const result  = await URL.findOne({shortId});
    return res.json({
        totaiClicks: result.visitHistory.length,
        analytics: result.visitHistory
    });
};

// const getAllUrl=async(req,res)=>{
//      const allUrl = await URL.find({});
//      return res.render("home",{
//         urls:allUrl,
//      });
// }

export {
    generateNewShortUrl,
    updareUrlandTime,
    clickAnalytice,
    // getAllUrl
 
}
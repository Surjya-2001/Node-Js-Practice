import express from "express";
import urlRoute from './router/urlRouter.js';
import connectdb from "./connectdb.js";
import path from 'path';
import staticRoute from './router/staticRouter.js'

const app = express();
app.set('view engine','ejs');
app.set("views",path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connectdb("mongodb+srv://sachidas633:mongo11211@cluster0.zj3jhot.mongodb.net/urlShortner")
.then(()=>console.log('db connected sucesfuly'))
.catch((err)=>('connection failed',err));
 //routes
app.use('/url',urlRoute); 
app.use('/',staticRoute);


app.listen(8080,()=>console.log("server running on port 8080"));
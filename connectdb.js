import mongoose from "mongoose";



const connectdb = async(url)=>{
return mongoose.connect(url)


};

export default connectdb;
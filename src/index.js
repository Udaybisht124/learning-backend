// require('dotenv').config({path: './env'})
import dotenv from 'dotenv';
import mongoose from "mongoose";

import connectDB from "./db/index.js";
dotenv.config({
    path:'./env'
})


connectDB()







































// import dotenv from "dotenv";
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js";
// import express from "express";
// dotenv.config({
//     path: './.env'
// })
























































// const app = express();
// ( async () => {
//     try {
//        const MongoDatabaseInstance =  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
  
//        app.on("errror", (error) => {
//             console.log("ERRR: ", error);
//             throw error
//         })

//         app.listen(process.env.PORT, () => {
//             console.log(`App is listening on port ${process.env.PORT}`);
//         })

//     } catch (error) {
//         console.error("ERROR: ", error)
       
//     }
// })()
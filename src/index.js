import dotenv from "dotenv";
dotenv.config();
import connectDB from "./db/index.js"


connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`server is running at port :${process.env.PORT}`)
    })
})
.catch((error)=>{
    console.log("Db connection error ",error)

})





// first approach 
// import express from "express"
// import { configDotenv } from "dotenv"

// const app=express()


// (async()=>{
//     try{
//        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//        app.on("error",(error)=>{
//         console.log("ERROR",error)
//         throw err
//        })
//        app.listen(process.env.PORT,()=>{
//         console.log(`app is running on port:${process.env.PORT}`)
//        })
//     }catch(error){
//         console.error("ERROR:",error)
//         throw err
//     }
// })()
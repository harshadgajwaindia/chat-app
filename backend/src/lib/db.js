import mongoose from "mongoose"

export const connectDB = async () =>{
    try{
        console.log('mongodb connected:', process.env.MONGODB_URI)
        const con = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`mongo db connected: ${con.connection.host}`)
    }catch(error){
        console.log("mongodb connection error : ", error)
    }
}
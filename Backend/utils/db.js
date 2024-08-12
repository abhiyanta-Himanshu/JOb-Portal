import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
            console.log("mongodb connected succesfully")
    } catch (error) {
        console.log(error)
    }
}


//another method
// await mongoose.connect(process.env.MONGODB_URI , {

// }).then( () => {
//     console.log("mongodb connected succesfully")
// } )
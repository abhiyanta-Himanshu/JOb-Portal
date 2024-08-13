import express, { urlencoded } from "express"
import cookieParser from "cookie-parser";
import cors from "cors"
import dotenv from "dotenv"
dotenv.config({})
import { connectDB } from "./utils/db.js";
import userRoute from "./routes/user.route.js"
import companyRoute from "./routes/company.route.js"

const app = express();

// app.get('/' , (req,res) => {
//     return res.status(200).json({
//         message : "This is from backend",
//         success : true
//     })
// })

app.use(express.json());
app.use(urlencoded({extended : true}));
app.use(cookieParser());

const corsOptions = {
    origin : "https//localhost:5173",
    credentials : true
}
app.use(cors(corsOptions))


app.use("/api/v1/user/" , userRoute)
app.use("/api/v1/company", companyRoute)

const PORT = process.env.PORT || 3030

app.listen(PORT , () => {
    connectDB();
    console.log(`Server running at port ${PORT}`)
})

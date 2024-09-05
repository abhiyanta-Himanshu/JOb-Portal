import express, { urlencoded } from "express"
import cookieParser from "cookie-parser";
import cors from "cors"
import dotenv from "dotenv"
dotenv.config({})
import { connectDB } from "./utils/db.js";
import userRoute from "./routes/user.route.js"
import companyRoute from "./routes/company.route.js"
import jobRoute from "./routes/job.route.js"
import applicationRoute from "./routes/application.route.js"

import cloudinary from "./utils/cloudinary.js"
// console.log("Cloud Name:", process.env.CLOUDINARY_CLOUD_NAME);
// console.log("API Key:", process.env.CLOUDINARY_API_KEY);
// console.log("API Secret:", process.env.CLOUDINARY_API_SECRET);

const app = express();

app.use(express.json());
app.use(urlencoded({extended : true}));
app.use(cookieParser());

const corsOptions = {
    origin : "http://localhost:5173",
    credentials : true
}
app.use(cors(corsOptions))


app.use("/api/v1/user/" , userRoute)
app.use("/api/v1/company/", companyRoute)
app.use("/api/v1/job/", jobRoute)
app.use("/api/v1/application/",applicationRoute)

const PORT = process.env.PORT || 3030

app.listen(PORT , () => {
    connectDB();
    console.log(`Server running at port ${PORT}`)
})

import express, { urlencoded } from "express"
import cookieParser from "cookie-parser";
import cors from "cors"

const app = express();

app.get('/' , (req,res) => {
    return res.status(200).json({
        message : "This is from backend",
        success : true
    })
})

app.use(express.json());
app.use(urlencoded({extended : true}));
app.use(cookieParser());

const corsOptions = {
    origin : "https//localhost:5173",
    credentials : true
}
app.use(cors(corsOptions))

const PORT = 3030

app.listen(PORT , () => {
    console.log(`Server running at port ${PORT}`)
})
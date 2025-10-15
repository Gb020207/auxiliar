import "dotenv/config";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import router from "./src/routes/index.routes.js";
import {initDB} from "./src/config/db.js";

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json);
app.use(cors());
app.use(cookieParser());
app.use(express.static("./public/"));
app
app.use(router);



app.get("/", (req, res)=>{
    console.log("por ahora nada")// se enviara por res.send el archivo estatico base cuando se entra al servidor (index.html)
})

app.listen(PORT, async  ()=>{
    await initDB();
    console.log(`servidor escuchando en http://localhost:${PORT}`);
});
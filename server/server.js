import express, { application } from "express";
import dotenv from "dotenv";
import connectDatabase from "./config/MongoDB.js"
import ImportData from "../server/DataImport.js";

dotenv.config();
connectDatabase();
const app = express();

app.use("/api/import", ImportData);

app.get("/",(req, res)=>{
    res.send("Api is running....");
});
const PORT =process.env.PORT || 1000;
app.listen(PORT,console.log(`server is running.... ${PORT}`));


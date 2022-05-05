import express from "express";
import dotenv from "dotenv";
import connectDatabase from "./config/MongoDB.js"
import ImportData from "../server/DataImport.js";
import productRouter from  "./Routers/ProductRouters.js"
import {errorHandler,notFound} from "./Middleware/Errors.js"


dotenv.config();
connectDatabase();
const app = express();

app.use("/api/import", ImportData);
app.use("/api/products", productRouter);

//Error Handler
app.use(notFound);
app.use(errorHandler);


const PORT =process.env.PORT || 1000;
app.listen(PORT,console.log(`server is running.... ${PORT}`));


import express from "express";
import dotenv from "dotenv";
import DbConnect from "./database/DbConnect.js";
import router from "./route/route.js";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
dotenv.config();

//parser

app.use(bodyParser.json({extended : "true"}));

app.use(bodyParser.urlencoded({extended : "true"}))

app.use(express.json());

app.use(cors());

const PORT = process.env.PORT || 6000;

DbConnect();

app.use("/",router);

app.listen(PORT, () => {console.log(`Server Connect to ${PORT}`)})


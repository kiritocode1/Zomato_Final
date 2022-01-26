import express from "express";
import AWS from "aws-sdk";
import multer from "multer";
import { ImageModel } from "../../database/allModels";

const Router = express.Router();
//! configure multer
const storage = multer.memoryStorage();
const upload = multer({ storage });

//!



/*
Route        /
Des          uploading the image  to S3  and then saving the file to mongo DB
Params       none
Access       Public
Method       GET
*/

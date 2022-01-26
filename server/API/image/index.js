import express from "express";
import AWS from "aws-sdk";
import multer from "multer";
import { ImageModel } from "../../database/allModels";
import { s3Upload } from "../../utils/AWS/s3";


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
Method       post
*/
Router.post("/", upload.single("file"), async (req, res) => {
    try {
        const file = req.file;
        const bucketOptions = {
            Bucket: "zomatomaster123467",
            Key: file.originalname,
            Body: file.buffer,
            ContentType: file.mimetype,
            ACL: "public-read"
        };
        
        const uploadImage = await s3Upload(bucketOptions);
        return res.status(400).json({ uploadImage });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default Router;
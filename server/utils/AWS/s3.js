import AWS from "aws-sdk";

const s3Bucket = new AWS.S3({
    accessKeyId:process.env.AWS_S3_accessKeyId,//!put is from .env , which should be in the package.json file , in same hierarchy
    secretAccessKey: process.env.AWS_S3_secretAccessKey,
    region:"ap-south-1"
});

export const s3Upload = (options) => {
    return new Promise((resolve, reject) => s3Bucket.upload(options, (error, data) => {
        if (error) return reject(error);
        return resolve(data);
    })
    );
};
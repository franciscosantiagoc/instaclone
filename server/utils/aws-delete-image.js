require("dotenv").config({ path: ".env" });
const AWS = require("aws-sdk");

const ID = process.env.AWS_ID;
const SECRET = process.env.AWS_SECRET;
const BUCKET_NAME = process.env.AWS_BUCKET_NAME;

const s3 = new AWS.S3({
  accessKeyId: ID,
  secretAccessKey: SECRET,
});

async function awsDeleteImage(filePath) {
  if(filePath.length === 0) return;
  const params = {
    Bucket: BUCKET_NAME,
    Key: `${filePath}`
  }

  try {
    await s3.deleteObject(params).promise();
    console.log("File avatar has been deleted successfully");
    return; //await awsDeleteImage(filePath);
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
}

module.exports = awsDeleteImage;
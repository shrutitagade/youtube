import { v2 as cloudinary } from "cloudinary";
import fs from "fs";


const uploadOnCloudinary = async (localFilePath) => {
    try {
        cloudinary.config({
            cloud_name: process.env.CLOUDINARY_NAME,
            api_key: process.env.CLOUDINARY_KEY,
            api_secret: process.env.CLOUDINARY_SECRET // Click 'View Credentials' below to copy your API secret
        });

        if (!localFilePath) return null
        //upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto",
            upload_preset: "image_preset", // Replace with your actual upload preset name
            folder: "images" // Replace with the desired folder name
        })
        fs.unlinkSync(localFilePath)
        return response;

    } catch (error) {
        // remove the locally saved temporary file as the upload operation got failed
        fs.unlinkSync(localFilePath)
        return null;
    }
}
export { uploadOnCloudinary };

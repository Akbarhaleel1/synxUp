const User = require('../models/customerdetails');
const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
  });

const saveUserDetails = async (req, res) => {
  try {
    const { name, email, password, description, phone, position, location, website, projecttitle } = req.body;

    if (!name || !email || !password || !position) {
      return res.status(400).json({ message: 'Name, email, password, and position are required' });
    }

    let imageUrl = null;

    if (req.file) {
      const result = await cloudinary.uploader.upload_stream(
        { folder: 'user_images' },
        (error, result) => {
          if (error) throw new Error('Cloudinary image upload failed');
          return result;
        }
      );

      imageUrl = result.secure_url;
    }

    const newUser = new User({
      name,
      email,
      image: imageUrl,
      password,
      description,
      phone,
      position,
      location,
      website,
      projecttitle
    });

    const savedUser = await newUser.save();

    res.status(201).json({ message: 'User details saved successfully', user: savedUser });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

module.exports = { saveUserDetails };

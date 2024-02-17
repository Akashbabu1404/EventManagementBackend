const Venue=require('../model/venueModel')
const catchAsync = require('../utils/catchAsync')
const cloudinary=require('../utils/cloudinary')


exports.getAllVenues = catchAsync(async (req, res,next) => {
    const venues = await Venue.find()
    res.status(200).json({
        message: "success",
        results:venues.length,
        venues
    })
})

// async function uploadMultipleImages(images) {
//     const uploadedImages = [];
  
//     for (const image of images) {
//       try {
//         const result = await cloudinary.uploader.upload(image, {
//           folder: "venuePhotos" 
//         });
  
//         uploadedImages.push({
//             public_id:result.public_id,
//             url:result.secure_url
//         });
//       } catch (error) {
//         console.error(`Error uploading image ${image}:`, error);
//       }
//     }
//     return uploadedImages;
//   }

exports.createVenue = catchAsync(async (req, res, next) => {
    const venueData = req.body;
    // const images = req.body.images;
    // console.log(images)

    // const uploadedImages = await Promise.all(uploadMultipleImages(images));
    // venueData.images = uploadedImages;
    await Venue.create(venueData);
    res.status(201).json({
        status: "success",
        data: null
    });
});


exports.getOneVenue = (catchAsync(async (req, res,next) => {
    const getOneVenue = await Venue.findById(req.params.id)
    res.status(200).json({
        status: "success",
        data: getOneVenue
    })
}))

exports.deleteOneVenue = (catchAsync(async (req, res, next) => {
    await Venue.findByIdAndDelete(req.params.id)
    res.status(204).json({
        status: 'success',
    })
}))

exports.updateOneVenue = (catchAsync(async (req, res, next) => {

    const updatedVenue = await Venue.findById(req.params.id)
    const filteredBody=req.body

    await Venue.findByIdAndUpdate(req.params.id, filteredBody, {
        new: true,
    })

    res.status(200).json({
        status: "success",
        message: "venue updated successfully"
    })
}))
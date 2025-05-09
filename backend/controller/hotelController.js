import Hotel from '../models/HotelSchema.js';
// const multer = require('multer');

export const addHotel = async (req, res) => {
  try {
    // Ensure the file has been uploaded successfully
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    // Create a new hotel with the file path stored
    const hotel = new Hotel({
      name: req.body.name,
      location: req.body.address,
      distance: req.body.distance,
      amenities: req.body.amenities,
      price: req.body.price,
      originalPrice: req.body.originalPrice,
      discount: req.body.discount,
      rating: req.body.rating,
      reviews: req.body.reviews,
      cancellationPolicy: req.body.cancellationPolicy,
      thumbnail: req.file.path, // Store the file path in the database
    });

    await hotel.save();

    res.status(201).json({ message: 'Hotel added successfully!', hotel });
  } catch (error) {
    res.status(500).json({ message: 'Error adding hotel', error });
  }
};

// Get all hotels
export const getAllHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find();
    res.status(200).json(hotels);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching hotels', error });
  }
};

// Get a single hotel by ID
export const getHotelById = async (req, res) => {
  try {
    const { id } = req.params;
    
    const hotel = await Hotel.findById(id);

    if (!hotel) {
      return res.status(404).json({ message: 'Hotel not found' });
    }

    res.status(200).json(hotel);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching hotel', error });
  }
};


export const getHotelByName = async (req, res) => {
  try {
    const { name } = req.params;

    // Extract the actual hotel name by removing the random string
    const formattedName = name.split('-').slice(0, -1).join(' '); // Removes the last random string part and joins the rest

    const hotel = await Hotel.findOne({ name: formattedName });

    if (!hotel) {
      return res.status(404).json({ message: 'Hotel not found' });
    }

    res.status(200).json(hotel);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching hotel by name', error });
  }
};

// export const getHotelByName = async (req, res) => {
//   try {
//     const { name } = req.params;

//     const hotel = await Hotel.findOne({ name: name });

//     if (!hotel) {
//       return res.status(404).json({ message: 'Hotel not found' });
//     }

//     res.status(200).json(hotel);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching hotel by name', error });
//   }
// };


// Filter hotels by location or price range
export const filterHotels = async (req, res) => {
  try {
    const { location, minPrice, maxPrice } = req.query;

    const filter = {};
    if (location) {
      filter.location = { $regex: location, $options: 'i' };
    }
    if (minPrice || maxPrice) {
      filter.price = {
        ...(minPrice && { $gte: Number(minPrice) }),
        ...(maxPrice && { $lte: Number(maxPrice) }),
      };
    }

    const hotels = await Hotel.find(filter);
    res.status(200).json(hotels);
  } catch (error) {
    res.status(500).json({ message: 'Error filtering hotels', error });
  }
};



// controllers/hotelController.js
// import Hotel from "../models/Hotel.js"; // Import the Hotel model

export const searchHotels = async (req, res) => {
  try {
    const {
      location,
      minPrice,
      maxPrice,
      rating,
      amenities,
      sortBy,
      discount
    } = req.query;

    // Build query object dynamically
    const query = {};

    // Filter by location (case-insensitive)
    if (location) {
      query.location = { $regex: location, $options: "i" }; // Match partial text, case-insensitive
    }

    // Filter by price range
    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = Number(minPrice);
      if (maxPrice) query.price.$lte = Number(maxPrice);
    }

    // Filter by rating
    if (rating) {
      query.rating = { $gte: Number(rating) };
    }

    // Filter by amenities
    if (amenities) {
      const amenitiesArray = amenities.split(","); // Assume amenities are passed as a comma-separated string
      query.amenities = { $all: amenitiesArray }; // Match all provided amenities
    }

    // Filter by discount
    if (discount) {
      query.discount = { $gte: parseInt(discount.replace('%', ''), 10) }; // Convert discount to a number
    }

    // Sorting
    let sortOptions = {};
    if (sortBy) {
      if (sortBy === "priceAsc") sortOptions.price = 1; // Ascending
      else if (sortBy === "priceDesc") sortOptions.price = -1; // Descending
      else if (sortBy === "rating") sortOptions.rating = -1; // Sort by highest rating
    }

    // Fetch hotels based on query and sort options
    const hotels = await Hotel.find(query).sort(sortOptions);

    // Return results
    res.status(200).json(hotels);
  } catch (error) {
    console.error("Error searching hotels:", error);
    res.status(500).json({ message: "An error occurred while searching for hotels." });
  }
};

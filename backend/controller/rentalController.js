import RentalList from '../models/rentalSchema.js';


export const addRental = async (req, res) => {
  try {
    // Ensure at least one file has been uploaded
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ message: "No image files uploaded" });
    }

    // Map over req.files to extract file paths
    const imagePaths = req.files.map((file) => file.path);

    // Create a new rental property with the file paths stored
    const rental = new RentalList({
      title: req.body.title,
      category: req.body.category,
      location: {
        city: req.body.city,
        distanceFromTown: req.body.distanceFromTown,
      },
      mapLink: req.body.mapLink,
      propertyDetails: {
        beds: req.body.beds,
        baths: req.body.baths,
        store: req.body.store,
        sqft: req.body.sqft,
      },
      roomType: req.body.roomType,
      lastBooked: req.body.lastBooked || Date.now(), // Default to current date if not provided
      cancellationPolicy: req.body.cancellationPolicy,
      discount: req.body.discount,
      originalPrice: req.body.originalPrice,
      discountedPrice: req.body.discountedPrice,
      taxesAndFees: req.body.taxesAndFees,
      reviews: req.body.reviews,
      rating: req.body.rating,
      images: imagePaths, // Store array of file paths in the database
      availabilityLink: req.body.availabilityLink,
    });

    await rental.save();

    res.status(201).json({ message: "Rental property added successfully!", rental });
  } catch (error) {
    console.error("Error adding rental property:", error);
    res.status(500).json({ message: "Error adding rental property", error });
  }
};



export const getAllRentals = async (req, res) => {
  try {
    // Fetch all rentals from the database
    const rentals = await RentalList.find();

    // Check if there are any rentals
    if (!rentals || rentals.length === 0) {
      return res.status(404).json({ message: "No rentals found!" });
    }

    // Respond with the rentals
    res.status(200).json({ message: "Rentals fetched successfully!", data: rentals });
  } catch (error) {
    // Handle errors
    console.error("Error fetching rentals:", error);
    res.status(500).json({ message: "An error occurred while fetching rentals.", error });
  }
};


export const searchRentalsByCity = async (req, res) => {
  
  const { city } = req.query;

  try {
      const rentals = await RentalList.find({ 'location.city': city }).exec();
      res.json(rentals);
  } catch (error) {
      console.error('Error fetching rental data:', error);
      res.status(500).send('Error fetching rental data');
  }
};




export const getSingleRental = async (req, res) => {
  try {
    const { id } = req.params;
    const rental = await RentalList.findById(id);

    if (!rental) {
      return res.status(404).json({ message: 'rental not found' });
    }

    res.status(200).json(rental);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching hotel', error });
  }
};

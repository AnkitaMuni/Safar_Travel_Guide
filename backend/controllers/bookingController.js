import Booking from '../models/Booking.js'


//create new booking
export const createBooking =async(req,res)=>{
    const newBooking = new Booking(req.body)
    try{
        const savedBooking = await newBooking.save()
        res.status(200).json({
            success:true,
            message:"Tour booked successfully",
            data:savedBooking,
        })
    } catch (err) {
        res.status(500).json({
            success:false,
            message:"Internal Server Error",
        })
    }
}

//get single booking
export const getBooking = async(req, res)=>{
    const id = req.params.id
    try{
        const book = await Booking.findById(id)

        res.status(200).json({
            success:true,
            message:"Successful",
            data:book,
        })
    } catch (err) {
        res.status(404).json({
            success:false,
            message:"Not found"
        })
    }
}

//get all booking
export const getAllBooking = async(req, res)=>{
    try{
        const books = await Booking.find()

        res.status(200).json({
            success:true,
            message:"Successful",
            data:books,
        })
    } catch (err) {
        res.status(404).json({
            success:false,
            message:"Internal Server Error"
        })
    }
}

// Get bookings by user ID
export const getBookingsByUser = async (req, res) => {
    const { id } = req.params; // Extract user ID from params
    try {
      const userBookings = await Booking.find({ userId: id }) // Query bookings by userId
      if (!userBookings || userBookings.length === 0) {
        return res.status(404).json({
          success: false,
          message: "No bookings found for this user",
        });
      }
      res.status(200).json({
        success: true,
        message: "Successful",
        data: userBookings,
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  }


  // Delete booking
export const deleteBooking = async (req, res) => {
  const { id } = req.params; // Extract booking ID from params
  try {
    const deletedBooking = await Booking.findByIdAndDelete(id);
    if (!deletedBooking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Booking deleted successfully",
      data: deletedBooking,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

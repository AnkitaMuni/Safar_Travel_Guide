import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },
    userEmail: {
      type: String,
    },
    tourName: {
      type: String,
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    guestSize: {
      type: Number,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    bookAt: {
      type: Date,
      required: true,
    },
    tourId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Tour', 
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },

  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);

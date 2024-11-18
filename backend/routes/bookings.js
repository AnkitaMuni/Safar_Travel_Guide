import express from 'express'
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js'
import { createBooking, deleteBooking, getAllBooking, getBooking, getBookingsByUser } from '../controllers/bookingController.js'


const router = express.Router()

router.post('/', verifyUser, createBooking )
router.get('/user/:id', getBookingsByUser);
router.delete('/:id', deleteBooking);

export default router
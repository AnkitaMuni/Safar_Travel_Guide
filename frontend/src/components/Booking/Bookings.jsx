import React,{useState} from 'react'
import './booking.css'
import {Form,FormGroup,ListGroup,ListGroupItem,Button} from "reactstrap";

import { useNavigate } from 'react-router-dom';

const Bookings = ({tour,avgRating}) => {
  const {price,reviews} = tour
  const navigate = useNavigate()

  const [credentials,setCredentials] = useState({
    userId: '01',
    userEmail:'example@gmail.com',
    fullName:'',
    phone:'',
    guestSize:1,
    bookAt:''
  })

  const HandleChange = e => {
    setCredentials(prev=>({...prev, [e.target.id]:e.target.value}))
  };

  const serviceFee = 100
  const totalAmount = Number(price) * Number(credentials.guestSize) + Number(serviceFee)

  //sending data to the server
  const HandleClick = e => {
    e.preventDefault();

    navigate("/thank-you");
     
  };

  return <div className='booking'>
    <div className='booking__top d-flex align-items-center justify-content-between'>
      <h3>Rs.{price}<span>/Per person</span></h3>
      <span className='tour__rating d-flex align-items-center gap-1'>
        <i class="ri-star-fill" style={{color:"var(--secondary-color)" }}></i>
        {avgRating ===0?null:avgRating} ({reviews ?.length})                     
      </span>
    </div>
    {/* ====================Booking form ================= */}
    <div className='booking__form'>
      <h5>Information</h5>
      <Form className='booking__info-form' onSubmit={HandleClick}>
        <FormGroup>
          <input type="text" placeholder='Full Name' id="fullName" required onChange={HandleChange}/>
        </FormGroup>
        <FormGroup>
          <input type="number" placeholder='Phone Number' id="phone" required onChange={HandleChange}/>
        </FormGroup>
        <FormGroup className='d-flex align-items-center gap-3'>
          <input type="date" placeholder='' id="bookAt" required onChange={HandleChange}/>
          <input type="number" placeholder='Guest' id="guestSize" required onChange={HandleChange}/>
        </FormGroup>
      </Form>
    </div>
    {/* ====================Booking end ================= */}
    <div className='booking__bottom'>
      <ListGroup>
        <ListGroupItem className='border-0 px-0'>
          <h5 className='d-flex align-items-center gap-1'>
            ₹{price}<i class="ri-close-line"></i> 1 person</h5>
          <span>₹{price}</span>
        </ListGroupItem>
        <ListGroupItem className='border-0 px-0'>
          <h5>Service Charge</h5>
          <span>₹{serviceFee}</span>
        </ListGroupItem>
        <ListGroupItem className='border-0 px-0 total'>
          <h5>Total</h5>
          <span>₹{totalAmount}</span>
        </ListGroupItem>
      </ListGroup>
      <Button className='btn primary__btn w-100 mt-4' onClick={HandleClick}>Book Now</Button>
    </div>
  </div>
};  

export default Bookings;

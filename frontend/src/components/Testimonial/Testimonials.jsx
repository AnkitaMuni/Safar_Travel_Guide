import React from 'react';
import Slider from 'react-slick';
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'
import ava04 from '../../assets/images/ava-4.jpg'
import ava05 from '../../assets/images/ava-5.jpg'
import ava06 from '../../assets/images/ava-6.jpg'


const Testimonials = () => {
    const settings={
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,
        
        responsive:[
            {
                breakpoint:992,
                settings:{
                    slidesToShow:2,
                    slidesToScroll:1,
                    infinite:true,
                    dots:true,
                },
            },
            {
                breakpoint:576,
                settings:{
                    slidesToShow:1,
                    slidesToScroll:1,
                },
            },
        ]
    }
  return (
    <Slider {...settings}>
        <div className="testimonial py-4 px-3">
            <p>"We had an amazing family vacation! The tour guide was knowledgeable and friendly, and the accommodations were top-notch. Our kids loved the activities and the beautiful scenery. We'll definitely be back!".</p>
            <div className='d-flex align-items-center gap-4 mt-3'>
                <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 className='mb-0 mt-3'>Klaus Michaelson</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>

        <div className="testimonial py-4 px-3">
            <p>"Our honeymoon was absolutely perfect! The romantic dinners, the breathtaking views, and the luxurious spa treatments were everything we could have asked for. We're so grateful for the incredible service and attention to detail."</p>
            <div className='d-flex align-items-center gap-4 mt-3'>
                <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 className='mb-0 mt-3'>Lia Frnklin</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>

        <div className="testimonial py-4 px-3">
            <p>"I traveled solo for the first time and had an incredible experience. The tour company was very helpful and organized, and the group was a lot of fun. I can't wait to book another trip with them!"</p>
            <div className='d-flex align-items-center gap-4 mt-3'>
                <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 className='mb-0 mt-3'>Stefan Salvator</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>"Absolutely loved my trip! The tour guide was amazing and the accommodations were perfect. 10/10 would recommend."</p>
            <div className='d-flex align-items-center gap-4 mt-3'>
                <img src={ava04} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 className='mb-0 mt-3'>Damon Salvator</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>

        <div className="testimonial py-4 px-3">
            <p>"I booked a customized tour and it was the best decision I've ever made. The itinerary was tailored to my interests and the local guide was fantastic. I felt like a VIP the entire trip."</p>
            <div className='d-flex align-items-center gap-4 mt-3'>
                <img src={ava05} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 className='mb-0 mt-3'>Taylor Swift</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>

        <div className="testimonial py-4 px-3">
            <p>"The travel agent was extremely helpful and patient. They answered all of my questions and helped me plan the perfect trip. I'm so grateful for their expertise."</p>
            <div className='d-flex align-items-center gap-4 mt-3'>
                <img src={ava06} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 className='mb-0 mt-3'>Taylor Launter</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
    </Slider>
  )
}

export default Testimonials
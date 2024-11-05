import React from 'react';
import ServiceCard from './ServiceCard';
import {Col} from 'reactstrap';

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData=[
    {
        imgUrl: weatherImg,
        title:"Calculate Weather",
        desc:"Precise Weather Forecasts, Real-time Updates, Personalized Weather Alerts",
    },
    {
        imgUrl: guideImg,
        title:"Best Tour Guide",
        desc:"Expert Local Guides, Personalized Itineraries, 24/7 Support",
    },
    {
        imgUrl: customizationImg,
        title:"Customization",
        desc:"Tailor-made Packages, Budget-Friendly Solutions, Hassle-free Planning",
    },
]


const ServiceList = () => {
  return (
    <>
    {
        servicesData.map((item,index)=>
        <Col lg='3' key={index}>
            <ServiceCard item={item}/>
        </Col>)
    }
    </>
  )
}

export default ServiceList
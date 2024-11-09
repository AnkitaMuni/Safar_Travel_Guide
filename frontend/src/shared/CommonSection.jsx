// import React from 'react';
// import "./common-section.css"

// import {Container, Row, Col} from 'reactstrap';

// const CommonSection = ({title}) => {
//   return (
//     <section className='common_section'>
//         <Container>
//             <Row>
//                 <Col lg="12">
//                 <h1>{title}</h1>
//                 </Col>
//             </Row>
//         </Container>
//     </section>
//   );
// };

// export default CommonSection
import React, { useState, useEffect } from 'react';
import './common-section.css';

const CommonSection = ({ title }) => {
  const images = [
    "../assets/images/tour.jpg",
    "../assets/images/pexels-pixabay-147411.jpg",
    "../assets/images/pexels-tomas-malik-793526-1998439.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change slides every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  // Go to a specific slide
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className={`common__section slide-${currentIndex}`}>
      <div className="container">
        <h1>{title}</h1>
      </div>
      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default CommonSection;
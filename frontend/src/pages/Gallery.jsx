import React from 'react';
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery';
import { Container, Row, Col } from 'reactstrap';
import CommonSection from '../shared/CommonSection';


const Gallery = () => {
    return (
        <>
        <CommonSection title="Gallery" />
        <Container>
            <Row>
                <Col lg='12'>
                <h2 className="gallery__title text-center pt-5">Our customers' tour gallery</h2>
                </Col>
                <Col lg='12'>
                <MasonryImagesGallery/>
                </Col>
            </Row>
        </Container>
</>
    )
}

export default Gallery;
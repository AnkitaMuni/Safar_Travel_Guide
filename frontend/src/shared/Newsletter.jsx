import React, { useState } from 'react';
import './newsletter.css';
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import maleTourist from '../assets/images/male-tourist.png';
import { BASE_URL } from '../utils/config';

const Newsletter = () => {
    const [email, setEmail] = useState('');

    const handleSubscribe = async () => {
        if (!email) {
            alert('Please enter an email.');
            return;
        }

        try {
            const response = await axios.post(`${BASE_URL}/subscribe`, { email });
            alert(response.data.message);
            setEmail('');
        } catch (error) {
            alert(error.response?.data?.message || 'Subscription failed.');
        }
    };

    return (
        <section className='newsletter'>
            <Container>
                <Row>
                    <Col lg='6'>
                        <div className="newsletter__content">
                            <h2>Subscribe now to get useful traveling information</h2>
                            <div className="newsletter__input">
                                <input
                                    type="email"
                                    placeholder='Enter your email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <button className="btn newsletter__btn" onClick={handleSubscribe}>
                                    Subscribe
                                </button>
                            </div>
                            <p>Sign up now to receive the latest travel tips, exclusive deals, and inspiring stories. Be the first to know about new destinations, cultural insights, and practical advice. Join our community of globetrotters and embark on your next adventure.</p>
                        </div>
                    </Col>
                    <Col lg='6'>
                        <div className="newsletter__img">
                            <img src={maleTourist} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Newsletter;

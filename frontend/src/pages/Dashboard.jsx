import React, { useContext } from 'react';
import CommonSection from '../shared/CommonSection';
import { Container, Row, Col } from 'reactstrap';
import { BASE_URL } from '../utils/config';
import useFetch from '../hooks/useFetch'; 
import { AuthContext } from './../context/AuthContext';
import { NavLink } from 'react-router-dom';  // Add this import
import '../styles/dashboard.css';
import axios from 'axios'

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const userId = user._id;

  console.log(userId);
  const { data: bookings, loading, error } = useFetch(`${BASE_URL}/booking/user/${userId}`);
  console.log(bookings)

  // Format date
  const options = { day: "numeric", month: "long", year: "numeric" };

  const handleDelete = async (bookingId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this booking?");
    if (!confirmDelete) return;
  
    try {
      await axios.delete(`${BASE_URL}/booking/${bookingId}`);
      alert("Booking deleted successfully!");
      window.location.reload();
    } catch (error) {
      console.error("Error deleting booking:", error);
      alert("Failed to delete booking. Please try again.");
    }
  };

  return (
    <>
      <CommonSection title="Dashboard" />
      <section>
        <Container>
          <h2 className="text-center pt-5">My Bookings</h2>
          {loading && <h4 className="text-center pt-5">Loading...</h4>}
          {error && <h4 className="text-center pt-5 text-danger">{error}</h4>}
          {!loading && !error && bookings?.length === 0 && (
            <h4 className="text-center pt-5">No bookings found.</h4>
          )}
          {!loading && !error && bookings?.length > 0 && (
            <Row>
              {bookings.map((booking) => (
                <Col lg="6" md="6" sm="12" key={booking._id} className="mb-4">
                  <div className="booking-card">
                    <div className="booking-details">
                      <div className="booking-info">
                        <h5 className="tour__title">
                          <NavLink
                            to={`/tours/${booking.tourId}`}
                            className={(navClass) => (navClass.isActive ? "active__link" : "")}
                            style={{ textDecoration: "none", marginRight: "10px" }}
                          >
                            {booking.tourName}
                          </NavLink>
                          <span
                            className="delete-link text-danger"
                            style={{
                              cursor: "pointer",
                              fontSize: "0.9rem",
                              marginLeft: "5px",
                            }}
                            onClick={() => handleDelete(booking._id)}
                          >
                            Delete
                          </span>
                        </h5>
                        <p className="tour__location">
                          <i className="ri-user-line"></i> {booking.fullName}
                        </p>
                        <p className="tour__rating">
                          <i className="ri-group-line"></i> {booking.guestSize} Guests
                        </p>
                        <p className="tour__phone">
                          <i className="ri-phone-line"></i> {`Phone: ${booking.phone}`}
                        </p>
                        <span className="booking-date">
                          Booked for: {new Date(booking.bookAt).toLocaleDateString("en-IN", options)}
                        </span>
                      </div>
                    </div>
                    <div className="booking-image">
                      <img
                        src={booking.photo || "https://via.placeholder.com/300x200"}
                        alt={booking.tourName}
                      />
                    </div>
                  </div>
                  <hr className="booking-divider" />
                </Col>
              ))}
            </Row>          
          )}
        </Container>
      </section>
    </>
  );
};

export default Dashboard;

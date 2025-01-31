import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Form, Button, Card, Row, Col } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const GameBooking = () => {
  const [sportsId, setSportsId] = useState(1); // Default sportsId is 1
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [sessions, setSessions] = useState([]); // Stores regular sessions
  const [monthlyPackages, setMonthlyPackages] = useState([]); // Stores monthly packages
  const [selectedSession, setSelectedSession] = useState('');
  const [selectedSessionDescription, setSelectedSessionDescription] = useState(''); // Stores the selected session's description
  const [slots, setSlots] = useState([]); // Stores time slots
  const [selectedSlot, setSelectedSlot] = useState('');
  const [bookings, setBookings] = useState([]); // Stores all bookings
  const [subtotal, setSubtotal] = useState(0); // Stores subtotal

  // Fetch sports data (optional, if you want to allow switching sports)
  const [sports, setSports] = useState([]);
  useEffect(() => {
    const fetchSports = async () => {
      try {
        const response = await axios.get('http://54.165.1.101:8085/api/freeHitZone/fetch');
        setSports(response.data.sports);
      } catch (error) {
        console.error('Error fetching sports:', error);
      }
    };
    fetchSports();
  }, []);

  // Fetch sessions and monthly packages based on sportsId
  useEffect(() => {
    const fetchSessionsAndPackages = async () => {
      try {
        // Fetch regular sessions
        const sessionsResponse = await axios.get(`http://54.165.1.101:8085/api/freeHitZone/id?sportsId=${sportsId}`);
        setSessions(sessionsResponse.data.sportsDescription);

        // Fetch monthly packages
        const packagesResponse = await axios.get(`http://54.165.1.101:8085/api/freeHitZone/monthlyPackage/id?sportsId=${sportsId}`);
        setMonthlyPackages(packagesResponse.data.monthlyPackages);
      } catch (error) {
        console.error('Error fetching sessions or packages:', error);
      }
    };

    fetchSessionsAndPackages();
  }, [sportsId]);

  // Fetch slots based on selected session's description
  useEffect(() => {
    const fetchSlots = async () => {
      if (selectedSessionDescription) {
        try {
          const response = await axios.get(
            `http://54.165.1.101:8085/api/freeHitZone/fetch/slots?description=${selectedSessionDescription}`
          );
          setSlots(response.data);
        } catch (error) {
          console.error('Error fetching slots:', error);
        }
      }
    };

    fetchSlots();
  }, [selectedSessionDescription]);

  // Handle session selection
  const handleSessionChange = (e) => {
    const sessionId = e.target.value;
    const selectedSessionData = [...sessions, ...monthlyPackages].find(
      (session) => session.id === parseInt(sessionId)
    );

    setSelectedSession(sessionId);
    setSelectedSessionDescription(selectedSessionData.description.split(' ')[0]); // Extract the first part of the description (e.g., "05", "10", "20")
  };

  // Handle add booking
  const handleAddBooking = () => {
    const selectedSessionData = [...sessions, ...monthlyPackages].find(
      (session) => session.id === parseInt(selectedSession)
    );

    const newBooking = {
      sportsId,
      date: selectedDate.toISOString().split('T')[0], // Format date as YYYY-MM-DD
      session: selectedSessionData.description,
      slot: selectedSlot,
      price: selectedSessionData.price,
    };

    setBookings([...bookings, newBooking]);
    calculateSubtotal([...bookings, newBooking]);
  };

  // Handle delete booking
  const handleDeleteBooking = (index) => {
    const updatedBookings = bookings.filter((_, i) => i !== index);
    setBookings(updatedBookings);
    calculateSubtotal(updatedBookings);
  };

  // Calculate subtotal
  const calculateSubtotal = (bookings) => {
    const total = bookings.reduce((sum, booking) => sum + booking.price, 0);
    const gst = total * 0.18;
    const itServiceCharge = 10;
    setSubtotal(total + gst + itServiceCharge);
  };

  // Handle book now
  const handleBookNow = async () => {
    try {
      const bookingData = {
        timeSlot: selectedSlot,
        date: selectedDate.toISOString().split('T')[0],
        sportsId,
        description: `${selectedSession} - ${bookings[0].price}`, // Assuming only one booking for simplicity
      };

      const response = await axios.post('http://54.165.1.101:8085/api/book/sports', bookingData);
      console.log('Booking successful:', response.data);

      // Redirect to payment process (replace with your payment URL)
      window.location.href = '/payment';
    } catch (error) {
      console.error('Error booking:', error);
    }
  };

  return (
    <Container>
      <h1>Booking Page</h1>
      <Form>
        {/* Sports Selection (Optional) */}
        <Form.Group>
          <Form.Label>Select Sport</Form.Label>
          <Form.Control
            as="select"
            value={sportsId}
            onChange={(e) => setSportsId(parseInt(e.target.value))}
          >
            {sports.map((sport) => (
              <option key={sport.id} value={sport.id}>
                {sport.sportValue}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        {/* Date Selection */}
        <Form.Group>
          <Form.Label>Select Date</Form.Label>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            className="form-control"
          />
        </Form.Group>

        {/* Session Selection */}
        <Form.Group>
          <Form.Label>Select Session</Form.Label>
          <Form.Control
            as="select"
            value={selectedSession}
            onChange={handleSessionChange}
          >
            <option value="">Select Session</option>
            {sessions.map((session) => (
              <option key={session.id} value={session.id}>
                {session.description} - ₹{session.price}
              </option>
            ))}
            {monthlyPackages.map((packageItem) => (
              <option key={packageItem.id} value={packageItem.id}>
                {packageItem.description} - ₹{packageItem.price}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        {/* Slot Selection */}
        <Form.Group>
          <Form.Label>Select Slot</Form.Label>
          <Form.Control
            as="select"
            value={selectedSlot}
            onChange={(e) => setSelectedSlot(e.target.value)}
          >
            <option value="">Select Slot</option>
            {slots.map((slot, index) => (
              <option key={index} value={slot}>
                {slot}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        <Button onClick={handleAddBooking}>Add</Button>
      </Form>

      {/* Display Bookings */}
      <Row className="mt-4">
        {bookings.map((booking, index) => (
          <Col key={index} md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Booking {index + 1}</Card.Title>
                <Card.Text>
                  Date: {booking.date}
                  <br />
                  Session: {booking.session}
                  <br />
                  Slot: {booking.slot}
                  <br />
                  Price: ₹{booking.price}
                </Card.Text>
                <Button variant="danger" onClick={() => handleDeleteBooking(index)}>
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Subtotal and Book Now Button */}
      <h3 className="mt-4">Subtotal: ₹{subtotal.toFixed(2)}</h3>
      <Button onClick={handleBookNow}>Book Now</Button>
    </Container>
  );
};

export default GameBooking;
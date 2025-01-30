import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Booking.css";
import Carousel from "../page/Carousel";
import Footer from "../page/Footer";

const GameBooking = () => {
  const [selectedSport, setSelectedSport] = useState("1"); // Default: cricket (sportId = 1)
  const [allSports, setAllSports] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date().getDate());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [daysInMonth, setDaysInMonth] = useState(
    new Date(currentYear, currentMonth + 1, 0).getDate()
  );
  const [slots, setSlots] = useState([]);
  const [monthlyPackages, setMonthlyPackages] = useState([]);
  const [selectedSession, setSelectedSession] = useState("");
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  const [selectedBookings, setSelectedBookings] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [isBookingConfirmed, setIsBookingConfirmed] = useState(false);
  const [bookingDetails, setBookingDetails] = useState(null);
  const [timeSlots, setTimeSlots] = useState([]);

  const navigate = useNavigate();

  // Fetch sports options
  const fetchSportsOptions = useCallback(async () => {
    try {
      const response = await fetch("http://54.165.1.101:8085/api/freeHitZone/fetch");
      const data = await response.json();
      setAllSports(data.sports || []);
    } catch (error) {
      console.error("Error fetching sports options:", error);
    }
  }, []);

  // Fetch slots for the selected sport
  const fetchSlotsForSport = useCallback(async () => {
    try {
      const response = await fetch(`http://54.165.1.101:8085/api/freeHitZone/id?sportsId=${selectedSport}`);
      const data = await response.json();
      setSlots(data.sportsDescription || []);
    } catch (error) {
      console.error("Error fetching slots:", error);
    }
  }, [selectedSport]);

  // Fetch monthly packages
  const fetchMonthlyPackages = useCallback(async () => {
    try {
      const response = await fetch(
        `http://54.165.1.101:8085/api/freeHitZone/monthlyPackage/id?sportsId=${selectedSport}`
      );
      const data = await response.json();
      setMonthlyPackages(data.monthlyPackages || []);
    } catch (error) {
      console.error("Error fetching monthly packages:", error);
    }
  }, [selectedSport]);

  // Fetch time slots
  const fetchTimeSlots = useCallback(async () => {
    try {
      const response = await fetch("http://54.165.1.101:8085/api/freeHitZone/fetch/slots");
      const timeSlotData = await response.json();
      setTimeSlots(timeSlotData || []);
    } catch (error) {
      console.error("Error fetching time slots:", error);
    }
  }, []);

  useEffect(() => {
    fetchSportsOptions();
    fetchSlotsForSport();
    fetchMonthlyPackages();
    fetchTimeSlots();
    setDaysInMonth(new Date(currentYear, currentMonth + 1, 0).getDate());
  }, [fetchSportsOptions, fetchSlotsForSport, fetchMonthlyPackages, fetchTimeSlots, currentMonth, currentYear]);

  const handleSportSelection = (sportId) => {
    setSelectedSport(sportId);
    setSelectedSession("");
    setSelectedTimeSlot("");
    setSelectedBookings([]);
    setSubtotal(0);
    setIsBookingConfirmed(false);
  };

  const addBooking = () => {
    if (!selectedSession || !selectedTimeSlot) return;
    const sessionData = slots.find((s) => s.description === selectedSession);
    const slotData = {
      date: `${selectedDate}-${currentMonth + 1}-${currentYear}`,
      session: selectedSession,
      time: selectedTimeSlot,
      price: sessionData?.price || 0,
    };
    setSelectedBookings((prevBookings) => [...prevBookings, slotData]);
    setSubtotal((prevSubtotal) => prevSubtotal + slotData.price);
  };

  const removeBooking = (index) => {
    const bookingToRemove = selectedBookings[index];
    setSelectedBookings((prevBookings) =>
      prevBookings.filter((_, i) => i !== index)
    );
    setSubtotal((prevSubtotal) => prevSubtotal - bookingToRemove.price);
  };

  const handleBookNow = () => {
    const bookingData = {
      bookingId: "12345", // Mock booking ID
      timeSlot: selectedTimeSlot,
      date: `${selectedDate}-${currentMonth + 1}-${currentYear}`,
      userId: 1, // Mock user ID
      sportsId: selectedSport,
      description: `${selectedSession} - ₹${subtotal}`,
    };

    setBookingDetails(bookingData);
    setIsBookingConfirmed(true);
    alert("Booking successful!");
    setSelectedBookings([]);
    setSubtotal(0);
    navigate("/booking/myBooking/all");
  };

  const handleMonthChange = (direction) => {
    if (direction === "prev") {
      if (currentMonth === 0) {
        setCurrentMonth(11);
        setCurrentYear((prevYear) => prevYear - 1);
      } else {
        setCurrentMonth((prevMonth) => prevMonth - 1);
      }
    } else if (direction === "next") {
      if (currentMonth === 11) {
        setCurrentMonth(0);
        setCurrentYear((prevYear) => prevYear + 1);
      } else {
        setCurrentMonth((prevMonth) => prevMonth + 1);
      }
    }
  };

  return (
    <div>
      <Carousel />
      <div className="container-fluid mb-2">
        <div className="d-flex justify-content-center mt-3 mb-4">
          {allSports.map((sport) => (
            <button
              key={sport.id}
              className="btn"
              style={{
                backgroundColor: selectedSport === sport.id ? "black" : "white",
                color: selectedSport === sport.id ? "white" : "black",
                marginRight: "10px",
              }}
              onClick={() => handleSportSelection(sport.id)}
            >
              {sport.sportValue}
            </button>
          ))}
        </div>

        <div className="card-body p-4">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <button
              className="btn btn-link text-dark"
              onClick={() => handleMonthChange("prev")}
            >
              &lt;
            </button>
            <h5 className="mb-0">
              {new Date(currentYear, currentMonth).toLocaleString("default", {
                month: "long",
              })}{" "}
              {currentYear}
            </h5>
            <button
              className="btn btn-link text-dark"
              onClick={() => handleMonthChange("next")}
            >
              &gt;
            </button>
          </div>

          <div className="row text-center g-0 mb-2">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div className="col" key={day}>
                <small className="text-muted">{day}</small>
              </div>
            ))}
          </div>

          <div className="row g-1 mb-4">
            {[...Array(daysInMonth)].map((_, i) => (
              <div className="col text-center" key={i}>
                <button
                  onClick={() => setSelectedDate(i + 1)}
                  className={`btn ${
                    selectedDate === i + 1
                      ? "btn-danger rounded-circle"
                      : "btn-light rounded-circle"
                  }`}
                  style={{ width: "35px", height: "35px", padding: 0 }}
                >
                  {i + 1}
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="booking-summary">
          <h3>Selected Bookings</h3>
          <ul>
            {selectedBookings.map((booking, index) => (
              <li key={index}>
                {booking.date} - {booking.session} - {booking.time} - ₹{booking.price}
                <button
                  onClick={() => removeBooking(index)}
                  className="remove-button"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="subtotal">Subtotal: ₹{subtotal}</div>
          {!isBookingConfirmed ? (
            <button onClick={handleBookNow} className="book-now-button">
              Book Now
            </button>
          ) : (
            <p>Your booking is confirmed. Booking ID: {bookingDetails?.bookingId}</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GameBooking;

import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { fetchMockData } from "../mockAPI/MockAPI"; // Import the mock API

import "./Booking.css";

const Booking = () => {
  const [selectedSport, setSelectedSport] = useState("1"); // Default: cricket (sportId = 1)
  const [sportsOptions, setSportsOptions] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [slots, setSlots] = useState([]);
  const [monthlyPackages, setMonthlyPackages] = useState([]);
  const [selectedSession, setSelectedSession] = useState("");
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  const [selectedBookings, setSelectedBookings] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [timeSlots, setTimeSlots] = useState([]);
  const [showTableTennisWithoutRobot, setShowTableTennisWithoutRobot] = useState(false);
  const [isBookingConfirmed, setIsBookingConfirmed] = useState(false);

  const navigate = useNavigate();

  const fetchSportsOptions = useCallback(async () => {
    try {
      const response = await fetch("http://192.168.1.6:8080/api/freeHitZone/fetch");
      const data = await response.json();
      if (data.success) {
        setSportsOptions(data.sports || []);
      }
    } catch (error) {
      // Use mock data in case of error
      const mockData = fetchMockData("fetchSports");
      if (mockData) {
        setSportsOptions(mockData.sports);
      } else {
        console.error("Error fetching sports options:", error);
      }
    }
  }, []);

  const fetchSlotsForSport = useCallback(async () => {
    try {
      const endpoint =
        selectedSport === "tableTennisWithoutRobot"
          ? "http://192.168.1.6:8080/api/freeHitZone/fetch/tableTennisWithoutRobot"
          : `http://192.168.1.6:8080/api/freeHitZone/id?sportsId=${selectedSport}`;
      const response = await fetch(endpoint);
      const data = await response.json();
      if (data.success) {
        setSlots(data.sportsDescription || []);
      }
    } catch (error) {
      // Use mock data in case of error
      const mockData = fetchMockData("fetchSportsById")[selectedSport];
      if (mockData) {
        setSlots(mockData.sportsDescription);
      } else {
        console.error("Error fetching slots:", error);
      }
    }
  }, [selectedSport]);

  const fetchMonthlyPackages = useCallback(async () => {
    try {
      if (selectedSport === "tableTennisWithoutRobot") return;
      const response = await fetch(
        `http://192.168.1.6:8080/api/freeHitZone/monthlyPackage/id?sportsId=${selectedSport}`
      );
      const data = await response.json();
      if (data.success) {
        setMonthlyPackages(data.monthlyPackages || []);
      }
    } catch (error) {
      // Use mock data in case of error
      const mockData = fetchMockData("fetchMonthlyPackagesById")[selectedSport];
      if (mockData) {
        setMonthlyPackages(mockData.monthlyPackages);
      } else {
        console.error("Error fetching monthly packages:", error);
      }
    }
  }, [selectedSport]);

  const fetchTimeSlots = useCallback(async () => {
    try {
      const response = await fetch("http://192.168.1.6:8080/api/freeHitZone/fetch/slots");
      const timeSlotData = await response.json();
      setTimeSlots(timeSlotData || []);
    } catch (error) {
      // Use mock data in case of error
      const mockData = fetchMockData("fetchSlots");
      if (mockData) {
        setTimeSlots(mockData);
      } else {
        console.error("Error fetching time slots:", error);
      }
    }
  }, []);

  useEffect(() => {
    fetchSportsOptions();
    fetchSlotsForSport();
    fetchMonthlyPackages();
    fetchTimeSlots();
  }, [selectedSport, fetchSportsOptions, fetchSlotsForSport, fetchMonthlyPackages, fetchTimeSlots]);

  const handleSportChange = (sportId) => {
    setSelectedSport(sportId);
    setSelectedSession("");
    setSelectedTimeSlot("");
    setSelectedBookings([]);
    setSubtotal(0);
    setIsBookingConfirmed(false);
    setShowTableTennisWithoutRobot(sportId === "2");
  };

  const addBooking = () => {
    if (!selectedSession || !selectedTimeSlot) {
      alert("Please select a session and time slot.");
      return;
    }
    const sessionData = slots.find((s) => s.description === selectedSession);
    if (!sessionData || typeof sessionData.price === "undefined") {
      alert("Invalid session selection.");
      return;
    }

    const slotData = {
      date: selectedDate,
      session: selectedSession,
      time: selectedTimeSlot,
      price: sessionData.price,
    };

    setSelectedBookings((prev) => [...prev, slotData]);
    setSubtotal((prev) => prev + sessionData.price);
    setSelectedSession("");
    setSelectedTimeSlot("");
  };

  const removeBooking = (index) => {
    const updatedBookings = [...selectedBookings];
    const [removedBooking] = updatedBookings.splice(index, 1);
    setSelectedBookings(updatedBookings);
    setSubtotal((prev) => prev - removedBooking.price);
  };

  const handleBookNow = async () => {
    try {
      // Construct the booking data dynamically
      const bookingData = {
        bookingId: null, // Assuming the server will generate the bookingId
        timeSlot: selectedTimeSlot, // Ensure this value is dynamically set from the page
        date: selectedDate.replace(/-/g, "/"), // Convert date format to "YYYY/MM/DD"
        userId: 1, // Replace with the actual user ID dynamically
        sportsId: selectedSport, // Replace with the actual sports ID dynamically
        status: "active",
        description: selectedBookings
          .map((booking) => `${booking.session} - ₹${booking.price}`)
          .join(", "),
      };
  
      // Post the booking data to the API
      const response = await fetch("http://192.168.1.6:8080/api/book/sports/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });
  
      if (response.ok) {
        // Navigate to the 'UserBooking' page after a successful booking
        alert("Booking successful!");
        navigate("/UserBooking");
      } else {
        alert("Failed to book. Please try again later.");
      }
    } catch (error) {
      console.error("Error while booking:", error);
      alert("An error occurred while booking. Please try again.");
    }
  };
  
  return (
    <div className="booking-container">
      <header>
        <div className="toggle-buttons">
          {sportsOptions.map((sport) => (
            <button
              key={sport.id}
              className={`toggle-button ${selectedSport === sport.id ? "active" : ""}`}
              onClick={() => handleSportChange(sport.id)}
            >
              {sport.sportValue}
            </button>
          ))}
        </div>
      </header>

      {showTableTennisWithoutRobot && (
        <div className="toggle-buttons">
          <button
            className={`toggle-button ${selectedSport === "tableTennisWithoutRobot" ? "active" : ""}`}
            onClick={() => handleSportChange("tableTennisWithoutRobot")}
          >
            Table Tennis Without Robot
          </button>
        </div>
      )}

      <div className="calendar-and-slots">
        <div className="calendar">
        <Calendar
            onChange={setSelectedDate}
            value={selectedDate}
          />
        </div>

        <div className="slot-selection">
          <h3>Select Session</h3>
          <select
            value={selectedSession}
            onChange={(e) => setSelectedSession(e.target.value)}
          >
            <option value="" disabled>Select a session</option>
            {slots.map((slot, index) => (
              <option key={index} value={slot.description}>
                {slot.description} - ₹{slot.price}
              </option>
            ))}
            {monthlyPackages.map((packageItem, index) => (
              <option key={index} value={packageItem.description}>
                {packageItem.description} - ₹{packageItem.price} {packageItem.descriptionValidity}
              </option>
            ))}
          </select>

          <h3>Select Time Slot</h3>
          <div className="time-slots">
            {timeSlots.map((time, index) => (
              <button
                key={index}
                className={`time-slot ${selectedTimeSlot === time ? "selected" : ""}`}
                onClick={() => setSelectedTimeSlot(time)}
              >
                {time}
              </button>
            ))}
          </div>
          <button onClick={addBooking} className="add-button">+ Add</button>
        </div>
      </div>

      <div className="booking-summary">
        <h3>Selected Bookings</h3>
        <ul>
          {selectedBookings.map((booking, index) => (
            <li key={index}>
              {booking.date} - {booking.session} - {booking.time} - ₹{booking.price}
              <button onClick={() => removeBooking(index)} className="remove-button">Remove</button>
            </li>
          ))}
        </ul>
        <div className="subtotal">Subtotal: ₹{subtotal}</div>
        {!isBookingConfirmed ? (
          <button onClick={handleBookNow} className="book-now-button">Book Now</button>
        ) : (
          <p>Your booking is confirmed.</p>
        )}
      </div>
    </div>
  );
};

export default Booking;

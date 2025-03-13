import React, { useState, useEffect } from "react";
import "./GameBooking.css"; // Import the CSS file
import Calendar from 'react-calendar'; // Import the Calendar component
import 'react-calendar/dist/Calendar.css'; // Import the Calendar CSS
import { data } from '../mockAPI/MockAPI'; // Import mock data

const GameBooking = () => {
  const [selectedSession, setSelectedSession] = useState("");
  const [date, setDate] = useState(new Date());
  const [selectedSport, setSelectedSport] = useState(data.fetchSports.sports[0].sportValue); // Use mock data as fallback
  const [sports, setSports] = useState(data.fetchSports.sports); // Use mock data as fallback
  const [timeSlots, setTimeSlots] = useState(data.fetchSlots); // Use mock data as fallback
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  const [tableTennisSessions, setTableTennisSessions] = useState(data.fetchSportsById[2].sportsDescription); // Use mock data as fallback
  const [tableTennisWithoutRobotSessions, setTableTennisWithoutRobotSessions] = useState(data.fetchTableTennisWithoutRobot.tableTennisWithRobot); // Use mock data as fallback
  const [cricketSessions, setCricketSessions] = useState(data.fetchSportsById[1].sportsDescription); // Use mock data as fallback

  useEffect(() => {
    fetch("http://54.165.1.101:8085/api/freeHitZone/fetch")
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setSports(data.sports);
          setSelectedSport(data.sports[0].sportValue); // Set default selected sport
        }
      })
      .catch(error => console.error("Error fetching sports:", error));
  }, []);

  useEffect(() => {
    fetch("http://54.165.1.101:8085/api/freeHitZone/fetch/slots?description=10")
      .then(response => response.json())
      .then(data => setTimeSlots(data))
      .catch(error => console.error("Error fetching time slots:", error));
  }, []);

  const handleSessionChange = (event) => {
    setSelectedSession(event.target.value);
  };

  const handleSportChange = (sportValue) => {
    setSelectedSport(sportValue);
    if (sportValue === "Cricket") {
      fetch(`http://54.165.1.101:8085/api/freeHitZone/id?sportsId=1`)
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            setCricketSessions(data.sportsDescription);
          }
        })
        .catch(error => console.error("Error fetching cricket sessions:", error));
    } else if (sportValue === "TableTennis") {
      fetch(`http://54.165.1.101:8085/api/freeHitZone/id?sportsId=2`)
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            setTableTennisSessions(data.sportsDescription);
          }
        })
        .catch(error => console.error("Error fetching table tennis sessions:", error));
    }
  };

  const handleTimeSlotChange = (timeSlot) => {
    setSelectedTimeSlot(timeSlot);
  };

  const handleTableTennisWithoutRobotClick = () => {
    setSelectedSport("Table Tennis Without Robot");
    fetch("http://54.165.1.101:8085/api/freeHitZone/fetch/tableTennisWithoutRobot")
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setTableTennisWithoutRobotSessions(data.tableTennisWithRobot);
        }
      })
      .catch(error => console.error("Error fetching table tennis sessions:", error));
  };

  return (
    <div className="booking-container">
      <section>
        <div className="heading my-4 text-center">
          <h1>Start Booking your Slots </h1>
        </div>
      </section>

      {/* calendar view */}
      <div className="d-flex justify-content-center">
        <div className="border rounded">
          <Calendar onChange={setDate} value={date} />
        </div>
      </div>

      <section>
        {/* Toggle Buttons */}
        <div className="toggle-main my-4 ">
          {sports.map((sport) => (
            <button
              key={sport.id}
              className={`toggle-button ${selectedSport === sport.sportValue ? "active" : ""}`}
              onClick={() => handleSportChange(sport.sportValue)}
              style={{ transition: "background-color 0.3s, color 0.3s" }}
            >
              {sport.sportValue}
            </button>
          ))}
          <button
            className={`toggle-button ${selectedSport === "Table Tennis Without Robot" ? "active" : ""}`}
            style={{ transition: "background-color 0.3s, color 0.3s", backgroundColor: selectedSport === "Table Tennis Without Robot" ? "black" : "" }}
            onClick={handleTableTennisWithoutRobotClick}
          >
            Table Tennis Without Robot
          </button>
        </div>
      </section>

      <section>
        {/* Session Selection */}
        <div className="slots">
          <p>
            <strong>Select sessions</strong>
          </p>
          <select value={selectedSession} onChange={handleSessionChange}>
            {selectedSport === "Table Tennis Without Robot" && tableTennisWithoutRobotSessions.length > 0 ? (
              tableTennisWithoutRobotSessions.map(session => (
                <option key={session.id} value={session.description}>
                  {session.description} – ₹{session.price}
                </option>
              ))
            ) : selectedSport === "Table Tennis" && tableTennisSessions.length > 0 ? (
              tableTennisSessions.map(session => (
                <option key={session.id} value={session.description}>
                  {session.description} – ₹{session.price}
                </option>
              ))
            ) : selectedSport === "Cricket" && cricketSessions.length > 0 ? (
              cricketSessions.map(session => (
                <option key={session.id} value={session.description}>
                  {session.description} – ₹{session.price}
                </option>
              ))
            ) : (
              <option value="">No sessions available</option>
            )}
          </select>
        </div>
      </section>

      <section>
        {/* Timezone */}
        <div style={{ marginBottom: "20px", textAlign: "center" }}>
          (GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi
        </div>

        {/* Time Slots */}
        <div className="events">
          <div>
            <div className="row text-center mx-0">
              {timeSlots.map((time, index) => (
                <div key={index} className="col-md-2 col-4 my-1 px-2">
                  <div
                    className={`cell py-1 ${selectedTimeSlot === time ? "selected" : ""}`}
                    onClick={() => handleTimeSlotChange(time)}
                    style={{ cursor: "pointer" }}
                  >
                    {time}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <a
            href="/"
            className="btn alime-btn mb-3 mb-sm-0"
            style={{
              fontSize: "18px !important",
              height: "auto",
              lineHeight: "35px",
              marginTop: "15px !important",
            }}
          >
            + ADD
          </a>
        </div>
      </section>

      <section>
        {/* Right Side Panel */}
        <div className="col-12 col-lg-5">
          {/* Session Details */}
          <div>
            <button
              className="glow-on-hover btn btn-danger"
              style={{ border: "none", cursor: "pointer", float: "right" }}
            >
              <i
                className="fa fa-trash-o"
                aria-hidden="true"
                style={{ color: "red", fontSize: "20px", float: "right" }}
              ></i>
            </button>
            <h4>10 Over Session – ₹149</h4>
            <p>Ideal for a quick practice session to sharpen your skills.</p>
          </div>

          <hr />

          {/* Add more session details here */}

          {/* Subtotal and Due */}
          <div
            className="col-12 col-lg-12"
            style={{ textAlign: "left", fontSize: "20px" }}
          >
            Subtotal <strong>₹600.00</strong>
            <br />
            Due now <strong>₹0.00</strong>
          </div>

          {/* Book Now Button */}
          <a
            href="/"
            className="btn alime-btn mb-3 mb-sm-0"
            style={{
              fontSize: "20px !important",
              height: "auto",
              lineHeight: "35px",
              marginTop: "10px !important",
              width: "100%",
              backgroundColor: "red",
              textDecoration: "none",
            }}
          >
            Book Now
          </a>

          {/* Social Sharing */}
          <p style={{ textAlign: "left", margin: "15px 0" }}>
            Share:
            <a href="/">
              <i className="ti-facebook bg-black" aria-hidden="true"></i>
            </a>
            <a href="/">
              <i className="ti-twitter-alt" aria-hidden="true"></i>
            </a>
            <a href="/">
              <i className="ti-linkedin" aria-hidden="true"></i>
            </a>
            <a href="/">
              <i className="ti-pinterest" aria-hidden="true"></i>
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default GameBooking;
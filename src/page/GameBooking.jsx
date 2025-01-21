import React, { useState,useEffect } from "react";
import { MdDelete } from "react-icons/md";
import Footer from "./Footer";
import axios from "axios";

const GameBooking = () => {
  const [selectedDate, setSelectedDate] = useState(1);
  const [selectedSlot, setSelectedSlot] = useState("");
  const [cart, setCart] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [timeSlots, setTimeSlots] = useState([]);
  const [loadingSlots, setLoadingSlots] = useState(false);

  const sessionOptions = [
    { id: 1, title: "10 Over Session", price: 149 },
    { id: 2, title: "20 Over Session", price: 249 },
    { id: 3, title: "40 Over Session", price: 349 },
  ];
  const [selectedSession, setSelectedSession] = useState(sessionOptions[0]);

  // const timeSlots = [
  //   ["9:00AM", "9:30AM", "9:45AM", "10:00AM", "10:30AM", "10:55AM"],
  //   ["11:00AM", "11:30AM", "11:45AM", "12:00PM", "12:30PM", "12:55PM"],
  //   ["1:00PM", "1:30PM", "1:45PM", "2:00PM", "2:30PM", "2:45PM"],
  //   ["3:00PM", "3:30PM", "4:15PM", "5:00PM"],
  // ];

  useEffect(() => {
    const fetchTimeSlots = async () => {
      try {
        // setLoading(true);
        let token=sessionStorage.getItem("user-token")
        console.log('ok',token)
        const response = await axios.get(
          "http://54.175.97.144:8082/api/freeHitZone/fetch/slots",
          {
            headers: {
              Authorization: `Bearer ${token}`, 
            },
          }
        );
        if (response.data.success) {
          setTimeSlots(response.data.timeSlots || []);
        } else {
          // setError("Failed to fetch time slots.");
        }
      } catch (err) {
        // setError(err.message || "An error occurred while fetching time slots.");
      } finally {
        // setLoading(false);
      }
    };

    fetchTimeSlots();
  }, []);

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const subtotal = cart.reduce((acc, item) => acc + item.price, 0);

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const addToCart = () => {
    if (!selectedSlot) {
      alert("Please select a time slot!");
      return;
    }

    const newCartItem = {
      id: Date.now(),
      title: selectedSession.title,
      price: selectedSession.price,
      description: `${selectedSession.title} scheduled on ${selectedDate} ${new Date(
        currentYear,
        currentMonth
      ).toLocaleString("default", { month: "long" })}, ${currentYear} at ${selectedSlot}`,
    };

    setCart([...cart, newCartItem]);
    setSelectedSlot(""); // Clear the selected slot
  };

  const handleMonthChange = (direction) => {
    if (direction === "next") {
      if (currentMonth === 11) {
        setCurrentMonth(0);
        setCurrentYear((prevYear) => prevYear + 1);
      } else {
        setCurrentMonth((prevMonth) => prevMonth + 1);
      }
    } else if (direction === "prev") {
      if (currentMonth === 0) {
        setCurrentMonth(11);
        setCurrentYear((prevYear) => prevYear - 1);
      } else {
        setCurrentMonth((prevMonth) => prevMonth - 1);
      }
    }
  };

  return (
    <>
      <div className="online_booking d-flex justify-content-center align-items-center">
        <h2 className="text-white font-weight-bold">Online Appointments</h2>
      </div>
      <div className="container py-4">
        <div className="row g-4">
          <div className="col-md-7">
            <div className="card shadow-sm">
              <div className="card-body p-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <button
                    className="btn btn-link text-dark"
                    onClick={() => handleMonthChange("prev")}
                  >
                    &lt;
                  </button>
                  <h5 className="mb-0">
                    {new Date(currentYear, currentMonth).toLocaleString(
                      "default",
                      { month: "long" }
                    )}{" "}
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
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                    (day) => (
                      <div className="col" key={day}>
                        <small className="text-muted">{day}</small>
                      </div>
                    )
                  )}
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

                <div className="mb-4">
                  <h6 className="mb-3">Select Session</h6>
                  <select
                    className="form-select"
                    onChange={(e) =>
                      setSelectedSession(
                        sessionOptions.find(
                          (option) => option.title === e.target.value
                        )
                      )
                    }
                  >
                    {sessionOptions.map((option) => (
                      <option key={option.id} value={option.title}>
                        {`${option.title} – ₹${option.price}`}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="time-slots-container">
                  {timeSlots.map((row, rowIndex) => (
                    <div key={rowIndex} className="time-row mb-2">
                      {row.map((time) => (
                        <button
                          key={time}
                          onClick={() => setSelectedSlot(time)}
                          className={`time-slot-btn btn ${
                            selectedSlot === time ? "btn-primary" : "btn-light"
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  ))}
                </div>

                <button
                  className="btn btn-danger mt-4"
                  onClick={addToCart}
                >
                  + ADD
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-5">
            <div className="card shadow-sm">
              <div className="card-body p-4">
                <h5 className="mb-4">Your Sessions</h5>

                {cart.map((item) => (
                  <div key={item.id} className="mb-3 pb-3 border-bottom">
                    <div className="d-flex justify-content-between align-items-start">
                      <div>
                        <div className="d-flex align-items-center gap-2">
                          <h6 className="mb-1">{item.title}</h6>
                          <span className="text-danger">₹{item.price}</span>
                        </div>
                        <small className="text-muted d-block">
                          {item.description}
                        </small>
                      </div>
                      <button
                        className="btn btn-link text-danger p-0"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <MdDelete size={18} />
                      </button>
                    </div>
                  </div>
                ))}

                <div className="d-flex justify-content-between mb-2">
                  <span className="fw-bold">Subtotal</span>
                  <span>₹{subtotal.toFixed(2)}</span>
                </div>
                <div className="d-flex justify-content-between mb-4">
                  <span className="fw-bold">Due now</span>
                  <span>₹0.00</span>
                </div>

                <button className="btn btn-warning w-100 text-white mb-3">
                  Book Now
                </button>

                <div className="d-flex justify-content-center gap-2 mt-3">
                  <span className="text-muted small">Share:</span>
                  <a href="#" className="text-decoration-none text-muted">
                    f
                  </a>
                  <a href="#" className="text-decoration-none text-muted">
                    t
                  </a>
                  <a href="#" className="text-decoration-none text-muted">
                    in
                  </a>
                  <a href="#" className="text-decoration-none text-muted">
                    p
                  </a>
                </div>

                <div className="text-center text-muted mt-2">
                  <small>(GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GameBooking;

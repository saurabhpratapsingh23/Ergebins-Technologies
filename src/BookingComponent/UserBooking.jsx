import React, { useEffect, useState } from "react";
import axios from "axios";
import { fetchMockData } from "../mockAPI/MockAPI"; // Import the mock API

const UserBooking = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get(
          "http://192.168.1.6:8080/api/book/sports/fetch/all"
        );
        if (response.data.success) {
          setBookings(response.data.bookings);
        } else {
          setError("Failed to fetch bookings.");
        }
      } catch (err) {
        // Use mock data in case of error
        const mockData = fetchMockData("fetchBookings");
        if (mockData) {
          setBookings(mockData.bookings);
        } else {
          setError("Error fetching bookings. Please try again later.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  if (loading) {
    return <div className="text-center mt-10">Loading bookings...</div>;
  }

  if (error) {
    return <div className="text-center mt-10 text-red-500">{error}</div>;
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-6">User Bookings</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {bookings.map((booking) => (
          <div
            key={booking.id}
            className="bg-white shadow-lg rounded-lg p-4 border border-gray-200 hover:shadow-xl transition-shadow"
          >
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              {booking.sportsName}
            </h2>
            <p className="text-sm text-gray-600">
              <span className="font-bold">Booking ID:</span> {booking.bookingId}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-bold">Customer:</span>{" "}
              {booking.customerName}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-bold">Contact:</span>{" "}
              {booking.customerContact}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-bold">Date:</span> {booking.date}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-bold">Time Slot:</span>{" "}
              {booking.timeSlot || "N/A"}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-bold">Status:</span> {booking.status}
            </p>
            {booking.sportsAndPriceDetail && (
              <p className="text-sm text-gray-600">
                <span className="font-bold">Details:</span>{" "}
                {booking.sportsAndPriceDetail}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserBooking;

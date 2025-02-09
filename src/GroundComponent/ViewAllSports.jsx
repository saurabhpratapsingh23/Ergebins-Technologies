import React, { useEffect, useState } from "react";
import Carousel from "../page/Carousel";
import Footer from "../page/Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ViewAllSports = () => {
  const [sports, setSports] = useState([]);
  const [activeTab, setActiveTab] = useState("");
  const [sportDetails, setSportDetails] = useState(null);
  const [monthlyPackage, setMonthlyPackage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSports = async () => {
      try {
        const apiResponse = await axios.get(
          `${process.env.REACT_APP_API_BASE_URL}/freeHitZone/fetch`
        );

        if (apiResponse.data.success) {
          const sportsData = apiResponse.data.sports;
          setSports(sportsData);
          setActiveTab(sportsData[0]?.sportValue.toLowerCase());
          fetchSportDetails(sportsData[0]?.id); // Fetch details for the first sport
          fetchMonthlyPackageDetails(sportsData[0]?.id); // Fetch monthly package for the first sport
        }
      } catch (error) {
        console.error("Error fetching sports data:", error);
      }
    };

    fetchSports();
  }, []);

  const fetchSportDetails = async (sportId) => {
    try {
      const apiResponse = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/freeHitZone/id?sportsId=${sportId}`
      );
      setSportDetails(apiResponse.data);
    } catch (error) {
      console.error("Error fetching sport details:", error);
    }
  };

  const fetchMonthlyPackageDetails = async (sportId) => {
    try {
      const apiResponse = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/freeHitZone/monthlyPackage/id?sportsId=${sportId}`
      );
      setMonthlyPackage(apiResponse.data);
    } catch (error) {
      console.error("Error fetching monthly package details:", error);
    }
  };

  const handleTabClick = (sport) => {
    setActiveTab(sport.sportValue.toLowerCase());
    fetchSportDetails(sport.id); // Fetch details for the selected sport
    fetchMonthlyPackageDetails(sport.id); // Fetch monthly package for the selected sport
  };

  const handleBookNow = () => {
    navigate("/Gamebooking");
  };

  return (
    <div>
      <Carousel />
      <div className="container mt-5">
        <h2 className="text-center mb-4">Indoor Sports Practice</h2>
        <p className="text-center text-danger fw-bold">BOOK NOW</p>

        <div className="d-flex justify-content-center mb-4 flex-wrap">
          {sports.map((sport) => (
            <button
              key={sport.id}
              className={`btn ${
                activeTab === sport.sportValue.toLowerCase()
                  ? "btn-dark"
                  : "btn-outline-dark"
              } mx-2 mb-2`}
              onClick={() => handleTabClick(sport)}
            >
              {sport.sportValue.toUpperCase()}
            </button>
          ))}
        </div>
        {sportDetails ? (
          <div className="row">
            {sportDetails.sportsDescription?.map((session, index) => (
              <div key={index} className="col-12 col-md-6 col-lg-4 mb-4">
                <div className="card shadow-sm h-100">
                  <div className="card-body">
                    <h5 className="card-title" style={{ fontWeight: "bold" }}>
                      {session.description} - ₹{session.price}
                    </h5>
                    <p style={{ fontSize: "13px" }}>
                      Perfect for those looking to practice for a longer time
                      and improve their technique
                    </p>
                    <button
                      className="btn btn-danger text-white"
                      onClick={handleBookNow}
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center">Loading details for {activeTab}...</p>
        )}
      </div>
      <section>
        <div className="container">
          <h4
            className="my-4"
            style={{ textAlign: "center", fontWeight: "bold" }}
          >
            Monthly Plans
          </h4>
          {monthlyPackage ? (
            <div className="row">
              {monthlyPackage.monthlyPackages?.map((session, index) => (
                <div key={index} className="col-12 col-md-6 col-lg-4 mb-4">
                  <div className="card shadow-sm h-100">
                    <div className="card-body">
                      <h5 className="card-title" style={{ fontWeight: "bold" }}>
                        {session.description} - ₹{session.price}
                      </h5>
                      <p style={{ fontSize: "13px" }}>
                        {session.descriptionValidity}
                      </p>
                      <button
                        className="btn btn-danger text-white"
                        onClick={handleBookNow}
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center">
              Loading monthly plans for {activeTab}...
            </p>
          )}
        </div>
      </section>
      
        
      <section>
        <div className="container m-4">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <p className="font-bold" style={{ color: "red", fontWeight: "bold" }}>
                CONTACT US
              </p>
              <h2 style={{ fontWeight: "bold" }}>Free Hit Zone</h2>
              <p>
                Have a question about our products or services? Send us a message,
                and we will get back to you as soon as possible.
              </p>
              <p>
                <strong>Address:</strong> Gyan Khand 2, Indirapuram, Ghaziabad, Uttar
                Pradesh 201010
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:freehitzone@gmail.com">freehitzone@gmail.com</a>
              </p>
              <p>
                <strong>Contact:</strong> +91-9654606171
              </p>
              <p>
                <strong>Open today:</strong> 05:00 am – 11:00 pm
              </p>
              
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.5564465984903!2d77.34863252528952!3d28.643052975659035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb7f1df8baff:0x472436b3bd6c1325!2sGyan%20Khand%20II%2C%20Indirapuram%2C%20Ghaziabad%2C%20Uttar%20Pradesh%20201014!5e0!3m2!1sen!2sin!4v1732206170886!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Google Map Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ViewAllSports;

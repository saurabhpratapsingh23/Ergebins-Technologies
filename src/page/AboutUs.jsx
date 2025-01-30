import React from "react";
import Footer from "./Footer";
// import ContactUs from "./ContactUs";

// import Carousel from "./Carousel";
import cricketNetImages from "../images/cricket_net.jpg";
import table_tennis from "../images/tt2.jpg";
// import cricket_net_2 from "../images/cricket_net_2.jpg";

const AboutUs = () => {
  return (
    <div>
    <div className="container-fluid mb-2">
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8">
            <h1 className="text-color">Welcome to FreeHit Zone</h1>

            {/* Toggle Buttons */}
            <ul className="nav nav-pills nav-fill navtop tabs-cri mt-3">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="menu1-tab"
                  data-bs-toggle="pill"
                  href="#menu1"
                  role="tab"
                  aria-controls="menu1"
                  aria-selected="true"
                >
                  Cricket
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="menu2-tab"
                  data-bs-toggle="pill"
                  href="#menu2"
                  role="tab"
                  aria-controls="menu2"
                  aria-selected="false"
                >
                  Table Tennis
                </a>
              </li>
            </ul>

            {/* Tab Content */}
            <div className="tab-content mt-3">
              <div
                className="tab-pane fade show active"
                id="menu1"
                role="tabpanel"
                aria-labelledby="menu1-tab"
              >
                <p>
                  Welcome to FreeHit Zone, the perfect venue for cricket
                  enthusiasts to showcase their talent and enjoy thrilling
                  matches! Our cricket ground is designed to provide players
                  with an unforgettable experience, whether you're here for a
                  casual game with friends or a competitive match. With
                  top-notch facilities and a well-maintained pitch, FreeHit Zone
                  is your go-to destination for cricket fun and fitness.
                </p>

                <p>
                  We offer flexible game plans to suit your preferences and
                  schedule, including 10-over, 20-over, and 40-over formats.
                  Booking your game is simple – just visit our website, choose
                  your preferred plan, and lock in your slot. At FreeHit Zone,
                  we ensure a seamless experience so you can focus on what you
                  love most – cricket! Gather your team, gear up, and get ready
                  to hit those boundaries. Your ultimate cricketing experience
                </p>
              </div>
              <div
                className="tab-pane fade"
                id="menu2"
                role="tabpanel"
                aria-labelledby="menu2-tab"
              >
                <p>
                  Welcome to FreeHit Zone, the perfect venue for cricket
                  enthusiasts to showcase their talent and enjoy thrilling
                  matches! Our cricket ground is designed to provide players
                  with an unforgettable experience, whether you're here for a
                  casual game with friends or a competitive match. With
                  top-notch facilities and a well-maintained pitch, FreeHit Zone
                  is your go-to destination for cricket fun and fitness.
                </p>

                <p>
                  We offer flexible game plans to suit your preferences and
                  schedule, including 10-over, 20-over, and 40-over formats.
                  Booking your game is simple – just visit our website, choose
                  your preferred plan, and lock in your slot. At FreeHit Zone,
                  we ensure a seamless experience so you can focus on what you
                  love most – cricket! Gather your team, gear up, and get ready
                  to hit those boundaries. Your ultimate cricketing experience
                </p>
              </div>
            </div>

            {/* <Link to="/turf/all" className="btn bg-color custom-bg-text mt-3">
              <b>Start Booking</b>
            </Link> */}
          </div>
          <div className="col-md-4">
            <img
              src={cricketNetImages}
              alt="Logo"
              width="450"
              height="auto"
              className="home-image"
            />
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-4">
            <img
              src={table_tennis}
              alt="Logo"
              width="400"
              height="auto"
              className="home-image"
            />
          </div>
          <div className="col-md-8">
            <h1 className="text-color ms-5">Table Tennis Court</h1>
            <p className="ms-5">
              Welcome to FreeHit Zone, your ultimate destination for an exciting
              table tennis experience! Our court is equipped with two
              high-quality TT tables, ensuring that players of all skill levels
              have an exceptional time. Whether you're a seasoned player looking
              to sharpen your skills or just starting out, our facilities cater
              to everyone. Step into a vibrant environment designed for fun,
              fitness, and friendly competition. Booking a table has never been
              easier – simply visit our website to secure your slot and enjoy a
              hassle-free experience. At FreeHit Zone, we are committed to
              providing a seamless booking process and a great space for table
              tennis enthusiasts. So grab your paddle, rally your friends, and
              get ready to serve up some serious fun. See you at the court!
            </p>
            {/* <Link to="/turf/all" className="btn bg-color bg-red custom-bg-text ms-5">
              <b>Start Booking</b>
            </Link> */}
          </div>
        </div>
      </div>
      <hr />
     
    </div>
     <Footer />
     </div>
  );
};

export default AboutUs;

import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../images/logo.png";
import RoleNav from "./RoleNav";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  // const [role, setRole] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

   

    window.addEventListener("scroll", handleScroll);
    // handleRoleChange();
    // window.addEventListener("roleChange", handleRoleChange);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      // window.removeEventListener("roleChange", handleRoleChange);
    };
  }, [location]);

  const handleWhatsAppClick = () => {
    const phoneNumber = "9899516001";
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.location.href = whatsappUrl;
  };

  return (
    <header
      className={`navbar navbar-expand-lg bg-black text-color ${isSticky ? "sticky-top" : ""
        }`}
      style={{ transition: "all 0.3s ease-in-out" }}
    >
      <div className="container-fluid text-color">
        <div className="d-flex align-items-center">
          <img
            src={logo}
            width="80"
            height="80"
            className="d-inline-block align-top me-3"
            alt="Logo"
          />
          <Link to="/" className="navbar-brand">
            <i>
              <b className="text-white">Free Hit Zone</b>
            </i>
          </Link>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ backgroundColor: "red" }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <nav className="navbar-nav ">
            <Link to="/" className="nav-link text-white ">
              Home
            </Link>
            <Link to="/about" className="nav-link text-white">
              About
            </Link>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link to="/services/cricket" className="dropdown-item">
                    Cricket
                  </Link>
                </li>
                <li>
                  <Link to="/services/tennis" className="dropdown-item">
                    Table Tennis
                  </Link>
                </li>
              </ul>
            </li>

            <Link to="/contact" className="nav-link text-white">
              Contact
            </Link>
            <RoleNav />
          </nav>
          <div className="d-flex align-items-center">
            <button
              className="btn btn-outline-danger me-2"
              onClick={handleWhatsAppClick}
            >
              <i className="bi bi-telephone-fill me-2"></i>
              <span>WhatsApp</span>
            </button>
            <button
              className="btn btn-outline-danger"
              onClick={() =>
                window.location.href =
                "https://maps.app.goo.gl/WgNUxXTDhtfReaqHA"
              }
            >
              <i className="bi bi-geo-alt-fill me-2"></i>
              <span>Get My Location</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

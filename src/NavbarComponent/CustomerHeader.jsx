import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CustomerHeader = () => {
  const navigate = useNavigate();

  const userLogout = () => {
    toast.success("Logged out successfully!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

    // Clear session storage
    sessionStorage.removeItem("active-customer");
    sessionStorage.removeItem("customer-jwtToken");

    // Emit role change event
    window.dispatchEvent(new Event("roleChange"));

    // Navigate to home
    setTimeout(() => navigate("/home"), 1000);
  };

  return (
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
      <li className="nav-item">
        <Link to="/customer/wallet" className="nav-link active" aria-current="page">
          <b className="text-white">My Wallet</b>
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/user/ground/bookings" className="nav-link active" aria-current="page">
          <b className="text-white">Booked Turfs</b>
        </Link>
      </li>

      <li className="nav-item">
        <Link to="#" className="nav-link active" aria-current="page" onClick={userLogout}>
          <b className="text-white">Logout</b>
        </Link>
      </li>
      <ToastContainer />
    </ul>
  );
};

export default CustomerHeader;

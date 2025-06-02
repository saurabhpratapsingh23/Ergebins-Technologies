import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminHeader = () => {
  const navigate = useNavigate();

  const adminLogout = () => {
    toast.success("Logged out successfully!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

    sessionStorage.removeItem("admin");
    sessionStorage.removeItem("admin-jwtToken");

    window.dispatchEvent(new Event("roleChange"));

    setTimeout(() => navigate("/home"), 1000);
  };

  return (
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
      <li className="nav-item">
        <Link to="/AddSports" className="nav-link active" aria-current="page">
          <b className="text-white">Add Sports</b>
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/viewAllSports" className="nav-link active" aria-current="page">
          <b className="text-white">View All Sports</b>
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/viewAllCustomer" className="nav-link active" aria-current="page">
          <b className="text-white">View All Customers</b>
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/AllBookings" className="nav-link active" aria-current="page">
          <b className="text-white">View All Bookings</b>
        </Link>
      </li>

      <li className="nav-item">
        <Link to="#" className="nav-link active" aria-current="page" onClick={adminLogout}>
          <b className="text-white">Logout</b>
        </Link>
      </li>
      <ToastContainer />
    </ul>
  );
};

export default AdminHeader;

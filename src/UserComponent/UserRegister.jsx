import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "../page/Footer";

const UserRegister = () => {
  const [user, setUser] = useState({
    emailId: "",
    mobileNumber: "",
    password: "",
    role: "customer",
  });

  const navigate = useNavigate();

  const handleUserInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const saveUser = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        `http://54.165.1.101:8085/api/user/register`,
        user
      );

      const res = response.data;

      if (res.success) {
        toast.success(res.responseMessage, {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });

        setTimeout(() => {
          navigate("/user/verifyotp");
        }, 1000);
      } else {
        toast.error(res.responseMessage || "Server error", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    } catch (error) {
      toast.error("Failed to register user. Please try again.", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <div
      style={{
        // backgroundImage: "url('/path/to/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div
        className="container my-5"
        style={{
          boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          borderRadius: '10px',
          background: "rgba(248, 249, 250, 0.9)",
        }}
      >
        <div className="row align-items-center justify-content-center py-4 px-4">

          <div className="col-lg-6">
            <div
              className="card border-0 shadow-lg"
              style={{
                borderRadius: "15px",
                overflow: "hidden",
              }}
            >
              <div
                className="card-header text-white text-center"
                style={{
                  background: "linear-gradient(45deg, #ff4d4f, #ff6a3d)",
                }}
              >
                <h5 className="card-title mb-0">Register User</h5>
              </div>
              <div className="card-body p-4">
                <form onSubmit={saveUser}>
                  <div className="mb-3">
                    <label htmlFor="emailId" className="form-label">
                      <b>Email</b>
                    </label>
                    <input
                      type="email"
                      className="form-control rounded-pill"
                      id="emailId"
                      name="emailId"
                      onChange={handleUserInput}
                      value={user.emailId}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="mobileNumber" className="form-label">
                      <b>Mobile Number</b>
                    </label>
                    <input
                      type="tel"
                      className="form-control rounded-pill"
                      id="mobileNumber"
                      name="mobileNumber"
                      onChange={handleUserInput}
                      value={user.mobileNumber}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      <b>Password</b>
                    </label>
                    <input
                      type="password"
                      className="form-control rounded-pill"
                      id="password"
                      name="password"
                      onChange={handleUserInput}
                      value={user.password}
                    />
                  </div>

                  <div className="d-flex align-items-center justify-content-center">
                    <button
                      type="submit"
                      className="btn text-white px-5 py-2 rounded-pill"
                      style={{
                        background: "linear-gradient(45deg, #ff4d4f, #ff6a3d)",
                        border: "none",
                        fontSize: "1rem",
                        fontWeight: "bold",
                      }}
                    >
                      Register
                    </button>
                  </div>
                  <div className="d-flex align-items-center justify-content-center">
                    <b>Already have an account?</b>
                    <a
                      href="/user/login"
                      // className="px-5 py-2"
                      style={{
                        color: "linear-gradient(45deg, #ff4d4f, #ff6a3d)",
                        padding: "0.5rem 1rem",
                        border: "none",
                        fontSize: "1rem",
                        fontWeight: "bold",
                      }}
                    >
                      Login
                    </a>
                  </div>
                </form>
                <ToastContainer />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserRegister;

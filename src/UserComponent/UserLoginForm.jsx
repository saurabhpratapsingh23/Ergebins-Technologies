import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Footer from "../page/Footer";

const UserLoginForm = () => {
  let navigate = useNavigate();

  const [loginRequest, setLoginRequest] = useState({
    mobileNumber: "",
    password: "",
    role: "customer",
  });

  const handleUserInput = (e) => {
    setLoginRequest({ ...loginRequest, [e.target.name]: e.target.value });
  };

  const loginAction = (e) => {
    e.preventDefault();

    if (!loginRequest.role) {
      toast.error("Please select a user role", {
        position: "top-center",
        autoClose: 1000,
      });
      return;
    }

    if (!loginRequest.mobileNumber || !loginRequest.password) {
      toast.error("Mobile number and password are required", {
        position: "top-center",
        autoClose: 1000,
      });
      return;
    }

    fetch("http://54.165.1.101:8085/api/user/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginRequest),
    })
      .then((result) => result.json())
      .then((res) => {
        if (res.success) {
          if (res.user.jwtToken) {
            sessionStorage.setItem("user-role", JSON.stringify(res.user));
            sessionStorage.setItem("user-token", res.user.jwtToken);

            toast.success(res.responseMessage, {
              position: "top-center",
              autoClose: 1000,
            });

            // Navigate to home after a short delay
            setTimeout(() => {
              navigate("/GameBooking");
            }, 1000);
          } else {
            toast.error("Login failed. Token not provided.", {
              position: "top-center",
              autoClose: 1000,
            });
          }
        } else {
          toast.error(res.responseMessage || "Login failed.", {
            position: "top-center",
            autoClose: 1000,
          });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("Unable to connect to server. Please try again.", {
          position: "top-center",
          autoClose: 1000,
        });
      });
  };

  return (
    <div>
      <div className="my-5 d-flex align-items-center justify-content-center">
        <div
          className="card"
          style={{
            width: "30rem",
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            borderRadius: "10px",
            background: "#f8f9fa",
          }}
        >
          <div
            className="card-header text-center text-white"
            style={{
              background: "linear-gradient(45deg, #ff4d4f, #ff6a3d)",
              borderRadius: "10px 10px 0 0",
            }}
          >
            <h4>User Login</h4>
          </div>
          <div className="card-body p-4">
            <form onSubmit={loginAction}>
              <div className="mb-3">
                <label htmlFor="role" className="form-label">
                  <b>User Role</b>
                </label>
                <select
                  onChange={handleUserInput}
                  className="form-control rounded-pill"
                  name="role"
                  value={loginRequest.role}
                >
                  <option value="customer">Customer</option>
                  <option value="admin">Admin</option>
                </select>
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
                  value={loginRequest.mobileNumber}
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
                  value={loginRequest.password}
                  autoComplete="on"
                />
              </div>

              <div className="text-center">
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
                  Login
                </button>
              </div>
              <div className="text-center">
                <a
                  href="/user/customer/forgot-password"
                  style={{
                    color: "#ff4d4f",
                    fontSize: "1rem",
                  }}
                >Forgot Password</a>
              </div>
              <div className="d-flex align-items-center justify-content-center">
                    <b>Don't have an account?</b>
                    <a
                      href="/user/customer/register"
                      // className="px-5 py-2"
                      style={{
                        color: "linear-gradient(45deg, #ff4d4f, #ff6a3d)",
                        padding: "0.5rem 1rem",
                        border: "none",
                        fontSize: "1rem",
                        fontWeight: "bold",
                      }}
                    >
                      Register
                    </a>
                  </div>
            </form>
            <ToastContainer />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserLoginForm;

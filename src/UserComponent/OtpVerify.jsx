import React, { useState } from 'react';
import Footer from '../page/Footer';

const OtpVerify = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');
  const [otpSent, setOtpSent] = useState(false);

  // Function to send OTP
  const sendOtp = async () => {
    try {
      const response = await fetch(`http://54.165.1.101:8085/api/otp/sendOtp?mobileNumber=+91${mobileNumber}`, {
        method: 'POST',
      });

      // console.log(response);

      if (response.ok) {
        setMessage('OTP sent successfully!');
        setOtpSent(true);
      } else {
        const error = await response.json();
        setMessage(`Failed to send OTP: ${error.message}`);
      }
    } catch (error) {
      setMessage(`An error occurred: ${error.message}`);
    }
  };

  // Function to verify OTP
  const verifyOtp = async () => {
    try {
      const response = await fetch(
        `http://54.165.1.101:8085/api/otp/verifyOtp?mobileNumber=+91${mobileNumber}&otp=${otp}`,
        {
          method: 'GET',
        }
      );

      if (response.ok) {
        const data = await response.json();
        setMessage('OTP verified successfully!');
        console.log(data);
      } else {
        const error = await response.json();
        setMessage(`Failed to verify OTP: ${error.message}`);
      }
    } catch (error) {
      setMessage(`An error occurred: ${error.message}`);
    }
  };

  return (
    <>
      <div className="container text-center" style={{ marginTop: '50px' }}>
        <h2>OTP Verification</h2>
        <div className="mb-3" style={{width:'50%',margin:'auto'}}>
          <label htmlFor="mobileNumber" className="form-label">
            <b>Mobile Number</b>
          </label>
          <input
            type="tel"
            className="form-control rounded-pill"
            id="mobileNumber"
            name="mobileNumber"
            onChange={(e) => setMobileNumber(e.target.value)}
            value={mobileNumber}
            placeholder="Enter mobile number without country code"
          />
        </div>
        <button
          onClick={sendOtp}
          className="btn text-white px-5 py-2 rounded-pill"
          style={{
            background: "linear-gradient(45deg, #ff4d4f, #ff6a3d)",
            border: "none",
            fontSize: "1rem",
            fontWeight: "bold",
          }}
          disabled={otpSent}
        >
          {otpSent ? 'OTP Sent' : 'Send OTP'}
        </button>

        {otpSent && (
          <>
            <div className="mb-3" style={{width:'50%',margin:'auto', marginTop: '20px'}}>
              <label htmlFor="otp" className="form-label">
                <b>Enter OTP</b>
              </label>
              <input
                type="text"
                className="form-control rounded-pill"
                id="otp"
                name="otp"
                onChange={(e) => setOtp(e.target.value)}
                value={otp}
                placeholder="Enter OTP"
              />
            </div>
            <button
              onClick={verifyOtp}
              className="btn text-white px-5 py-2 rounded-pill"
              style={{
                background: "linear-gradient(45deg, #ff4d4f, #ff6a3d)",
                border: "none",
                fontSize: "1rem",
                fontWeight: "bold",
              }}
            >
              Verify OTP
            </button>
          </>
        )}
        <p style={{ marginTop: '20px', color: 'blue' }}>{message}</p>
      </div>
      <Footer />
    </>
  );
};

export default OtpVerify;
import React, { useState } from 'react';
import Footer from '../page/Footer';

const ForgotPassword = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const [step, setStep] = useState(1); // Steps: 1 - Mobile Input, 2 - OTP, 3 - Reset Password
  const [loading, setLoading] = useState(false);

  // Check if user is registered
  const checkUser = async () => {
    setLoading(true);
    try {
      const response = await fetch(`http://54.165.1.101:8085/api/user/check?mobileNumber=+91${mobileNumber}`);
      const data = await response.json();
      if (response.ok && data.registered) {
        sendOtp();
      } else {
        setMessage('Mobile number not registered.');
        setLoading(false);
      }
    } catch (error) {
      setMessage('Error checking user registration.');
      setLoading(false);
    }
  };

  // Function to send OTP
  const sendOtp = async () => {
    try {
      const response = await fetch(`http://54.165.1.101:8085/api/forget-password/sendOtp?mobileNumber=+91${mobileNumber}`, {
        method: 'POST',
      });
      if (response.ok) {
        setMessage('OTP sent successfully!');
        setStep(2);
      } else {
        setMessage('Failed to send OTP.');
      }
    } catch (error) {
      setMessage('An error occurred while sending OTP.');
    }
    setLoading(false);
  };

  // Function to verify OTP
  const verifyOtp = async () => {
    try {
      const response = await fetch(
        `http://54.165.1.101:8085/api/otp/verifyOtp?mobileNumber=+91${mobileNumber}&otp=${otp}`,
        { method: 'GET' }
      );
      if (response.ok) {
        setMessage('OTP verified successfully!');
        setStep(3);
      } else {
        setMessage('Invalid OTP. Please try again.');
      }
    } catch (error) {
      setMessage('An error occurred while verifying OTP.');
    }
  };

  // Function to reset password
  const resetPassword = async () => {
    try {
      const response = await fetch('http://54.165.1.101:8085/api/forget-password/reset', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mobileNumber: `+91${mobileNumber}`, newPassword }),
      });
      if (response.ok) {
        setMessage('Password reset successfully!');
        setStep(1);
        setMobileNumber('');
        setOtp('');
        setNewPassword('');
      } else {
        setMessage('Failed to reset password.');
      }
    } catch (error) {
      setMessage('An error occurred while resetting password.');
    }
  };

  return (
    <>
      <div className="container text-center" style={{ marginTop: '50px' }}>
        <h2>Forgot Password</h2>

        {step === 1 && (
          <>
            <div className="mb-3" style={{ width: '50%', margin: 'auto' }}>
              <label htmlFor="mobileNumber" className="form-label"><b>Mobile Number</b></label>
              <input
                type="tel"
                className="form-control rounded-pill"
                id="mobileNumber"
                onChange={(e) => setMobileNumber(e.target.value)}
                value={mobileNumber}
                placeholder="Enter mobile number without country code"
              />
            </div>
            <button
              onClick={checkUser}
              className="btn text-white px-5 py-2 rounded-pill"
              style={{
                background: "linear-gradient(45deg, #ff4d4f, #ff6a3d)",
                border: "none",
                fontSize: "1rem",
                fontWeight: "bold",
              }}
              disabled={loading}
            >
              {loading ? 'Checking...' : 'Send OTP'}
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <div className="mb-3" style={{ width: '50%', margin: 'auto', marginTop: '20px' }}>
              <label htmlFor="otp" className="form-label"><b>Enter OTP</b></label>
              <input
                type="text"
                className="form-control rounded-pill"
                id="otp"
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

        {step === 3 && (
          <>
            <div className="mb-3" style={{ width: '50%', margin: 'auto', marginTop: '20px' }}>
              <label htmlFor="newPassword" className="form-label"><b>Set New Password</b></label>
              <input
                type="password"
                className="form-control rounded-pill"
                id="newPassword"
                onChange={(e) => setNewPassword(e.target.value)}
                value={newPassword}
                placeholder="Enter new password"
              />
            </div>
            <button onClick={resetPassword} className="btn btn-success">
              Reset Password
            </button>
          </>
        )}

        <p style={{ marginTop: '20px', color: 'blue' }}>{message}</p>
      </div>
      <Footer />
    </>
  );
};

export default ForgotPassword;
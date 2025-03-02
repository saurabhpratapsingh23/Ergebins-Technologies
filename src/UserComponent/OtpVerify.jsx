import React, { useState, useEffect } from "react";
import { Form, Button, Alert, Container } from "react-bootstrap";

const OtpVerify = () => {
    const [mobile, setMobile] = useState("");
    const [otp, setOtp] = useState("");
    const [otpSent, setOtpSent] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [timer, setTimer] = useState(120); // 2 minutes timer

    // Function to start the timer
    useEffect(() => {
        let interval;
        if (otpSent && timer > 0) {
            interval = setInterval(() => {
                setTimer((prevTime) => prevTime - 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [otpSent, timer]);

    // Function to send OTP
    const sendOtp = async () => {
        setError("");
        setSuccess("");

        if (mobile.length !== 10) {
            setError("Please enter a valid 10-digit mobile number.");
            return;
        }

        try {
            const response = await fetch(
                `http://localhost:8085/api/otp/sendOtp?mobileNumber=+91${mobile}`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/x-www-form-urlencoded" }
                }
            );

            if (!response.ok) throw new Error(`Error ${response.status}: ${response.statusText}`);

            setOtpSent(true);
            setTimer(120); // Reset timer to 2 minutes
            setSuccess("OTP sent successfully!");
        } catch (error) {
            setError("Failed to send OTP. Please try again.");
        }
    };

    // Function to verify OTP
    const verifyOtp = async () => {
        setError("");
        setSuccess("");

        if (!otp) {
            setError("Please enter the OTP.");
            return;
        }

        try {
            const response = await fetch(
                `http://localhost:8085/api/otp/verifyOtp?mobileNumber=+91${mobile}&otp=${otp}`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/x-www-form-urlencoded" }
                }
            );

            if (!response.ok) throw new Error(`Error ${response.status}: ${response.statusText}`);

            setSuccess("OTP verified successfully! Redirecting...");
            setTimeout(() => (window.location.href = "/user/login"), 2000);
        } catch (error) {
            setError("Invalid OTP. Please try again.");
        }
    };

    return (
        <Container className="mt-4">
            <h3 className="mb-3">OTP Verification</h3>

            {error && <Alert variant="danger">{error}</Alert>}
            {success && <Alert variant="success">{success}</Alert>}

            {!otpSent ? (
                <Form>
                    <Form.Group controlId="mobile">
                        <Form.Label>Enter Mobile Number</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter 10-digit number"
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)}
                            maxLength={10}
                        />
                    </Form.Group>
                    <Button variant="primary" className="mt-3" onClick={sendOtp}>
                        Send OTP
                    </Button>
                </Form>
            ) : (
                <Form>
                    <Form.Group controlId="otp">
                        <Form.Label>Enter OTP</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter OTP"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                        />
                    </Form.Group>

                    <Button variant="success" className="mt-3" onClick={verifyOtp}>
                        Verify OTP
                    </Button>

                    {timer > 0 ? (
                        <p className="mt-2">Resend OTP in {timer}s</p>
                    ) : (
                        <Button variant="secondary" className="mt-2" onClick={sendOtp}>
                            Resend OTP
                        </Button>
                    )}
                </Form>
            )}
        </Container>
    );
};

export default OtpVerify;
import "./App.css";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./page/AboutUs";
import ContactUs from "./page/ContactUs";
import Header from "./NavbarComponent/Header";
import HomePage from "./GroundComponent/ViewAllSports";
import UserRegister from "./UserComponent/UserRegister";
import UserLoginForm from "./UserComponent/UserLoginForm";
// import AddGroundForm from "./GroundComponent/AddGroundForm";
// import Ground from "./GroundComponent/Ground";
// import ViewAllCustomer from "./UserComponent/ViewAllCusomer";
// import ViewMyBooking from "./BookingComponent/ViewMyBooking";
// import ViewAllBooking from "./BookingComponent/ViewAllBooking";
// import VerifyBooking from "./BookingComponent/VerifyBooking";
// import MyWallet from "./UserComponent/MyWallet";
// import AddReview from "./ReviewComponent/AddReview";
// import ViewAllGround from "./GroundComponent/ViewAllGround";
// import ViewAllTurf from "./GroundComponent/ViewAllSports";
import ViewAllSports from "./GroundComponent/ViewAllSports";
import Booking from "./BookingComponent/Booking";
// import './path-to-classy-navbar.css'; // Update the path as necessary
import UserBooking from "./BookingComponent/UserBooking";
import GameBooking from "./page/GameBooking";
// import Footer from "./page/Footer";
// import Services from "./page/Services";
import Cricket from "./page/Services/Cricket";
import TableTennis from "./page/Services/TableTennis";
import OtpVerify from "./UserComponent/OtpVerify";
import ForgetPassword from "./UserComponent/ForgetPassword";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/home/all/hotel/location" element={<HomePage />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="about" element={<AboutUs />} />

        {/* <Route path="user/hotel/register" element={<UserRegister />} /> */}
        <Route path="user/customer/register" element={<UserRegister />} /> 
         <Route path="user/admin/register" element={<UserRegister />} /> 
        <Route path="/user/login" element={<UserLoginForm />} />
        <Route path="/user/verifyotp" element={<OtpVerify />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/user/customer/forget-password" element={<ForgetPassword />} />

        {/* <Route path="admin/ground/add" element={<AddGroundForm />} />
        <Route path="book/ground/add" element={<AddGroundForm />} />
        <Route path="user/customer/all" element={<ViewAllCustomer />} />

        <Route path="/book/ground/:groundId" element={<Ground />} />
        <Route path="user/ground/bookings" element={<ViewMyBooking />} />
        <Route path="user/ground/booking/all" element={<ViewAllBooking />} />
        <Route
          path="/user/admin/verify/booking/:bookingId"
          element={<VerifyBooking />}
        /> */}
        {/* <Route path="/customer/wallet" element={<MyWallet />} />
        <Route path="/ground/review/add" element={<AddReview />} />
        <Route path="/admin/ground/all" element={<ViewAllGround />} /> */}
        <Route path="/freeHitZone/AllSports" element={<ViewAllSports />} />
        <Route path="/Gamebooking" element={<GameBooking/>} />
        <Route path="/UserBooking"element={<UserBooking/>} />
        <Route path="/services/cricket" element={<Cricket/>} />
        <Route path="/services/tennis" element={<TableTennis/>} />
        {/* <Route path="user/admin/booking/all" element={<ViewAllBooking />} />
        <Route path="user/hotel/bookings" element={<ViewMyBooking />} /> */}
        
      </Routes>
   
    </div>
    
  );
}

export default App;

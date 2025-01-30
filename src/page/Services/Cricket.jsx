// import React from 'react'
// import Footer from '../Footer'
// import { Link } from 'react-router-dom'
// import img1 from '../../images/a1.jpg'
// import { Card, Row, Col, Container } from "react-bootstrap";
// import f1 from '../../images/f1.jpg'
// import f2 from '../../images/f2.jpg'
// import f3 from '../../images/f3.jpg'
// import f4 from '../../images/f4.jpg'
// import f5 from '../../images/f5.jpg'
// import f6 from '../../images/f6.jpg'

// const Cricket = () => {
//   return (
//    <>
//    <section
//         className="breadcrumb-area bg-img bg-overlay jarallax service-bg"
        
//       >
//         <div className="container h-100">
//           <div className="row h-100 align-items-center">
//             <div className="col-12">
//               <div className="breadcrumb-content text-center">
//                 <h2 className="page-title text-white">Cricket</h2>
//                 <nav aria-label="breadcrumb">
//                   <ol className="breadcrumb justify-content-center">
//                     <li className="breadcrumb-item">
//                       <Link to="/">
//                         <i clLinkssName="icon_house_alt"></i> Home
//                       </Link>
//                     </li>
//                     <li className="breadcrumb-item active text-white" aria-current="page">
//                       Cricket
//                     </li>
//                   </ol>
//                 </nav>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <div className="about-us-area section-padding-80-0 clearfix my-5">
//         <div className="container">
//           <div className="row align-items-center">
//             <div className="col-12 col-lg-6">
//               <div className="about-us-content mb-80">
//                 <h3 className="wow fadeInUp" data-wow-delay="100ms">
//                   Elevate Your Cricket Skills with Our Advanced Bowling Machine!
//                 </h3>
//                 <p className="wow fadeInUp" data-wow-delay="300ms" style={{textAlign:'justify'}}>
//                   At Free Hit Zone, take your cricket practice to the next level
//                   with our advanced bowling machine. Whether you're looking to
//                   perfect your batting technique or improve your reaction time,
//                   our machine delivers consistent and varied deliveries to help
//                   you train like a pro. With speeds of up to 120 km/h and
//                   different bowling variations—such as spin, fast, slow, and
//                   swing—you can simulate real match conditions and refine every
//                   aspect of your game. From mastering shots to improving your
//                   footwork, our bowling machine ensures you get the practice
//                   you need to perform under pressure. Ready to push your
//                   limits? Our bowling machine is here to take you there!
//                 </p>
//               </div>
//             </div>
//             <div className="col-12 col-lg-6">
//               <div
//                 className="about-video-area mb-80 wow fadeInUp"
//                 data-wow-delay="100ms"
//               >
//                 <img src={img1} alt="Bowling Machine" 
//                 style={{width:'100%',borderRadius:'10px'}}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>


//       <div className="why-choose-us-area section-padding-100 clearfix bg-gray package">
//       <div className="container">
//         {/* Section Heading */}
//         <div className="section-heading text-center mb-4">
//           <h2>Packages:</h2>
//           <p style={{ width: "90%", margin: "0 auto", fontSize: "18px", color: "#000" }}>
//             Perfect your game at Free Hit Zone with our flexible and affordable cricket practice sessions.
//             Whether you’re looking for a quick practice or a long session, we’ve got you covered!
//           </p>
//         </div>

//         {/* Package Cards */}
//         <div className="row">
//           {/* Card 1 */}
//           <div className="col-md-6 col-xl-4">
//             <div className="card mb-4 shadow-sm">
//               <div className="card-body">
//                 <h4 className="card-title">10 Over Session – ₹149</h4>
//                 <p className="card-text">Ideal for a quick practice session to sharpen your skills.</p>
//                 <a  className="btn btn-primary">
//                   Book Now
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* Card 2 */}
//           <div className="col-md-6 col-xl-4">
//             <div className="card mb-4 shadow-sm">
//               <div className="card-body">
//                 <h4 className="card-title">20 Over Session – ₹249</h4>
//                 <p className="card-text">
//                   Perfect for those looking to practice for a longer time and improve their technique.
//                 </p>
//                 <a  className="btn btn-primary">
//                   Book Now
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* Card 3 */}
//           <div className="col-md-6 col-xl-4">
//             <div className="card mb-4 shadow-sm">
//               <div className="card-body">
//                 <h4 className="card-title">40 Over Session – ₹349</h4>
//                 <p className="card-text">
//                   For serious players who want to experience a full match-like practice session.
//                 </p>
//                 <a  className="btn btn-primary">
//                   Book Now
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//       <Container className="py-5">
//       <h2 className="text-center mb-4">Features</h2>
//       <p className="text-center mb-5">
//         Experience the best indoor cricket facility that provides everything you need to take your game to the next level!
//       </p>
//       <Row xs={1} md={3} className="g-4">
//         <Col>
//           <Card className="h-100">
//             <Card.Img variant="top" src={f1} alt="Indoor Practice with Bowling Machine" />
//             <Card.Body>
//               <Card.Title>Indoor Practice with Bowling Machine</Card.Title>
//               <Card.Text>
//                 Practice with a high-speed bowling machine delivering speeds of up to 120 km/h, allowing you to fine-tune your shots and techniques.
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col>
//           <Card className="h-100">
//             <Card.Img variant="top" src={f2} alt="State-of-the-Art Net Practice Facility" />
//             <Card.Body>
//               <Card.Title>State-of-the-Art Net Practice Facility</Card.Title>
//               <Card.Text>
//                 Play in premium quality indoor nets designed to replicate an outdoor match experience, regardless of the weather.
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col>
//           <Card className="h-100">
//             <Card.Img variant="top" src={f3} alt="Top-Quality Cricket Kit & Turf Pitch" />
//             <Card.Body>
//               <Card.Title>Top-Quality Cricket Kit & Turf Pitch</Card.Title>
//               <Card.Text>
//                 We provide premium cricket kits and natural turf pitches that offer a true-to-life playing experience.
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col>
//           <Card className="h-100">
//             <Card.Img variant="top" src={f4} alt="Variety of Bowling Variations" />
//             <Card.Body>
//               <Card.Title>Variety of Bowling Variations</Card.Title>
//               <Card.Text>
//                 Practice different bowling styles, including spin, fast, slow, and swing. Perfect for refining your batting skills.
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col>
//           <Card className="h-100">
//             <Card.Img variant="top" src={f5} alt="Monthly Subscription for Consistent Practice" />
//             <Card.Body>
//               <Card.Title>Monthly Subscription for Consistent Practice</Card.Title>
//               <Card.Text>
//                 Our facility supports regular practice arrangements to ensure you can consistently improve your skills.
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col>
//           <Card className="h-100">
//             <Card.Img variant="top" src={f6} alt="Cricket Kits Available for All Ages!" />
//             <Card.Body>
//               <Card.Title>Cricket Kits Available for All Ages!</Card.Title>
//               <Card.Text>
//                 We provide cricket kits for teenagers and adults, so everyone can enjoy high-quality equipment during practice.
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//       <section
//         id="contact"
//         className="why-choose-us-area section-padding-100 clearfix contact-us bg-gray"
//         style={{ marginTop: "0px" }}
//       >
//         <div className="container">
//           <div className="row">
//             <div className="col-12 col-lg-6">
//               <div className="section-heading">
//                 <div className="small-text-red">Contact Us</div>
//                 <h2>Free Hit Zone</h2>
//                 <div className="contact-info mb-30">
//                   <p>
//                     Have a question about our products, or about how we can
//                     match your specific needs? Send us a message, and we will
//                     get back to you as soon as we can.
//                   </p>
//                 </div>
//                 <p>
//                   <strong>Address:</strong> Gyan Khand 2, Indirapuram,
//                   Indrapuram, Ghaziabad, Uttar Pradesh 201010
//                 </p>
//                 <p>
//                   <strong>Email:</strong> <a href="mailto:freehitzone@gmail.com">freehitzone@gmail.com</a>
//                 </p>
//                 <p>
//                   <strong>Open today:</strong> 07:00 am – 10:00 pm
//                 </p>
//               </div>
//             </div>
//             <div className="col-12 col-lg-6">
//               <div className="map-area">
//                 <div id="map">
//                   <iframe
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.5564465984903!2d77.34863252528952!3d28.643052975659035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfac9a3efa4df%3A0xedcadfe5e0e5bee0!2sGyan%20Khand%20II%2C%20Indirapuram%2C%20Ghaziabad%2C%20Uttar%20Pradesh%20201014!5e0!3m2!1sen!2sin!4v1732206170886!5m2!1sen!2sin"
//                     width="100%"
//                     height="400"
//                     style={{ border: 0 }}
//                     allowFullScreen
//                     loading="lazy"
//                     referrerPolicy="no-referrer-when-downgrade"
//                   ></iframe>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//    <Footer />
//    </>
//   )
// }

// export default Cricket
import React, { useState, useEffect } from 'react';
import Footer from '../Footer';
import ContactUs from '../ContactUs';
import { Link } from 'react-router-dom';
import img1 from '../../images/a1.jpg';
import { Card, Row, Col, Container } from 'react-bootstrap';
import f1 from '../../images/f1.jpg';
import f2 from '../../images/f2.jpg';
import f3 from '../../images/f3.jpg';
import f4 from '../../images/f4.jpg';
import f5 from '../../images/f5.jpg';
import f6 from '../../images/f6.jpg';

const Cricket = () => {
  const [regularPlans, setRegularPlans] = useState([]);
  const [monthlyPlans, setMonthlyPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch regular plans
  useEffect(() => {
    const fetchRegularPlans = async () => {
      try {
        const response = await fetch('http://54.165.1.101:8085/api/freeHitZone/id?sportsId=1');
        if (!response.ok) {
          throw new Error('Failed to fetch regular plans');
        }
        const data = await response.json();
        setRegularPlans(data.sportsDescription);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRegularPlans();
  }, []);

  // Fetch monthly plans
  useEffect(() => {
    const fetchMonthlyPlans = async () => {
      try {
        const response = await fetch('http://54.165.1.101:8085/api/freeHitZone/monthlyPackage/id?sportsId=1');
        if (!response.ok) {
          throw new Error('Failed to fetch monthly plans');
        }
        const data = await response.json();
        setMonthlyPlans(data.monthlyPackages);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchMonthlyPlans();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
       {/* Breadcrumb Area */}
       <section className="breadcrumb-area bg-img bg-overlay jarallax" style={{ backgroundImage: 'url(img/bg-img/cri-b.jpg)' }}>
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12">
              <div className="breadcrumb-content text-center">
                <h2 className="page-title">Cricket</h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item"><a href="/home"><i className="icon_house_alt"></i> Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Cricket</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="about-us-area section-padding-80-0 clearfix my-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6">
              <div className="about-us-content mb-80">
                <h3 className="wow fadeInUp" data-wow-delay="100ms">
                  Elevate Your Cricket Skills with Our Advanced Bowling Machine!
                </h3>
                <p className="wow fadeInUp" data-wow-delay="300ms" style={{ textAlign: 'justify' }}>
                  At Free Hit Zone, take your cricket practice to the next level with our advanced bowling machine. Whether you're looking to perfect your batting technique or improve your reaction time, our machine delivers consistent and varied deliveries to help you train like a pro. With speeds of up to 120 km/h and different bowling variations—such as spin, fast, slow, and swing—you can simulate real match conditions and refine every aspect of your game. From mastering shots to improving your footwork, our bowling machine ensures you get the practice you need to perform under pressure. Ready to push your limits? Our bowling machine is here to take you there!
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="about-video-area mb-80 wow fadeInUp" data-wow-delay="100ms">
                <img src={img1} alt="Bowling Machine" style={{ width: '100%', borderRadius: '10px' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Regular Plans Section */}
      <div className="why-choose-us-area section-padding-100 clearfix bg-gray package">
        <div className="container">
          <div className="section-heading text-center mb-4">
            <strong>
              <h2 style={{ fontSize: 'bold' }}>Packages:</h2>
            </strong>
            <p style={{ width: '90%', margin: '0 auto', fontSize: '18px', color: '#000' }}>
              Perfect your game at Free Hit Zone with our flexible and affordable cricket practice sessions. Whether you’re looking for a quick practice or a long session, we’ve got you covered!
            </p>
          </div>

          {/* Regular Plans Cards */}
          <div className="row">
            {regularPlans.map((plan) => (
              <div className="col-md-6 col-xl-4" key={plan.id}>
                <div className="card mb-4 shadow-sm">
                  <div className="card-body">
                    <h4 className="card-title">{plan.description} – ₹{plan.price}</h4>
                    <p className="card-text">Ideal for a quick practice session to sharpen your skills.</p>
                    <a className="btn btn-danger" href="/GameBooking">
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Monthly Plans Section */}
      <div className="why-choose-us-area section-padding-100 clearfix bg-gray package">
        <div className="container">
          <div className="section-heading text-center" style={{ margin: '30px 0', textAlign: 'center', width: '100%' }}>
            <h3>Monthly Plans</h3>
          </div>
          <div className="row">
            {monthlyPlans.map((plan) => (
              <div className="col-md-6 col-xl-4" key={plan.id}>
                <div className="card mb-4 shadow-sm">
                  <div className="card-body">
                    <h4 className="card-title">{plan.description} – ₹{plan.price}</h4>
                    <p className="card-text">{plan.descriptionValidity}</p>
                    <a className="btn btn-danger" href="/GameBooking">
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <Container className="py-5">
        <h2 className="text-center mb-4">Features</h2>
        <p className="text-center mb-5">
          Experience the best indoor cricket facility that provides everything you need to take your game to the next level!
        </p>
        <Row xs={1} md={3} className="g-4">
          <Col>
            <Card className="h-100">
              <Card.Img variant="top" src={f1} alt="Indoor Practice with Bowling Machine" />
              <Card.Body>
                <Card.Title>Indoor Practice with Bowling Machine</Card.Title>
                <Card.Text>
                  Practice with a high-speed bowling machine delivering speeds of up to 120 km/h, allowing you to fine-tune your shots and techniques.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="h-100">
              <Card.Img variant="top" src={f2} alt="State-of-the-Art Net Practice Facility" />
              <Card.Body>
                <Card.Title>State-of-the-Art Net Practice Facility</Card.Title>
                <Card.Text>
                  Play in premium quality indoor nets designed to replicate an outdoor match experience, regardless of the weather.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="h-100">
              <Card.Img variant="top" src={f3} alt="Top-Quality Cricket Kit & Turf Pitch" />
              <Card.Body>
                <Card.Title>Top-Quality Cricket Kit & Turf Pitch</Card.Title>
                <Card.Text>
                  We provide premium cricket kits and natural turf pitches that offer a true-to-life playing experience.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="h-100">
              <Card.Img variant="top" src={f4} alt="Variety of Bowling Variations" />
              <Card.Body>
                <Card.Title>Variety of Bowling Variations</Card.Title>
                <Card.Text>
                  Practice different bowling styles, including spin, fast, slow, and swing. Perfect for refining your batting skills.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="h-100">
              <Card.Img variant="top" src={f5} alt="Monthly Subscription for Consistent Practice" />
              <Card.Body>
                <Card.Title>Monthly Subscription for Consistent Practice</Card.Title>
                <Card.Text>
                  Our facility supports regular practice arrangements to ensure you can consistently improve your skills.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="h-100">
              <Card.Img variant="top" src={f6} alt="Cricket Kits Available for All Ages!" />
              <Card.Body>
                <Card.Title>Cricket Kits Available for All Ages!</Card.Title>
                <Card.Text>
                  We provide cricket kits for teenagers and adults, so everyone can enjoy high-quality equipment during practice.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Contact Us Section */}
      <section>
        <ContactUs />
      </section>

      {/* Footer Section */}
      {/* <Footer /> */}
    </>
  );
};

export default Cricket;
import React from "react";
import Footer from "./Footer";

const ContactUs = () => {
  return (
    <div>
      {/* Contact Us Section */}
      <section >
        <div className="container m-4">
          <div className="row">
          <div className="col-lg-6 col-md-6 col-12"> 
         
            <div className="">
            <p className="font-bold" style={{color:"red",fontWeight:'bold'}}>CONTACT US</p>

              <h2 className="" style={{fontWeight:"bold"}}>Free Hit Zone</h2>
              <p className="text-gray-700 mb-6">
                Have a question about our products, or about how we can match your specific needs? 
                Send us a message, and we will get back to you as soon as we can.
              </p>
              <p className="mb-4">
                <strong>Address:</strong> <br />
                Gyan Khand 2, Indirapuram, Indirapuram, Ghaziabad, Uttar Pradesh 201010
              </p>
              <p className="mb-4">
                <strong>Email:</strong> <br />
                <a
                  href="mailto:freehitzone@gmail.com"
                  className="text-orange-500 hover:underline"
                >
                  freehitzone@gmail.com
                </a>
              </p>
              <p>
                <strong>Phone:</strong> +91-9654606171
              </p>
              <p className="mb-4">
                <strong>Open today:</strong> <br />
                05:00 am – 11:00 pm
              </p>
            </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12"> 
            {/* Contact Info */}
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.5564465984903!2d77.34863252528952!3d28.643052975659035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb7f1df8baff:0x472436b3bd6c1325!2sGyan%20Khand%20II%2C%20Indirapuram%2C%20Ghaziabad%2C%20Uttar%20Pradesh%20201014!5e0!3m2!1sen!2sin!4v1732206170886!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{
                  border: 0,
                  width: "100%",
                  maxWidth: "100%",
                }}
                allowFullScreen=""
                loading="lazy"
                title="Google Map Location"
              ></iframe>
            </div>
          </div>
        

            </div>
          
     
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ContactUs;

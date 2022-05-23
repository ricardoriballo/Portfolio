import React, { useRef } from "react";
import { Button } from "@mui/material";
import emailjs from "@emailjs/browser";
import "react-phone-number-input/style.css";
import "./Contact.scss";
import { TextField } from "@mui/material";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "Ricardo_Portfolio",
        "template_y0rmhnw",
        form.current,
        "-TzHuRFpfUXdiNI88"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
  };

  return (
    <>
      <div className="contactCard">
        <div className="map">
          <h1>Where am I located right now?</h1>
          <iframe
            title="Map"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=madrid+(Ricardo%20Riballo)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.gps.ie/car-satnav-gps/">Sat Navs</a>
          </iframe>
        </div>
        <div className="formContainer">
          <h2 className="contactTitle">
            Hello friend! If you have any questions don´t hesitate and message
            me! I´ll be happy to help you.
          </h2>
          <form className="contactForm" ref={form} onSubmit={sendEmail}>
            <h3>Fill the form</h3>
            <TextField
              className="inputText"
              type="text"
              id="outlined-basic"
              label="Name"
              variant="outlined"
              name="name"
              helperText="Please enter your name"
            />
            <TextField
              className="inputText"
              type="text"
              id="outlined-basic"
              label="Email"
              variant="outlined"
              name="email"
              helperText="Please enter your email"
            />
            
            <TextField
              className="inputText"
              type="number"
              id="outlined-basic"
              label="Phone Number"
              variant="outlined"
              name="phone"
              helperText="Please enter your phone"

            />
            <TextField
             className="inputText"
              id="outlined-multiline-static"
              label="Message"
              multiline
              rows={3}
              name="message"
            />
            <Button className="btnForm" type="submit" variant="outlined">
            Send
          </Button>
          </form>
          <h3>Also can get up to date in my Social Media.</h3>
        
        </div>
      </div>
    </>
  );
};

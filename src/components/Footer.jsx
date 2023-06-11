import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";


function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Don't miss out on the vibrant and dynamic world of dance - subscribe
          to Dance News today!
        </p>
        <p className="footer-subscription-text">
          Receive the latest information about upcoming dance performances,
          workshops, and dance events in our studio. You can unsubscribe at any
          time.
        </p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>

      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">c</Link>
            <Link to="/">d</Link>
            <Link to="/">e</Link>
          </div>
          <div class="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/">Email</Link>
            <Link to="/">Phone</Link>
            <Link to="/">Address</Link>
            
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Videos</h2>
            <Link to="/">a</Link>
            <Link to="/">b</Link>
            <Link to="/">c</Link>
            <Link to="/">d</Link>
          </div>
          <div class="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
          <Link to='/' className='social-logo'>
          STUDIO&nbsp;
            <br />
              <i class="fa-solid fa-a"></i>
            </Link>
          </div>
          <small class="website-rights">Studio A © 2023</small>
          <div class="social-icons">
            <Link
              class="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>
            <Link
              class="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            <Link
              class="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </Link>
           
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;

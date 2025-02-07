import React from "react";

    function Footer() {
      return (
        <footer className="footer p-10 bg-base-200 text-base-content">
          <div>
            <span className="footer-title">Services</span>
            <a className="link link-hover">Menu</a>
            <a className="link link-hover">Reservations</a>
            <a className="link link-hover">Catering</a>
          </div>
          <div>
            <span className="footer-title">Company</span>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Careers</a>
          </div>
          <div>
            <span className="footer-title">Legal</span>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
          </div>
        </footer>
      );
    }

    export default Footer;
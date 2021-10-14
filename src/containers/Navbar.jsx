import React from "react";
import logo from "../assets/gdsc-logo.png";
import { social_media_links } from "../data/social_media_links.json";

function Navbar() {
  return (
    <nav className="navbar shadow pt-0 pt-md-2">
      <div className="container">
        <div className="navbar-brand">
          <a
            href="/"
            className="text-decoration-none text-dark text-quicksand-medium"
          >
            <img
              src={logo}
              alt="GDSC Logo"
              className="img-fluid rounded-50"
              style={{ width: 33, marginRight: 10 }}
            />
            <small>GDSC JSSSTU Links</small>
          </a>
        </div>
        <div className="ml-auto d-flex align-items-center">
          {social_media_links.map((link) => (
            <div key={"Link To - " + link.name} className="mx-2">
              <a
                href={link.href}
                className="text-decoration-none"
                title={link.name}
              >
                <i
                  className={`${link["fontawesome-icon"]} ${link.color} link-hover`}
                ></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

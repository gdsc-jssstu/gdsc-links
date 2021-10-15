import React from "react";
import logo from "../assets/gdsc-logo.png";
import { social_media_links } from "../data/social_media_links.json";
import DarkModeToggle from "react-dark-mode-toggle";

function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container">
        <div className="navbar-brand">
          <a
            href="/"
            className={`text-decoration-none text-${props.mode==='light'?'dark':'light'} text-quicksand-medium`}
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
           <DarkModeToggle
                  onChange={props.toggleMode}
                  checked={props.mode==='light'?false:true}
                  size={50}
                  speed={4}
            />
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

import React, { useState } from "react";
import { event_links } from "../data/event_links.json";

function DisplayLinks() {
  //TODO: Would be used while adding filter feature
  //   const [displayEventLinks, setDisplayEventLinks] = useState(event_links);
  const [displayEventLinks] = useState(event_links);

  return (
    <div className="container my-3">
      <div className="row">
        <div className="col-md-7 mx-1 mx-md-auto">
          {displayEventLinks.map((link) => (
            <div className={`mb-2`} key={"Link to - " + link.name}>
              <a
                type="button"
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className={`text-decoration-none btn btn-outline-${link.color} btn-block px-1 py-3 text-center text-nunito-regular`}
                style={{
                  width: "100%",
                }}
              >
                {link.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DisplayLinks;

import React, { useState, useEffect } from "react";
import axios from "axios"; 

function DisplayLinks() {
  //TODO: Would be used while adding filter feature
  //   const [displayEventLinks, setDisplayEventLinks] = useState(event_links);
  const [data, setData] = useState(null); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
 
  useEffect(() => { 
    axios.get("https://api.npoint.io/18ff90d12cad1df9272d") 
      .then((response) => { 
        setData(response.data); 
        console.log("This is the data"+response.data);
      }) 
      .catch((error) => { 
        console.error("Error fetching data: ", error); 
        setError(error); 
      }) 
      .finally(() => { 
        setLoading(false); 
      }); 
  }, []); 
 
  if (loading) return <div className="container my-5 text-center fw-bold">Loading...</div>; 
  if (error) return "Error!"; 

  return (
    <div className="container my-3">
      <div className="row">
        <div className="col-md-7 mx-1 mx-md-auto">
          {data?.event_links?.map((link) => (
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

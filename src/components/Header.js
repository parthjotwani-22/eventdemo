import "./Header.css";
import { useState, useEffect } from "react";
function Header() {
  const [onebool, setonebool] = useState(false);
  const open = () => {
    setonebool(!onebool);
  };
  const close = () => {
    setonebool(false);
  };
  useEffect(() => {
    console.log(onebool);
  });
  return (
    <div className="head">
      <div className="logo">Eventbrite</div>
      <div style={{ flex: 0.4, marginInline: "20px" }}>
        <input className="inp" placeholder="Search Something"></input>
      </div>
      <div
        style={{
          flex: 0.4,
          marginInline: "20px",
          display: "flex",
          alignItems: "flex-end",
        }}
      >
        <div className="hlinkcontain">
          <div onClick={open} className="hlink">
            Click
            {onebool ? (
              <div
                style={{
                  backgroundColor: "white",
                  alignContent: "center",
                  position: "absolute",
                  boxShadow: "2px 2px 9px #000",
                  padding: "0px 2px 20px 0px",
                }}
              >
                <ul
                  style={{
                    listStyle: "none",
                  }}
                >
                  <li className="sel">
                    <a>Create Event</a>
                  </li>
                  <li className="sel">
                    <a>Contact Us</a>
                  </li>
                </ul>
              </div>
            ) : null}
          </div>
        </div>

        <div className="hlinkcontain">
          <a className="hlink" href="https://www.eventbrite.com/">
            Log in
          </a>
        </div>
        <div className="hlinkcontain">
          <a className="hlink" href="https://www.eventbrite.com/">
            Sign in
          </a>
        </div>
      </div>
    </div>
  );
}
export default Header;

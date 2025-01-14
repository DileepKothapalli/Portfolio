import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./navbar.css";
function Navbar() {
  const [stickyClass, setStickyClass] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > -1 ? setStickyClass("sticky-nav") : setStickyClass("");
    }
  };
  return (
    <div className={`navbar ${stickyClass}`}>
      <div className="elements">
        <Link
          activeClass="active"
          to="section2"
          spy={true}
          smooth={true}
          offset={-40}
          duration={500}
        >
          <button className="btn">About</button>
        </Link>

        <Link
          activeClass="active"
          to="section3"
          spy={true}
          smooth={true}
          offset={-300}
          duration={600}
        >
          <button className="btn">Projects</button>
        </Link>

        <Link
          activeClass="active"
          to="section4"
          spy={true}
          smooth={true}
          offset={-90}
          duration={500}
        >
          <button className="btn">Contact</button>
        </Link>
        <a
          title="Drive Link"
          target="_blank"
          rel="noreferrer"
          href="https://drive.google.com/file/d/1cKOHH2XG9IHD0OG9QS90d5tIFJe33lyQ/view?usp=sharing"
          className="resume"
        >
          Resume
        </a>
        <a
          title="LinkedIn"
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/manohar-mahanthi-b00770167/"
        >
          <svg viewBox="0 0 512 512" height="34" width="34" class="linkedin">
            <path d="M186.4 142.4c0 19-15.3 34.5-34.2 34.5 -18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5C171.1 107.9 186.4 123.4 186.4 142.4zM181.4 201.3h-57.8V388.1h57.8V201.3zM273.8 201.3h-55.4V388.1h55.4c0 0 0-69.3 0-98 0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9 0 26.9 0 98 0 98h57.5c0 0 0-68.2 0-118.3 0-50-28.3-74.2-68-74.2 -39.6 0-56.3 30.9-56.3 30.9v-25.2H273.8z" />
          </svg>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/ManoharMahanthi?tab=repositories"
          aria-label="Homepage"
          title="GitHub"
        >
          <svg viewBox="71 71 370 370" height="36" width="36" class="github">
            <path d="M256 70.7c-102.6 0-185.9 83.2-185.9 185.9 0 82.1 53.3 151.8 127.1 176.4 9.3 1.7 12.3-4 12.3-8.9V389.4c-51.7 11.3-62.5-21.9-62.5-21.9 -8.4-21.5-20.6-27.2-20.6-27.2 -16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5 19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2 11.8-24.9 -41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9 19.2-49.9 -1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5 51.1 19.1 14.8-4.1 30.7-6.2 46.5-6.3 15.8 0.1 31.7 2.1 46.6 6.3 35.5-24 51.1-19.1 51.1-19.1 10.1 25.6 3.8 44.5 1.8 49.2 11.9 13 19.1 29.6 19.1 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1 12.8 34.4 0 24.9 0 44.9 0 51 0 4.9 3 10.7 12.4 8.9 73.8-24.6 127-94.3 127-176.4C441.9 153.9 358.6 70.7 256 70.7z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
export default Navbar;

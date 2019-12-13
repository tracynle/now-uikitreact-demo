/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <nav>
          <ul>
            <li>
              <a
                href="/"
              >
                Real Estate Co.
              </a>
            </li>
            <li>
              <a
                href="/about"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
           {new Date().getFullYear()}
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;

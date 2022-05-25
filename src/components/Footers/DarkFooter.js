/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <nav>
          {/* <ul>
            <li>
              <a
                href="https://www.creative-tim.com?ref=nukr-dark-footer"
                target="_blank"
              >
                Creative Tim
              </a>
            </li>
            <li>
              <a
                href="http://presentation.creative-tim.com?ref=nukr-dark-footer"
                target="_blank"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="http://blog.creative-tim.com?ref=nukr-dark-footer"
                target="_blank"
              >
                Blog
              </a>
            </li>
          </ul> */}
        </nav>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, Designed by{" "}
          <a
            href="https://ft.upnvj.ac.id/"
            target="_blank"
          >
            Engineering Faculty UPN Veteran Jakarta
          </a>
          . Coded by{" "}
          <a
            // href="https://www.creative-tim.com?ref=nukr-dark-footer"
            target="_blank"
          >
            IJCST Comittee
          </a>
          .
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;

import React from "react";
import styled from "styled-components";
import "../../App.css";
const Footer = () => {
  return (
    <FooterContainer className="main-footer">
      <br />

      <div className="footer-middle">
        <div class="container">
          <div class="row">
            <div className="col-md-3 col-sm-6">
              <h4>Contact</h4>
              <ul className="list-unstyled">
                <li>Condet Jakarta Timur</li>
                <li>Rt07/14</li>
                <li>Mr.Faeshal Bin Sulaiman</li>
                <li>085693757554 - 0254 1123</li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6">
              <h4>Footer2</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="?">Lorem</a>
                </li>
                <li>
                  <a href="?">Lorem</a>
                </li>
                <li>
                  <a href="?">Lorem</a>
                </li>
                <li>
                  <a href="?">Lorem</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6">
              <h4>Footer3</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="?">Lorem</a>
                </li>
                <li>
                  <a href="?">Lorem</a>
                </li>
                <li>
                  <a href="?">Lorem</a>
                </li>
                <li>
                  <a href="?">Lorem</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6">
              <h4>Footer4</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="?">Lorem</a>
                </li>
                <li>
                  <a href="?">Lorem</a>
                </li>
                <li>
                  <a href="?">Lorem</a>
                </li>
                <li>
                  <a href="?">Lorem</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© Copyright {new Date().getFullYear()}</p>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
};
export default Footer;

const FooterContainer = styled.footer`
  .footer-middle {
    background: var(--mainDark);
    padding: 3rem;
    color: white;
  }

  ul li a {
    color: var(--mainGrey);
  }

  ul li a:hover {
    color: var(--mainWhite);
  }
`;

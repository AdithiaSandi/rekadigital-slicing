import React, { useState } from "react";
import { toggleMobile } from "../state/reducer/isMobile";
import { useDispatch } from "react-redux";
import "./styles/Banner.css";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { Content } from "./Content";

export const Banner = () => {
  function openNav() {
    document.getElementById("mySidenav").className = "sidenav open";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }

  const [isMobile, setIsMobile] = useState(
    window.innerWidth >= 768 ? false : true
  );

  const dispatch = useDispatch();

  const resizeResponse = () => {
    if (window.innerWidth >= 768) {
      setIsMobile(false);
      dispatch(toggleMobile(false));
      document.body.style.backgroundColor = "white";
    } else {
      setIsMobile(true);
      dispatch(toggleMobile(true));
    }
  };

  window.onresize = resizeResponse;

  return (
    <div className="content-container">
      <Container className="m-0 p-0">
        <Row className="m-0 p-0">
          <Col xs={1} md={0} className="p-0">
            {isMobile ? (
              <span className="btn-wrapper">
                <button className="toggle-btn" onClick={() => openNav()}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-list"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                    />
                  </svg>
                </button>
              </span>
            ) : null}
          </Col>
          <Col xs={11} md={12} className="p-0">
            <div id="main">
              <h1>Customer</h1>
              <span>
                You can manage and organize your customer and other things here
              </span>
              <div className="content-nav">
                <Nav
                  variant="tabs"
                  defaultActiveKey="link-1"
                  className="nav-underline"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="link-1">Customer</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="link-2">Promo</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="link-3">Voucher</Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
            </div>
          </Col>
        </Row>
        <Row style={{marginTop: "16px", maxWidth: "100%"}}>
            <Content />
        </Row>
      </Container>
    </div>
  );
};

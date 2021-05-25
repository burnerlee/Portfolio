import React, { useState, useEffect } from "react";
import { greetings, socialLinks } from "../portfolio";
import Headroom from "headroom.js";
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  const [collapse, setCollapse] = useState(false);
  const toggle = () => setCollapse(!collapse);

  function assignActiveState() {
    let mainNavLinks = document.querySelectorAll(".nav-link-icon");
    let fromTop = window.scrollY;

    mainNavLinks.forEach((link) => {
      let section = document.querySelector(link.hash);
      if (
        section.offsetTop <= fromTop+140 &&
        section.offsetTop + section.offsetHeight > fromTop+140
      ) {
        link.classList.add("current-navlink");
      } else {
        link.classList.remove("current-navlink");
      }
    });
  }
  useEffect(() => {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        setCollapse(false);
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
      });
    });
    assignActiveState();
    window.addEventListener("scroll", (event) => {
      assignActiveState();
    });
  }, []);

  return (
    <>
      <header className="header-global">
        <Navbar
          className="navbar-main navbar-transparent navbar-light headroom"
          expand="lg"
          id="navbar-main"
        >
          <Container>
            <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
              <h2 className="text-white" id="nav-title">
                {greetings.name}
              </h2>
            </NavbarBrand>
            <button
              className="navbar-toggler"
              id="navbar_global"
              onClick={toggle}
            >
              <span className="navbar-toggler-icon" />
            </button>
            <Collapse toggler="#navbar_global" navbar isOpen={collapse}>
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <Link to="/">
                      <h3 className="text-black" id="nav-title">
                        {greetings.name}
                      </h3>
                    </Link>
                  </Col>
                  <Col className="collapse-close" xs="6">
                    <button
                      className="navbar-toggler"
                      id="navbar_global"
                      onClick={toggle}
                    >
                      <span />
                      <span />
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav className="align-items-lg-center ml-lg-auto" navbar>
                <NavItem>
                  <NavLink className="nav-link-icon" href="#home">
                    Home
                    {/* <span className="nav-link-inner--text d-lg-none ml-2">
                      Facebook
                    </span> */}
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link-icon" href="#skills">
                    Skills
                    {/* <i className="fa fa-instagram" /> */}
                    {/* <span className="nav-link-inner--text d-lg-none ml-2">
                      Instagram
                    </span> */}
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link-icon" href="#education">
                    {/* <i className="fa fa-twitter-square" />
                    <span className="nav-link-inner--text d-lg-none ml-2">
                      Twitter
                    </span> */}
                    Education
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link-icon" href="#experience">
                    {/* <i className="fa fa-github" />
                    <span className="nav-link-inner--text d-lg-none ml-2">
                      Github
                    </span> */}
                    Experience
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link-icon" href="#projects">
                    {/* <i className="fa fa-linkedin" />
                    <span className="nav-link-inner--text d-lg-none ml-2">
                      Linkedin
                    </span> */}
                    Projects
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Navigation;

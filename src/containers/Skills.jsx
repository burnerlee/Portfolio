import React, { Fragment, useEffect, useState } from "react";

import { Fade, Flip, Reveal } from "react-reveal";
import DisplayLottie from "../components/DisplayLottie";
import webdev from "../assets/lottie/webdev.json";
import build from "../assets/lottie/build";
import { Container, Row, Col, UncontrolledTooltip, Progress } from "reactstrap";
import GreetingLottie from "../components/DisplayLottie";
import { skillsSection } from "../portfolio";
import { SkillBars } from "../portfolio";
const Skills = () => {
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  function assignActiveState() {
    let el = document.getElementById("skillbar");
    if (isInViewport(el) && !reveal) {
      setReveal(true);
      var inners = document.getElementsByClassName("inner-fill");
      for (var i = 0; i < inners.length; i++) {
        inners[i].style.backgroundPosition = "left bottom";
        // inners[i].style.animationDuration = "1s";
        inners[i].style.animationName = "slide";
      }
    }
  }
  const [reveal, setReveal] = useState(false);
  useEffect(() => {
    assignActiveState();
    window.addEventListener("scroll", (event) => {
      assignActiveState();
    });
  }, []);
  return (
    <Fade left duration={1000} distance="40px" className="main-section">
      <Container className="text-center my-5 section section-lg" id="skills">
        <h1 className="h1">{skillsSection.title}</h1>
        <p className="lead">{skillsSection.subTitle}</p>
        <Row>
          <Col lg="6">
            <DisplayLottie animationData={webdev} />
          </Col>
          <Col lg="6" className="icon-container">
            <div className="d-flex justify-content-center flex-wrap mb-5">
              {skillsSection.softwareSkills.map((skill) => {
                return (
                  <Fragment key={skill.skillName}>
                    <div className="flip-in-x" id={skill.skillName}>
                      <Flip>
                        <div style={{ height: "4rem", marginBottom: "1rem" }}>
                          <div className="icon icon-lg icon-shape shadow rounded-circle mb-5 flip-child">
                            <span
                              className="iconify"
                              data-icon={skill.fontAwesomeClassname}
                            ></span>
                          </div>
                        </div>
                      </Flip>
                    </div>
                    <UncontrolledTooltip
                      delay={0}
                      placement="bottom"
                      target={skill.skillName}
                    >
                      {skill.skillName}
                    </UncontrolledTooltip>
                  </Fragment>
                );
              })}
            </div>
            <div>
              {skillsSection.skills.map((skill) => {
                return (
                  <p class="skill-desc" key={skill}>
                    {skill}
                  </p>
                );
              })}
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg="6">
            <div
              className="d-flex flex-column justify-content-around align-items-start"
              id="skillbar"
            >
              {SkillBars.map((bar) => {
                return (
                  <div class="d-flex align-items-center outer-fill">
                    <div
                      class="d-flex align-items-center inner-fill"
                      style={{ width: bar.progressPercentage + "%" }}
                    >
                      <div class="stack-name">{bar.Stack}</div>
                    </div>
                    <span class="percentage">
                      {bar.progressPercentage + "%"}
                    </span>
                  </div>
                );
              })}
            </div>
          </Col>
          <Col lg="6">
            <GreetingLottie animationData={build} />
          </Col>
        </Row>
      </Container>
    </Fade>
  );
};

export default Skills;

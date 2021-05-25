import React, { createRef } from "react";
import { Card, CardBody, Badge } from "reactstrap";

import { Fade } from "react-reveal";

const EdutionCard = ({ education }) => {
  const imgRef = createRef();
  return (
    <Fade right duration={1000} distance="40px">
      <div className="card-lift--hover">
        <div className="card-lift-inner">
          <Card className="front-card shadow mt-4">
            <CardBody>
              <div className="d-flex flex-column align-items-center">
                <div>
                  <h5 className="text-info">{education.schoolName}</h5>
                  <h6>{education.subHeader}</h6>
                  <Badge color="info" className="mr-1">
                    {education.duration}
                  </Badge>
                  <p className="description mt-3">
                    {education.desc}
                    <ul>
                      {education.descBullets
                        ? education.descBullets.map((desc) => {
                            return <li key={desc}>{desc}</li>;
                          })
                        : null}
                    </ul>
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>
          <Card className="back-img">
            <img ref={imgRef} src={education.pic}></img>
          </Card>
        </div>
      </div>
    </Fade>
  );
};

export default EdutionCard;

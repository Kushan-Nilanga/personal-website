import React from "react";
import Navigation from "../components/navigation";
import {
  Row,
  Col,
  Container,
  Card,
  CardBody,
  CardText,
  CardTitle,
  CardSubtitle,
  CardImg,
  Button,
} from "reactstrap";

var profile_description =
  "I'm a software engineering undergraduate studying at Deakin University. " +
  "I learnt to program after developing a keen interest in the field. " +
  "I was always intrigued by the breakthroughs of the software engineering field every day. " +
  "I learn to code in Java when I was a kid. And then other programming languages such as Python, C++, Javascript and C# caught my attention." +
  "Then machine learning caught my attention. First I started by learning statistics, probability and calculus. Then I was able to get in to " +
  "Tensorflow. Then I moved into Pytorch because of ease of implementation and all the helpful packages supplied. Currently, " +
  "reinforcement learning caught my attention and my work so far is documented github.";

class Contact extends React.Component {
  render() {
    return (
      <div>
        <Navigation header="About Me" />
        <Container>
          <div style={{ padding: "1em 1em 1em 1em" }}>
            <Row>
              <Col xs="12" md="6" lg="5" xl="4" height="5em">
                <Card style={{ width: "100%", top: "-2em" }}>
                  <CardImg
                    top
                    src="img/propic.JPG"
                    style={{ objectFit: "fill" }}
                    alt="Card image cap"
                  />
                  <CardBody style={{ textAlign: "center" }}>
                    <CardTitle>
                      <h5>HI, I'M KUSHAN ATHALAGE</h5>
                    </CardTitle>
                  </CardBody>
                </Card>
              </Col>
              <Col>
                <h3>Little something about me...</h3>
                <p>{profile_description} </p>
                <Card style={{ width: "100%"}}>
                  <CardBody>
                    <CardTitle>
                      <h6><a href="mailto:dathalage@deakin.edu.au">Email - dathalage@deakin.edu.au</a></h6>
                      <h6><a href="https://github.com/Kushan-Nilanga">Github - Kushan-Nilanga</a></h6>
                      <h6><a href="https://www.linkedin.com/in/kushan-nilanga-196550a5/">LinkedIn - Kushan Nilanga</a></h6>
                      <h6><a href="https://twitter.com/dknathalage">Twitter - dknathalage</a></h6>
                      <h6><a href="https://www.facebook.com/kushan.nilanga.athalage">Facebook - Kushan Nilanga</a></h6>
                    </CardTitle>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}

export default Contact;

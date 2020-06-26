import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardTitle,
  CardText,
  Button,
  Navbar,
  Nav,
  NavItem,
  NavLink,
  CardLink,
  Jumbotron,
  CardImgOverlay,
} from "reactstrap";

class Index extends React.Component {
  render() {
    return (
      <div>
        <div
          style={{
            background: 'url("/img/jumbo.JPG")',
            backgroundAttachment: "fixed",
            backgroundSize: "300%",
          }}
        >
          <script src="https://cdnjs.cloudflare.com/ajax/libs/react/16.6.3/umd/react.production.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.6.3/umd/react-dom.production.min.js"></script>
          <Navbar
            className="navbar-expand-sm navbar-toggleable-sm ng-white"
            light
          >
            <Nav className="navbar navbar-light">
              <NavItem>
                <NavLink href="/">
                  <a style={{ color: "black" }} className="navbar-brand">
                    Kushan Nilanga Athalage
                  </a>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/github">
                  <a style={{ color: "black" }} className="navbar-nav">
                    Projects
                  </a>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contact">
                  <a style={{ color: "black" }} className="navbar-nav">
                    About Me
                  </a>
                </NavLink>
              </NavItem>
            </Nav>
          </Navbar>
          <Jumbotron
            style={{
              padding: "17% 2em 25% 2em",
              backgroundColor: "rgba(0,0,0,0.0)",
              color: "white",
              width: "100%",
              borderRadius: "0",
              marginBottom: "0",
            }}
          >
            <h1
              className="display-4 text-center"
              style={{ color: "black", paddingBottom: "1%" }}
            >
              KUSHAN &nbsp;NILANGA &nbsp;ATHALAGE
            </h1>
            <h3 className="lead text-center" style={{ color: "black" }}>
              A desperate attempt to create cool stuff
            </h3>
          </Jumbotron>
        </div>
        <div
          style={{
            color: "white",
            padding: "4em 0em",
            backgroundColor: "#101014",
          }}
        >
          <Container>
            <h5 className="text-center" style={{ padding: "1em 1em 2em 1em" }}>
              &lt; /&nbsp;&nbsp;&nbsp; R E C E N T &nbsp;&nbsp;W O R K
              &nbsp;&nbsp;&nbsp;&gt;
            </h5>
            <div style={{ padding: "1em 1em 1em 1em" }}>
              <Row>
                <Col xs="12" md="6" lg="3">
                  <h6>MACHINE LEARNING & AI</h6>
                  <ul>
                    <li>Decision Trees</li>
                    <li>Variable Autoregressions</li>
                  </ul>
                </Col>
                <Col xs="12" md="6" lg="3">
                  <h6>SOFTWARE ENGINEERING</h6>
                  <ul>
                    <li>Personal Website</li>
                    <li>Web Scraping</li>
                    <li>Reinforcement Learning</li>
                  </ul>
                </Col>
                <Col xs="12" md="6" lg="3">
                  <h6>EMBEDDED SYSTEMS & ROBOTICS</h6>
                  <ul>
                    <li>Home Surveilance Robot</li>
                    <li>Smart Parking</li>
                  </ul>
                </Col>
                <Col xs="12" md="6" lg="3">
                  <h6>CONTRIBUTIONS</h6>
                  <ul></ul>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <Container style={{ padding: "4em 0em" }}>
          <h5 className="text-center" style={{ padding: "1em 1em 2em 1em" }}>
            &lt; /&nbsp;&nbsp;&nbsp; F U T U R E &nbsp;&nbsp;G O A L S
            &nbsp;&nbsp;&nbsp;&gt;
          </h5>
          <div style={{ padding: "1em 1em 1em 1em" }}>
            <Row>
              <Col xs="12" md="6" lg="3">
                <h6>MACHINE LEARNING &amp; AI</h6>
                <ul>
                  <li>Neural Networks</li>
                  <li>Natural Language Processing</li>
                </ul>
              </Col>
              <Col xs="12" md="6" lg="3">
                <h6>SOFTWARE ENGINEERING</h6>
                <ul>
                  <li>
                    <a
                      href="https://github.com/Kushan-Nilanga/rl-pytorch"
                      style={{
                        color: "black",
                      }}
                    >
                      Reinforcement Learning
                    </a>
                  </li>
                  <li>MatLab</li>
                </ul>
              </Col>
              <Col xs="12" md="6" lg="3">
                <h6>EMBEDDED SYSTEMS &amp; ROBOTICS</h6>
                <ul>
                  <li>Home Surveilance Robot</li>
                  <li>Smart Parking</li>
                </ul>
              </Col>
              <Col xs="12" md="6" lg="3">
                <h6>CONTRIBUTIONS</h6>
                <ul></ul>
              </Col>
            </Row>
          </div>
        </Container>
        <Container style={{ padding: "0em 1em 2em 1em" }}>
          <h5 className="text-center" style={{ padding: "0em 1em 2em 1em" }}>
            &lt; / &nbsp;&nbsp;P R O J E C T
            S &nbsp;&nbsp;&nbsp;&gt;
          </h5>
          <Row>
            <Col sm="4" style={{ padding: "1%" }}>
              <CardImg
                top={true}
                style={{
                  width: "100%",
                  borderTopRightRadius: "10px",
                  borderTopLeftRadius: "10px",
                }}
                src={`https://66.media.tumblr.com/22a299820edec059201997a1aab7e8e4/8ed204ea11c42b0d-2a/s500x750/ceff39fe5baf669122a035b9687750875406ec80.gif`}
              />
              <Card body style={{ paddingBottom: "1em" }}>
                <CardTitle>
                  <h6>ALGORITHMS</h6>
                </CardTitle>
                <CardText>
                  Implementations of Predictive Analytics algorithms from
                  scratch
                </CardText>
                <CardLink href="https://github.com/Kushan-Nilanga/">
                  View Github
                </CardLink>
              </Card>
            </Col>
            <Col sm="4" style={{ padding: "1%" }}>
              <CardImg
                top={true}
                style={{
                  width: "100%",
                  borderTopRightRadius: "10px",
                  borderTopLeftRadius: "10px",
                }}
                src={`https://24.media.tumblr.com/cdbedba9730b691719aaa01cafbb02d9/tumblr_n61a1eRP3J1smuyxxo1_500.gif`}
              />
              <Card body>
                <CardTitle>
                  <h6>REINFORCEMENT LEARNING</h6>
                </CardTitle>
                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>
                <CardLink href="https://github.com/Kushan-Nilanga/rl-pytorch/">
                  View Github
                </CardLink>
              </Card>
            </Col>
            <Col sm="4" style={{ padding: "1%" }}>
              <CardImg
                top={true}
                style={{
                  width: "100%",
                  borderTopRightRadius: "10px",
                  borderTopLeftRadius: "10px",
                }}
                src={`https://ze-us.xyz/images/neuralnet.gif`}
              />

              <Card body>
                <CardTitle>
                  <h6>SUPERVISED LEARNING</h6>
                </CardTitle>
                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>
                <CardLink href="https://github.com/Kushan-Nilanga/">
                  View Github
                </CardLink>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Index;

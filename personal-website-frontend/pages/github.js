import React from "react";
import Projectslist from "../components/projects";
import {
  Col,
  Input,
  InputGroup,
  InputGroupAddon,
  Row,
  Container
} from "reactstrap";
import {Navbar, Nav, NavItem, NavLink, Jumbotron
} from "reactstrap";

class Github extends React.Component {
  constructor(props) {
    super(props);
    //query state will be passed to RestaurantList for the filter query
    this.state = {
      query: ""
    };
  }
  onChange(e) {
    //set the state = to the input typed in the search Input Component
    //this.state.query gets passed into RestaurantList to filter the results
    this.setState({ query: e.target.value.toLowerCase() });
  }
  render() {
    return (
      <div>
        <div style={{ background: 'url("/img/projects.jpg") center center', backgroundSize:"100%" }}>
          <Navbar sticky={"top"} className="sticky-top" style={{ position: "sticky" }}>
            <Nav className="navbar navbar-light" sticky={"top"} style={{ position: "sticky" }}>
              <NavItem>
                <NavLink href="/">
                  <a className="navbar-brand">Kushan Nilanga Athalage</a>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/github">
                  <a className="navbar-nav">Repositories</a>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/stack">
                  <a className="navbar-nav">Technology Stack</a>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/photography">
                  <a className="navbar-nav">Photography</a>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contact">
                  <a className="navbar-nav">Contact Me</a>
                </NavLink>
              </NavItem>
            </Nav>
          </Navbar>
          <Jumbotron style={{
            padding: '5% 0em 5% 0em', backgroundColor: "rgba(0,0,0,0.0)",
            color: 'white', width: "100%", borderRadius: "0", marginBottom: "0"
          }}>
            <h1 className="display-4 text-center">PROJECTS</h1>
            <p className="lead text-center">The projects I've completed unill now</p>
          </Jumbotron>
        </div>
        <Container>
          <div className="container-fluid">
            <Row>
              <Col>
                <div className="search">
                  <InputGroup>
                    <InputGroupAddon addonType="append"> Search </InputGroupAddon>
                    <Input onChange={this.onChange.bind(this)} />
                  </InputGroup>
                </div>
                <Projectslist search={this.state.query} />
              </Col>
            </Row>
            <style jsx>
              {`
            .search {
              margin: 2%;
              width: 98%;
            }
          `}
            </style>
          </div>
        </Container>
      </div>
    );
  }
}

export default Github;
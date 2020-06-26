import React from "react";
import { Navbar, Nav, NavItem, NavLink, Jumbotron } from "reactstrap";
class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div
          style={{
            background: 'url("/img/projects.jpg") center center',
            backgroundRepeat: "no-repeat",
            height: "100%",
          }}
        >
          <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white" light >
            <Nav
              className="navbar"
              sticky={"top"}
              style={{ position: "sticky" }}
            >
              <NavItem>
                <NavLink href="/">
                  <a style={{color:"white"}} className="navbar-brand">Kushan Nilanga Athalage</a>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/github">
                  <a style={{color:"white"}} className="navbar-nav">Projects</a>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contact">
                  <a style={{color:"white"}}  className="navbar-nav">About Me</a>
                </NavLink>
              </NavItem>
            </Nav>
          </Navbar>
          <Jumbotron
            style={{
              padding: "5% 0em 5% 0em",
              backgroundColor: "rgba(0,0,0,0.0)",
              color: "white",
              width: "100%",
              borderRadius: "0",
              marginBottom: "0",
            }}
          >
            <h1 className="display-4 text-center">{this.props.header}</h1>
            <p className="lead text-center">{this.props.description}</p>
          </Jumbotron>
        </div>
      </div>
    );
  }
}

export default Navigation;

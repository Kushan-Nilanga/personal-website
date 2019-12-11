import React from 'react'
import {Navbar, Nav, NavItem, NavLink, Jumbotron} from "reactstrap";
class Navigation extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <div style={{ background: 'url("/img/projects.jpg") center center', backgroundSize: "100%" }}>
                    <Navbar sticky={"top"} className="sticky-top" style={{ position: "sticky" }}>
                        <Nav className="navbar navbar-light" sticky={"top"} style={{ position: "sticky" }}>
                            <NavItem>
                                <NavLink href="/">
                                    <a className="navbar-brand">Kushan Nilanga Athalage</a>
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
            </div>
        )
    }
}

export default Navigation
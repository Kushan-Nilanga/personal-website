import React from "react";
import Navigation from "../components/navigation";
import {
  Col,
  Row,
  Container,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  Button,
} from "reactstrap";
import Head from "next/head";

class Github extends React.Component {
  render() {
    return (
      <div>
        <Navigation header="Projects" description="" />
        <Head>
          <link
            rel="stylesheet"
            href="node_modules/react-github-contribution-calendar/default.css"
            type="text/css"
          />
        </Head>
        <Container>
          <div className="container-fluid">
            <div className="text-center">
              <h4 style={{ paddingTop: "1em" }}>GITHUB COMMIT CALENDAR</h4>
              <img
                width="104%"
                style={{position:"relative",left:"-2%", paddingTop:"1em", paddingBottom:"2em"}}
                src="http://ghchart.rshah.org/Kushan-Nilanga"
                alt="Name Your GitHub chart"
              ></img>
              <h4 style={{ padding: "1em" }}>GITHUB PROJECTS</h4>
            </div>
            <Row>
              <Col>
                <ListGroup style={{ padding: "1em 0.5em 1em 0.5em" }} flush>
                  <ListGroupItem tag="a">
                    <ListGroupItemHeading>rl-pytorch</ListGroupItemHeading>
                    <ListGroupItemText>
                      My implementations of popular reinforcement learning
                      methods based on other developers and research papers
                      &nbsp;|
                      <Button color="link" size="sm">
                        <a href="https://github.com/Kushan-Nilanga/rl-pytorch/">
                          Github
                        </a>
                      </Button>
                    </ListGroupItemText>
                  </ListGroupItem>
                  <ListGroupItem tag="a">
                    <ListGroupItemHeading>
                      personal-website
                    </ListGroupItemHeading>
                    <ListGroupItemText>
                      Node JS version of my website. thin include next js
                      frontend and strapi backend. &nbsp;|
                      <Button color="link" size="sm">
                        <a href="https://github.com/Kushan-Nilanga/personal-website/">
                          Github
                        </a>
                      </Button>
                    </ListGroupItemText>
                  </ListGroupItem>
                  <ListGroupItem tag="a">
                    <ListGroupItemHeading>
                      stackoverflow-profile-scraper
                    </ListGroupItemHeading>
                    <ListGroupItemText>
                      This repository contains python code to scrape profile
                      data from stack-overflow forum inorder to do basic
                      analysis. In oder to scrape the data 2 main python
                      libraries are used. &nbsp;|
                      <Button color="link" size="sm">
                        <a href="https://github.com/Kushan-Nilanga/stackoverflow-profile-scraper/">
                          Github
                        </a>
                      </Button>
                    </ListGroupItemText>
                  </ListGroupItem>
                  <ListGroupItem tag="a">
                    <ListGroupItemHeading>
                      NLP---Decision-Tree
                    </ListGroupItemHeading>
                    <ListGroupItemText>
                      Vanilla decision tree classifier formed by processing
                      natural language in aircraft reviews. &nbsp;|
                      <Button color="link" size="sm">
                        <a href="https://github.com/Kushan-Nilanga/NLP---Decision-Tree">
                          Github
                        </a>
                      </Button>
                    </ListGroupItemText>
                  </ListGroupItem>
                  <ListGroupItem tag="a">
                    <ListGroupItemHeading>
                      pytorch-learning
                    </ListGroupItemHeading>
                    <ListGroupItemText>
                      Pytorch learning exercises. &nbsp;|
                      <Button color="link" size="sm">
                        <a href="https://github.com/Kushan-Nilanga/pytorch-learning">
                          Github
                        </a>
                      </Button>
                    </ListGroupItemText>
                  </ListGroupItem>
                </ListGroup>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}

export default Github;

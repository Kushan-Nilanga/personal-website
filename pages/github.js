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

class Github extends React.Component {
  render() {
    return (
      <div>
        <Navigation header="Projects" description="" />
        <Container>
          <div className="container-fluid">
            <Row>
              <Col>
                <ListGroup style={{ padding: "1em 1em 1em 1em" }} flush>
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

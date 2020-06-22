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
} from "reactstrap";

class Github extends React.Component {
  render() {
    return (
      <div>
        <Navigation header="Projects" description="THis is" />
        <Container>
          <div className="container-fluid">
            <Row>
              <Col>
                <ListGroup style={{ padding: "1em 1em 1em 1em" }} flush>
                  <ListGroupItem tag="a">
                    <ListGroupItemHeading>
                      List group item heading
                    </ListGroupItemHeading>
                    <ListGroupItemText>
                      Donec id elit non mi porta gravida at eget metus. Maecenas
                      sed diam eget risus varius blandit.
                    </ListGroupItemText>
                  </ListGroupItem>
                  <ListGroupItem>
                    <ListGroupItemHeading>
                      List group item heading
                    </ListGroupItemHeading>
                    <ListGroupItemText>
                      Donec id elit non mi porta gravida at eget metus. Maecenas
                      sed diam eget risus varius blandit.
                    </ListGroupItemText>
                  </ListGroupItem>
                  <ListGroupItem>
                    <ListGroupItemHeading>
                      List group item heading
                    </ListGroupItemHeading>
                    <ListGroupItemText>
                      Donec id elit non mi porta gravida at eget metus. Maecenas
                      sed diam eget risus varius blandit.
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

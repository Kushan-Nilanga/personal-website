import React from "react";
import Projectslist from "../components/projects";
import Navigation from "../components/navigation"
import {
  Col,
  Input,
  InputGroup,
  InputGroupAddon,
  Row,
  Container
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
        <Navigation/>
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

export default Github
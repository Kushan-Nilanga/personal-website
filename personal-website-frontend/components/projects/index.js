/* components/RestaurantList/index.js */
import gql from "graphql-tag";
import Link from "next/link";
import { graphql } from "react-apollo";
import {
  Button,
  Card,
  CardBody,
  CardColumns,
  CardImg,
  CardSubtitle
} from "reactstrap";
import { CardText, CardTitle, Col, Row } from "reactstrap";

const Projectslist = (
  { data: { loading, error, projects }, search },
  req
) => {
  if (error) return "Error loading restaurants";
  //if restaurants are returned from the GraphQL query, run the filter query
  //and set equal to variable restaurantSearch

  if (projects && projects.length) {
    //searchQuery
    const searchQuery = projects.filter(query =>
      query.project_name.toLowerCase().includes(search)
    );
    if (searchQuery.length != 0) {
      return (
        <div>
          <div className="h-100">
            {searchQuery.map(res => (
              <Card
                style={{ width: "30%", margin: "0 10px", borderRadius:"10px" }}
                className="h-100"
                key={res._id}
              >
                <CardImg
                  top={true}
                  style={{ height: 250, borderTopRightRadius:"10px", borderTopLeftRadius:"10px" }}
                  src={`http://localhost:1337${res.project_thumbnail.url}`}
                />
                <CardBody>
                  <CardTitle><strong>{res.project_name}</strong></CardTitle>
                  <CardText>{res.project_description}</CardText>
                </CardBody>
              </Card>
            ))}
          </div>

          <style jsx global>
            {`
              a {
                color: white;
              }
              a:link {
                text-decoration: none;
                color: white;
              }
              a:hover {
                color: white;
              }
              .card-columns {
                column-count: 3;
              }
              CardBody::before{
                background: #4CAF50;
                filter: blur(50px);
                transition: all .3s ease-in-out;
                z-index: -1;
              }
            `}
          </style>
        </div>
      );
    } else {
      return <h3>Couldn't find that project 	(ㆆ _ ㆆ)</h3>;
    }
  }
  return <h1>Loading</h1>;
};

const query = gql`
  {
    projects {
      project_name
      project_description
      project_thumbnail {
        url
      }
    }
  }
`;
Projectslist.getInitialProps = async ({ req }) => {
  const res = await fetch("https://api.github.com/repos/zeit/next.js");
  const json = await res.json();
  return { stars: json.stargazers_count };
};
// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (RestaurantList)
export default graphql(query, {
  props: ({ data }) => ({
    data
  })
})(Projectslist);
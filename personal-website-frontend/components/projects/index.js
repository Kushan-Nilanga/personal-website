/* components/RestaurantList/index.js */
import gql from "graphql-tag";
import { graphql } from "react-apollo"
import {Button,Card,CardBody,CardColumns,CardImg,CardFooter} from "reactstrap";
import { CardText, CardTitle } from "reactstrap";

const Projectslist = (
  { data: { loading, error, projects }, search }, req) => {
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
        <CardColumns>
          {searchQuery.map(res => (
            <Card
              className="text-muted"
              style={{ margin: "10px", borderRadius: "10px" }}
              key={res._id}
            >
              <CardImg
                top={true}
                style={{ height: 250, borderTopRightRadius: "10px", borderTopLeftRadius: "10px" }}
                src={`http://localhost:1337${res.project_thumbnail.url}`}
              />
              <CardBody>
                <CardTitle><strong style={{color:"#4d5f7d"}}>{(res.project_name).toUpperCase()}</strong></CardTitle>
                <CardText>{res.project_description}</CardText>
                <Button target="_blank" color="secondary" size="sm" onClick={()=>window.open(`${res.project_github}`, "_blank")}>View Repository</Button>
              </CardBody>
              <CardFooter>
                <small>{res.project_language}</small>
                <small className="float-right">{res.project_updated}</small>
              </CardFooter>
            </Card>
          ))}

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
              
            `}
          </style>
        </CardColumns>
      );
    } else {
      return <h3>Couldn't find that project</h3>;
    }
  }
  return <h1>Loading</h1>;
};

const query = gql`
  {
    projects {
      project_name
      project_description
      project_github
      project_thumbnail {url}
      project_updated
      project_language
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
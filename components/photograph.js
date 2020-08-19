import React from 'react'
import gql from "graphql-tag";
import { graphql } from "react-apollo"
import { CardImgOverlay, Card, CardBody, CardColumns, CardImg, CardFooter } from "reactstrap";
import { CardText, CardTitle } from "reactstrap";

const Photography = (
    { data: { loading, error, photographs } }, req) => {
    if (error) return "Error loading photos"
    if (photographs && photographs.length) {
        return (
            photographs.map(res => (
                <CardColumns>
                    <Card
                        className="text-muted"
                        style={{ margin: "10px", borderRadius: "10px" }}
                        key={res._id}
                    >
                        <CardImg
                            top={true}
                            style={{ height: 250, borderTopRightRadius: "10px",borderTopLeftRadius: "10px" }}
                            src={`http://localhost:1337${res.photos.url}`}
                        />
                        <CardFooter><CardTitle>{res.description}</CardTitle></CardFooter>
                    </Card>

                    <style jsx>
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
            ))
        );
    } else {
        return <h1 className="text-center" style={{ padding: "2em" }}>Loading</h1>
    }
}

const query = gql`
    {
        photographs {
        photos{url}
        description
        }
    }
`;

Photography.getInitialProps = async ({ req }) => {
    const res = await fetch("https://api.github.com/repos/zeit/next.js");
    const json = await res.json();
    return { stars: json.stargazers_count };
};

export default graphql(query, {
    props: ({ data }) => ({
        data
    })
})(Photography);
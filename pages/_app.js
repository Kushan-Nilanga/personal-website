/* /pages/_app.js */

import Layout from "../components/layout";

import App, { Container } from "next/app";
import React from "react";

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  render() {
    const { Component, pageProps, isAuthenticated, ctx } = this.props;
    return (
      <Container>
        <Layout isAuthenticated={isAuthenticated} {...pageProps}>
          <Component {...pageProps} />
        </Layout>

        <style jsx global>
          {`
            
            .card {
              display: inline-block !important;
              background-color: rgba(237, 237, 237, 0.7);
            }
            .card-columns {
              column-count: 3;
            }
            .card {
              transition: box-shadow 0.5s;
              --box-shadow: 0 0 20px rgba(33, 33, 33, 0.2);
              border: none;
            }
            .card:hover {
              transition: box-shadow 0.5s;
              box-shadow: 0 0 10px rgba(33, 33, 33, 0.6);
            }
            .card-img:hover {
              transition: box-shadow 0.5s;
              box-shadow: 0 0 10px rgba(33, 33, 33, 0.6);
            }
            .CardText {
              background-image: linear-gradient(to right, #4481eb, #25aae1);
              transition: 0.5s;
              outline: 0;
              border-style: none !important;
            }

            @media (min-width: 100px) {
              .card-columns {
                -webkit-column-count: 1;
                -moz-column-count: 1;
                column-count: 1;
              }
            }
            @media (min-width: 48em) {
              .card-columns {
                -webkit-column-count: 2;
                -moz-column-count: 2;
                column-count: 2;
              }
            }
            @media (min-width: 62em) {
              .card-columns {
                -webkit-column-count: 3;
                -moz-column-count: 3;
                column-count: 3;
              }
            }
          `}
        </style>
      </Container>
    );
  }
}
export default MyApp;

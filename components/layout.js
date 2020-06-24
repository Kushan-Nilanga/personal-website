import React from "react";
import Head from "next/head";
import { Nav, NavLink, NavItem, Jumbotron, Navbar, Container, Row, Col } from "reactstrap";

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }
  static async getInitialProps({ req }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }
  render() {
    const { children } = this.props;
    const title = "Kushan Nilanga Athalage";
    return (
      <div>
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
            crossOrigin="anonymous"
          />
          <script src="https://js.stripe.com/v3" />
        </Head>
        <header style={{
          background: `url("/img/jumbo.JPG") center center`, backgroundSize: 'cover',
          color: 'white', top: "0", width: "100%", borderRadius: "0", paddingBottom: "0"
        }}>
          <style jsx>
            {`
              a {
                color: white;
              }
            `}
          </style>

        </header>
        {children}
        <footer>
          <div style={{ backgroundColor: "#101014" }}>
            <Container style={{ color: "white", padding: "4em 0em" }}>
            <h6 className="text-center" style={{ padding: "1em 1em 2em 1em" }}>&lt; /&nbsp;&nbsp;&nbsp; S T A Y &nbsp;&nbsp;C O N N E C T E D &nbsp;&nbsp;&nbsp;&gt;</h6>
              <div className="text-center">
                <a target="_blank" href="https://www.facebook.com/kushan.nilanga.athalage"><img src="/img/facebook.png" width="60" style={{padding:"10px 10px 10px 10px"}}/></a>
                <a target="_blank" href="https://github.com/Kushan-Nilanga"><img src="/img/github.png" width="60" style={{padding:"10px 10px 10px 10px"}}/></a>
                <a target="_blank" href="https://www.youtube.com/channel/UCv4-nJnWVSBipg36Uc_iR0Q/"><img src="/img/youtube.png" width="60" style={{padding:"10px 10px 10px 10px"}}/></a>
                <a target="_blank" href="https://www.linkedin.com/in/kushan-nilanga-196550a5/"><img src="/img/linkedin.png" width="60" style={{padding:"10px 10px 10px 10px"}}/></a>
                <a target="_blank" href="https://twitter.com/dknathalage"><img src="/img/twitter.png" width="60" style={{padding:"10px 10px 10px 10px"}}/></a>
                <a target="_blank" href="https://www.instagram.com/kushan_nilanga/?hl=en"><img src="/img/instagram.png" width="60" style={{padding:"10px 10px 10px 10px"}}/></a>
              </div>
            </Container>
          </div>
        </footer>
      </div>
    );
  }
}

export default Layout;
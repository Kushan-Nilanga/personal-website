import App from "next/app";
import { Container, CardImg } from 'reactstrap';
import Navigation from "../components/navigation";

class ReactTutorial extends React.Component {
    render() {
        return (
            <div>
                <Navigation header="React Tutorial" />
                <Container style={{ padding: "1em", width: "50em" }}>
                    <div>
                        <div>
                            <h5>Introduction</h5>
                            <ul>
                                <li><a href="#1">What is NodeJs</a></li>
                                <li>Why use NodeJs
                                <ul>
                                        <li>Performance</li>
                                        <li>Scalability</li>
                                        <li>No buffering</li>
                                        <li>License</li>
                                    </ul>
                                </li>
                                <li>NodeJs vs. Others</li>
                                <li>Applications of NodeJs -&nbsp;<a href="https://www.netguru.com/blog/6-types-of-applications-you-can-build-with-node.js?hsLang=en">https://www.netguru.com/blog/6-types-of-applications-you-can-build-with-node.js?hsLang=en</a>
                                    <ul>
                                        <li>Iot (Internet of Things) Applications</li>
                                        <li>Real-Time applications</li>
                                        <li>Microservices Architecture</li>
                                        <li>Others</li>
                                    </ul>
                                </li>
                                <li>Drawbacks from NodeJs</li>
                                <li>NodeJs for Frontend</li>
                                <li>NodeJs frontend libraries</li>
                                <li>Frontend libraries compared</li>
                            </ul>
                            <h5>React</h5>
                            <ul>
                                <li>Introduction to React</li>
                                <li>React setup</li>
                                <li>What is DOM</li>
                                <li>How does react handle DOM</li>
                                <li>React JSX</li>
                                <li>React Component Class</li>
                                <li>props &amp; state</li>
                                <li>Event Handling</li>
                                <li>Styling</li>
                            </ul>
                            <h5>Hands-on example</h5>
                            <ul>
                                <li>Setting up the development environment</li>
                                <li>create-react-app</li>
                                <li>Components</li>
                                <li>Rendering classes</li>
                                <li>Handling events</li>
                                <li>Updating states</li>
                                <li>State change listeners</li>
                                <li>Passing event arguments</li>
                                <li>props and states</li>
                                <li>Handling states&nbsp;</li>
                            </ul>
                            <h5>NextJs</h5>
                            <ul>

                            </ul>
                            <h5>References</h5>
                        </div>
                        <hr />
                        <div id="1">
                            <CardImg src={'https://miro.medium.com/max/1000/1*A3EN6RoI9LIVpL7EhIGHzQ.gif'} style={{ width: "5em" }} />
                            <h4>Introduction</h4>
                            <h5>What is nodejs</h5>
                            <p>"Node.js is an open-source, cross-platform, JavaScript runtime 
                            environment that executes JavaScript code outside a web browser."
                                 - <a href="https://en.wikipedia.org/wiki/Node.js">Wikipedia</a><br/>
                                NodeJs is a runtime environment that is build to run javascript. 
                                JavaScript was a popular scripting language which was used to
                                create moving elements of a website. JavaScript was used typically 
                                for form validation, event handeling in client side of a web
                                application.

                            </p>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}

export default ReactTutorial;
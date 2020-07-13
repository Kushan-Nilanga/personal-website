import App from "next/app";
import { Container } from 'reactstrap';
import Navigation from "../components/navigation";

class ReactTutorial extends React.Component {
    render() {
        return (
            <div>
                <Navigation header="React Tutorial" />
                <Container style={{ padding: "1em" }}>
                    <div>
                        <h5>Introduction</h5>
                        <ul>
                            <li>What is NodeJs</li>
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
                        <h5>React - A NodeJs UI Framework</h5>
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
                    </div>
                </Container>
            </div>
        );
    }
}

export default ReactTutorial;
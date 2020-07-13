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
                            <li>Applications of NodeJs
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
                            <li>NodeJs frontend libraries compared</li>
                        </ul>
                    </div>
                </Container>
            </div>
        );
    }
}

export default ReactTutorial;
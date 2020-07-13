import App from "next/app";
import { Container, CardImg } from 'reactstrap';
import Navigation from "../components/navigation";

class ReactTutorial extends React.Component {
    render() {
        return (
            <div>
                <Navigation header="React Tutorial" />
                <Container style={{ padding: "1em" }}>
                    <div>
                        <div>
                            <h5>Introduction</h5>
                            <ul>
                                <li><a href="#1">What is NodeJs</a></li>
                                <li><a href="#2">Why use NodeJs</a>
                                    <ul>
                                        <li>Performance</li>
                                        <li>Scalability</li>
                                    </ul>
                                </li>
                                <li><a href="#3">NodeJs vs. Others</a></li>
                                <li>Applications of NodeJs -&nbsp;<a href="https://www.netguru.com/blog/6-types-of-applications-you-can-build-with-node.js?hsLang=en">https://www.netguru.com/blog/6-types-of-applications-you-can-build-with-node.js?hsLang=en</a>
                                    <ul>
                                        <li>Iot (Internet of Things) Applications</li>
                                        <li>Real-Time applications</li>
                                        <li>Microservices Architecture</li>
                                        <li>Others</li>
                                    </ul>
                                </li>
                                <li><a href="#4">Drawbacks of NodeJs</a></li>
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
                            <CardImg src={'https://miro.medium.com/max/1000/1*A3EN6RoI9LIVpL7EhIGHzQ.gif'} style={{ width: "13em" }} />
                            <h4>Introduction</h4>
                            <h5>What is nodejs</h5>
                            <p>"Node.js is an open-source, cross-platform, JavaScript runtime
                            environment that executes JavaScript code outside a web browser."
                                 - <a href="https://en.wikipedia.org/wiki/Node.js">Wikipedia</a><br /><br />
                                NodeJs is a runtime environment that is build to run javascript.
                                JavaScript was a popular scripting language which was used to
                                create moving elements of a website. JavaScript was used typically
                                for form validation, event handeling in client side of a web
                                application. <br /><br />
                                Just like how java runtime environment acts as the environment
                                of java programming, nodejs acts as the runtime enviroment to
                                developement of javascript based applications.
                            </p>
                            <h5 id='2'>Why use NodeJs</h5>
                            <h6>Performance</h6>
                            <p>NodeJs is a single threaded, non-blocking, asynchronous runtime. In
                            simpler terms, nodejs can process multiple tasks using one thread concurrently
                            which maked NodeJs extremely powerful.
                            </p>
                            <h6>Scalability</h6>
                            <p>Due to NodeJs being very lightweight, frameworks such as Docker and Kubernates
                            can harness the power of NodeJs to create scalable microservices architectures
                            to tackle some computing and data handeling problems more efficiently.
                            </p>
                            <h5 id='3'>NodeJs vs. Others</h5>
                            <p>NodeJs is considered more as a runtime environment rather than our usual
                            server. Meaning NodeJs can be used to create virtually anything we can imagine.
                            However, python language shows some what similar characteristics to
                            NodeJs. </p><br /><br />
                            <h6>Performance</h6><p>
                                Performance is one of the key areas that most of the highlevel programming languages
                                fall behind. From them NodeJs proven to be one of the high performing programming
                                language. To put things in to perspective, python being one of the most popular high level
                                programming languages fall behind from performance. </p>
                            <h6>Usability</h6><p>
                                NodeJS can be used to wide area of tasks such as web development,
                                microservices and even as mobile development framework with the help of
                                packages like react-native. But most of todays highlevel programming languages
                                    only excels in certain task domain. </p>
                            <h5 id='4'>Drawbacks of NodeJS</h5>
                            <h6>Handeling CPU intensive tasks</h6>
                            <p>Although NodeJs proven to be one of the most high performing languages,
                                it falls behind when computing CPU intensive tasks. </p>
                            <h6>Speed of coding</h6>
                            <p>Developing NodeJs applications take a bigger development cycle compared to that of
                            Python. Coding in python is relatively easier compared to NodeJs. Even developing web applications
                                using Flask and Django is comparatively straightforward compared with NodeJs</p>
                            <h6>New technology</h6>
                            <p>NodeJs is a really new technology which industry is adapting quicky. Even deep learning
                            libraries such as Tensorflow have released their own deep learning libraries on top of NodeJs.
                            But there is still a shortage on tutorial materials and documentation in NodeJs community.
                            </p><hr />
                            <h2>React - A JavaScript library for building user interfaces</h2>
                            <CardImg src={'https://miro.medium.com/max/2400/1*rpHtt5VicGT3T-mVJJ2jFw.gif'} style={{ width: "100%" }} />
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}

export default ReactTutorial;
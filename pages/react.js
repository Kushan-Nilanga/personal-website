import { Container, CardImg, Card } from 'reactstrap';
import Navigation from "../components/navigation";

class ReactTutorial extends React.Component {
    render() {
        return (
            <div>
                <Navigation header="React Tutorial" />
                <Container style={{ padding: "1em" }}>
                    <div>
                        <div>
                            <h5><a href="#1">Introduction</a></h5>
                            <ul>
                                <li><a href="#1">What is NodeJs</a></li>
                                <li><a href="#2">Why use NodeJs</a>
                                </li>
                                <li><a href="#3">NodeJs vs. Others</a></li>
                                <li><a href="#4">Drawbacks of NodeJs</a></li>
                            </ul>
                            <h5><a href="#5">React</a></h5>
                            <ul>
                                <li><a href="#5">Introduction to React</a></li>
                                <li><a href="#6">React setup</a></li>
                                <li><a href="#7">What is DOM</a></li>
                                <li><a href="#8">How does react handle DOM</a></li>
                                <li><a href="#9">React JSX</a></li>
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
                            NodeJs. </p>
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
                            <a href="https://reactjs.org/" id='5'><CardImg src={'https://miro.medium.com/max/2400/1*rpHtt5VicGT3T-mVJJ2jFw.gif'} style={{ width: "100%" }} /></a><br /><br />
                            <h2><a href="https://reactjs.org/">React - A JavaScript library for building user interfaces</a></h2>
                            <h5>Introduction to React</h5>
                            <p>React is a javascript library to create user interfaces using javascript. React has a wide range of uses
                            because react can be used to creat cross-platform applications using NodeJS. React can be used to make web
                            user interfaces painlessly in object oriented manner. We will discuss different convenient features such
                                as <code>Component, render(), props &amp; states</code>. React is basically a higher level package to
                                create NodeJS GUIs.
                                We will be diving deep into the rabbit hole in the coming topics.
                            </p>
                            <h5 id="6">React setup</h5>
                            <p>Just like we use <code>npm</code> to install different packages to <code>node_packages</code> we can
                            us <code>npx</code> to create different filestructures. So similarly we can use it to create a react application.</p>
                            <code> npm install -g npx</code><br /><br />
                            <p> This will install a nodejs package runner. What is basically does is that it'll install a nodejs package similar to 
                             npm which allows us to create folder structures from templates provides by React, Express, Nextjs etc.
                            </p>
                            <Card style={{ backgroundColor: "black", width: "100%" }}>
                                <div style={{ padding: "1em 4em 1em 4em" }}>

                                    <code> npx create-react-app my-application</code><br />
                                    <code> cd my-application</code><br />
                                    <code> npm start</code>
                                </div>
                            </Card><br /><br />
                            <p>If the above code ran successfully, your folder should look a something like this.</p>
                            <img style={{ width: "15em" }} src="https://tducasse.com/static/1dc5c171044f112217c91def9e659a42/276eb/architecture.png" />
                            <br /><br />
                            <h5 id="7">What is DOM</h5>
                            <p>Document Object Model is a programming interface for XML which allows programs to structure, style
                             and change content. React helps developers make changes and updates to DOM programmeticaly using javascript.
                             React has it's own virtual DOM which react references before making changes to real DOM in the browser.
                             We don't have to worry too much about handeling DOM and making changes because React takecare of all those nitty
                             gritty stuff under the hood. <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction">Further reading...</a>   
                            </p>
                            <h5 id="8">How does react handle DOM</h5>
                            <p>React has its own virtual DOM which it updates and compares with it's old versions and update the real DOM respectively.
                             To identify changes in virtual DOM, React implements <code><a href="">states</a></code> and <code><a href="">props</a></code> which 
                             we will be diving into deep in future sections.
                            </p>
                            <h5 id="9">React JSX</h5>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}

export default ReactTutorial; 
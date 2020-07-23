import { Container, Label } from 'reactstrap'
import Navigation from "../components/navigation"
import { Card, CardBody, CardImg, Row, Col, Button, Input } from "reactstrap"
import { XYPlot, LineSeries, HorizontalGridLines, VerticalGridLines, XAxis, YAxis } from "react-vis"
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import ReactDOM from 'react-dom'
hljs.registerLanguage('javascript', javascript);

class Complexity extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 'for(var a = 0; a < N; a++){console.log(a)}', loop: 100 };
        this.handleRange = this.handleRange.bind(this)
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.checkBox = this.checkBox.bind(this)
        this.calC1 = this.calC1.bind(this)
        this.calC2 = this.calC2.bind(this)
        this.calC3 = this.calC3.bind(this)
        this.calC4 = this.calC4.bind(this)
        this.calC5 = this.calC5.bind(this)
        this.calC6 = this.calC6.bind(this)
    }

    handleRange(e) {
        this.setState({ loop: e.target.value });
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    calC1(event) {
        this.setState({ c1val: event.target.value })
        var x = this.state.loop
        var dat = []
        for (var a = 0; a < x; a++) {
            dat.push({ x: a, y: event.target.value })
        }
        this.setState({ c1: dat })
        var elem = <XYPlot height={400} width={400} id="plot">
            <HorizontalGridLines />
            <VerticalGridLines />
            <XAxis />
            <YAxis />
            <LineSeries data={this.state.c1} curve={'curveMonotoneX'} />
            <LineSeries data={this.state.c2} curve={'curveMonotoneX'} />
            <LineSeries data={this.state.c3} curve={'curveMonotoneX'} />
            <LineSeries data={this.state.c4} curve={'curveMonotoneX'} />
            <LineSeries data={this.state.c5} curve={'curveMonotoneX'} />
            <LineSeries data={this.state.c6} curve={'curveMonotoneX'} />
        </XYPlot>
        ReactDOM.render(elem, document.getElementById("plt"))
    }

    calC2(event) {
        this.setState({ c2val: event.target.value })
        var x = this.state.loop
        var dat = []
        for (var a = 0; a < x; a++) {
            dat.push({ x: a, y: event.target.value / 100 * a })
        }
        this.setState({ c2: dat })
        var elem = <XYPlot height={400} width={400} id="plot">
            <HorizontalGridLines />
            <VerticalGridLines />
            <XAxis />
            <YAxis />
            <LineSeries data={this.state.data} curve={'curveMonotoneX'} />
            <LineSeries data={this.state.c1} curve={'curveMonotoneX'} />
            <LineSeries data={this.state.c2} curve={'curveMonotoneX'} />
            <LineSeries data={this.state.c3} curve={'curveMonotoneX'} />
            <LineSeries data={this.state.c4} curve={'curveMonotoneX'} />
            <LineSeries data={this.state.c5} curve={'curveMonotoneX'} />
            <LineSeries data={this.state.c6} curve={'curveMonotoneX'} />
        </XYPlot>
        ReactDOM.render(elem, document.getElementById("plt"))
    }

    calC3(event) {
        this.setState({ c3val: event.target.value })
        var x = this.state.loop
        var dat = []
        for (var a = 0; a < x; a++) {
            dat.push({ x: a, y: event.target.value / 1000 * a * a })
        }
        this.setState({ c3: dat })
        var elem = <XYPlot height={400} width={400} id="plot">
            <HorizontalGridLines />
            <VerticalGridLines />
            <XAxis />
            <YAxis />
            <LineSeries data={this.state.data} curve={'curveMonotoneX'} />
            <LineSeries data={this.state.c1} curve={'curveMonotoneX'} />
            <LineSeries data={this.state.c2} curve={'curveMonotoneX'} />
            <LineSeries data={this.state.c3} curve={'curveMonotoneX'} />
            <LineSeries data={this.state.c4} curve={'curveMonotoneX'} />
            <LineSeries data={this.state.c5} curve={'curveMonotoneX'} />
            <LineSeries data={this.state.c6} curve={'curveMonotoneX'} />
        </XYPlot>
        ReactDOM.render(elem, document.getElementById("plt"))
    }

    calC4(event) {
        this.setState({ c4val: event.target.value })
        var x = this.state.loop
        var dat = []
        for (var a = 0; a < x; a++) {
            dat.push({ x: a, y: event.target.value / 1000 * a * a * a })
        }
        this.setState({ c4: dat })
        var elem = <XYPlot height={400} width={400} id="plot">
            <HorizontalGridLines />
            <VerticalGridLines />
            <XAxis />
            <YAxis />
            <LineSeries data={this.state.data} curve={'curveMonotoneX'} />
            <LineSeries data={this.state.c1} curve={'curveMonotoneX'} />
            <LineSeries data={this.state.c2} curve={'curveMonotoneX'} />
            <LineSeries data={this.state.c3} curve={'curveMonotoneX'} />
            <LineSeries data={this.state.c4} curve={'curveMonotoneX'} />
            <LineSeries data={this.state.c5} curve={'curveMonotoneX'} />
            <LineSeries data={this.state.c6} curve={'curveMonotoneX'} />
        </XYPlot>
        ReactDOM.render(elem, document.getElementById("plt"))
    }

    calC5(event) {
        this.setState({ c5val: event.target.value })
        var x = this.state.loop
        var dat = []
        for (var a = 1; a < x; a++) {
            dat.push({ x: a, y: event.target.value * Math.log10(a) })
        }
        this.setState({ c5: dat })
        var elem = <XYPlot height={400} width={400} id="plot">
            <HorizontalGridLines />
            <VerticalGridLines />
            <XAxis />
            <YAxis />
            <LineSeries data={this.state.data} curve={'curveMonotoneX'} />
            <LineSeries data={this.state.c1} curve={'curveMonotoneX'} />
            <LineSeries data={this.state.c2} curve={'curveMonotoneX'} />
            <LineSeries data={this.state.c3} curve={'curveMonotoneX'} />
            <LineSeries data={this.state.c4} curve={'curveMonotoneX'} />
            <LineSeries data={this.state.c5} curve={'curveMonotoneX'} />
            <LineSeries data={this.state.c6} curve={'curveMonotoneX'} />
        </XYPlot>
        ReactDOM.render(elem, document.getElementById("plt"))
    }

    calC6(event) {
        this.setState({ c6val: event.target.value })
        var x = this.state.loop
        var dat = []
        for (var a = 1; a < x; a++) {
            dat.push({ x: a, y: event.target.value / 100 * a * Math.log10(a) })
        }
        this.setState({ c6: dat })
        var elem = <XYPlot height={400} width={400} id="plot">
            <HorizontalGridLines />
            <VerticalGridLines />
            <XAxis />
            <YAxis />
            <LineSeries data={this.state.data} curve={'curveMonotoneX'} />
            <LineSeries data={this.state.c1} curve={'curveMonotoneX'} />
            <LineSeries data={this.state.c2} curve={'curveMonotoneX'} />
            <LineSeries data={this.state.c3} curve={'curveMonotoneX'} />
            <LineSeries data={this.state.c4} curve={'curveMonotoneX'} />
            <LineSeries data={this.state.c5} curve={'curveMonotoneX'} />
            <LineSeries data={this.state.c6} curve={'curveMonotoneX'} />
        </XYPlot>
        ReactDOM.render(elem, document.getElementById("plt"))
    }

    checkBox(event) {
        switch (event.target.id) {
            case "c1":
                if (event.target.checked == true) {
                    var elem = <div><input type="range" onChange={this.calC1}></input></div>
                    ReactDOM.render(elem, document.getElementById("check1"))
                } else {
                    var elem = <div></div>
                    ReactDOM.render(elem, document.getElementById("check1"))
                } break;
            case "c2":
                if (event.target.checked == true) {
                    var elem = <div><input type="range" min="1" max="1000" onChange={this.calC2}></input></div>
                    ReactDOM.render(elem, document.getElementById("check2"))
                } else {
                    var elem = <div></div>
                    ReactDOM.render(elem, document.getElementById("check2"))
                } break;
            case "c3":
                if (event.target.checked == true) {
                    var elem = <div><input type="range" min="1" max="1000" onChange={this.calC3}></input></div>
                    ReactDOM.render(elem, document.getElementById("check3"))
                } else {
                    var elem = <div></div>
                    ReactDOM.render(elem, document.getElementById("check3"))
                } break;
            case "c4":
                if (event.target.checked == true) {
                    var elem = <div><input type="range" min="1" max="1000" onChange={this.calC4}></input></div>
                    ReactDOM.render(elem, document.getElementById("check4"))
                } else {
                    var elem = <div></div>
                    ReactDOM.render(elem, document.getElementById("check4"))
                } break;
            case "c5":
                if (event.target.checked == true) {
                    var elem = <div><input type="range" min="1" max="300" onChange={this.calC5}></input></div>
                    ReactDOM.render(elem, document.getElementById("check5"))
                } else {
                    var elem = <div></div>
                    ReactDOM.render(elem, document.getElementById("check5"))
                } break;
            case "c6":
                if (event.target.checked == true) {
                    var elem = <div><input type="range" min="1" max="100" onChange={this.calC6}></input></div>
                    ReactDOM.render(elem, document.getElementById("check6"))
                } else {
                    var elem = <div></div>
                    ReactDOM.render(elem, document.getElementById("check6"))
                } break;
        }
    }

    handleSubmit(event) {
        var str = this.state.value;
        var dat = []
        for (var i = 0; i < this.state.loop; i++) {
            var formatted = str.split("N").join(`${i}`)
            var start = new Date().getTime();
            eval(formatted)
            var end = new Date().getTime()
            var time = end - start
            dat.push({ x: i, y: time })
        }
        // <LineSeries data={[{ x: 0, y: 0 }, { x: 100, y: 10 }]} curve={'curveMonotoneX'} />
        this.setState({ data: dat })
        var ele =
            <div style={{ margin: "2em" }}>
                <Row>
                    <Col md="4">
                        <div>
                            <h5>Controle Panel</h5>
                            <p>Click to change the coefficients. Use arrow keys after clicking sliders for fine tuning</p>
                            <div>
                                <Label><Input id="c1" type="checkbox" onChange={this.checkBox} /> O(1)</Label><br /><div id="check1"></div>
                                <Label><Input id="c2" type="checkbox" onChange={this.checkBox} /> O(n)</Label><br /><div id="check2"></div>
                                <Label><Input id="c3" type="checkbox" onChange={this.checkBox} /> O(n<sup>2</sup>)</Label><br /><div id="check3"></div>
                                <Label><Input id="c4" type="checkbox" onChange={this.checkBox} /> O(n<sup>3</sup>)</Label><br /><div id="check4"></div>
                                <Label><Input id="c5" type="checkbox" onChange={this.checkBox} /> O(log(n))</Label><br /><div id="check5"></div>
                                <Label><Input id="c6" type="checkbox" onChange={this.checkBox} /> O(nlog(n))</Label><br /><div id="check6"></div>
                            </div>
                        </div>
                    </Col>
                    <Col md="8">
                        <div id="plt">
                        </div>
                    </Col>
                </Row>
            </div >
        ReactDOM.render(ele, document.getElementById("toor"))
        var elem = <XYPlot height={400} width={400} id="plot">
            <HorizontalGridLines />
            <VerticalGridLines />
            <XAxis />
            <YAxis />
            <LineSeries data={this.state.data} curve={'curveMonotoneX'} />
            <LineSeries data={this.state.c1} curve={'curveMonotoneX'} />
            <LineSeries data={this.state.c2} curve={'curveMonotoneX'} />
        </XYPlot>
        ReactDOM.render(elem, document.getElementById("plt"))
        event.preventDefault()
    }

    render() {
        return (
            <div>
                <Navigation />
                <Container>
                    <div className="App">
                        <div style={{ padding: "0.5em" }}>
                            <div>
                                <h1>Algorithm test</h1>
                                <p>Use smaller range for inefficient algorithms. O(n<sup>3</sup>) (Range:15) <br />
                                    Have your developer console open for webpage to work correctly.
                                    Write your javascript code and Press run to view how the algorithm scales.
                                </p>
                            </div>
                            <form onSubmit={this.handleSubmit}>
                                <div style={{ margin: "1em" }}>
                                    <label>Range : {this.state.loop || 50}</label>
                                    <input style={{ marginLeft: "1em" }} type="range" min="1" value={this.state.loop} max="150" name="range" onChange={this.handleRange} />
                                </div>
                                <pre className="hljs-body">
                                    <code className="javascript">
                                        <Input style={{ height: "15em" }}
                                            type="textarea"
                                            value={this.state.value}
                                            onChange={this.handleChange} />
                                    </code>
                                </pre>
                                <div style={{ textAlign: "center" }}>
                                    <Button style={{ height: "3em" }}>Run</Button>
                                </div>
                            </form>
                            <div id="toor" style={{ alignItems: "center", display: "flex", justifyContent: "center" }}>

                            </div>
                            <div style={{margin:"1em"}}>
                                <Row>
                                    <Col>
                                        <Card>
                                            <CardImg top width="100%" src="/img/on.png" alt="O(n)" />
                                            <CardBody>
                                                <p>O(n) Complexity</p>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card>
                                            <CardImg top width="100%" src="/img/on2.png" alt="O(n)" />
                                            <CardBody>
                                                <p>O(n<sup>2</sup>) Complexity</p>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card>
                                            <CardImg top width="100%" src="/img/on3.png" alt="O(n)" />
                                            <CardBody>
                                                <p>O(n<sup>3</sup>) Complexity</p>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card>
                                            <CardImg top width="100%" src="/img/logn.png" alt="O(n)" />
                                            <CardBody>
                                                <p>O(log(n)) Complexity</p>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}

export default Complexity;
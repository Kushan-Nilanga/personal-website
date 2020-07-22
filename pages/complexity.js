import App, { Container } from 'reactstrap'
import Navigation from "../components/navigation"
import { FormText, Button, Form, FormGroup, Input } from "reactstrap"
import { XYPlot, LineSeries, HorizontalGridLines, VerticalGridLines, XAxis, YAxis } from "react-vis"
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);

class Complexity extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 'for(var a = 0; a < N; a++){console.log(a)}' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        var str = this.state.value;
        var dat = []
        for (var i = 0; i < 100; i++) {
            var formatted = str.split("N").join(`${i}`)
            var start = new Date().getTime();
            eval(formatted)
            var end = new Date().getTime()
            var time = end - start
            dat.push({x:i,y:time})
        }
        this.setState({ data: dat })
        event.preventDefault();
    }

    render() {
        const data = [
            { x: 0, y: 0 },
            { x: 1, y: 1 },
            { x: 2, y: 4 },
            { x: 3, y: 9 },
            { x: 4, y: 16 },
            { x: 5, y: 25 },
            { x: 6, y: 36 },
            { x: 7, y: 49 },
            { x: 8, y: 64 },
            { x: 9, y: 81 }
        ];
        return (
            <div>
                <Navigation />
                <Container>
                    <div className="App">
                        <div style={{ padding: "1em" }}>
                            <form onSubmit={this.handleSubmit}>
                                <pre className="hljs-body">
                                    <code className="javascript">
                                        <Input style={{ height: "15em" }}
                                            type="textarea"
                                            value={this.state.value}
                                            onChange={this.handleChange} />
                                    </code>
                                </pre>
                                <div><Button style={{ marginTop: "1em" }} type="submit" value="Submit">Analyse</Button></div>
                            </form>
                            <XYPlot height={300} width={300}>
                                <HorizontalGridLines />
                                <VerticalGridLines />
                                <XAxis />
                                <YAxis />
                                <LineSeries data={this.state.data} curve={'curveMonotoneX'} />
                            </XYPlot>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}

export default Complexity;
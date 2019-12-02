import Navigation from '../components/navigation'
import React from 'react'
import Photograph from "../components/photograph"
import {Container} from "reactstrap"

class Photography extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Navigation />
                <Container>
                    <Photograph />
                </Container>
            </div>
        )
    }
}

export default Photography




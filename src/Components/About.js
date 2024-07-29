import {Component} from 'react'
import User from './User'

class About extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return (
            <>
                <User />
            </>
        )
    }
}

export default About;
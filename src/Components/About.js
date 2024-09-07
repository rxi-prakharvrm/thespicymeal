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
                {/* <h1 className="about">About</h1> */}
                <User />
            </>
        )
    }
}

export default About;
import axios from "axios";
import React from "react";

class userName extends React.Component {
    state = {
        name: ""
    };

    componentDidMount() {
        const getName = async () => {
            const url = `https://jsonplaceholder.typicode.com/users/${this.props.id}`;
            const res = await axios.get(url);
            this.setState({ name: res.data.name });
        }
        getName();
    }
    render() {
        return (
            <div>
                {this.state.name}
            </div >
        );
    }


}

export default userName;

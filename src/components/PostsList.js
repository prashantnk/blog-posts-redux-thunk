import React from "react";
import { fetchPosts } from '../actions';
import { connect } from 'react-redux';

class PostsList extends React.Component {
    componentDidMount() {
        this.props.fetchPosts();
    }
    render() {
        return (
            <div>PostsLists</div>
        );
    }
};
const mapStateToProps = (state) => {
    return {};
}
export default connect(mapStateToProps, { fetchPosts })(PostsList);
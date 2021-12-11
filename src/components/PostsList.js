import React from "react";
import { FetchPostsWithUser } from '../actions';
import { connect } from 'react-redux';
// import UserName from "./UserName";
import UserHeader from "./UserHeader";
class PostsList extends React.Component {
    componentDidMount() {
        this.props.FetchPostsWithUser();
    }
    renderList() {
        const list = this.props.posts.map((post) => {
            return (
                <div key={post.id} className="item">
                    <i className="large middle aligned icon user"></i>
                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                        <UserHeader id={post.userId} />
                    </div>
                </div>
            )
        });
        return list;
    }
    render() {
        return (
            <div className="ui relaxed divided list">
                {this.renderList()}
            </div>
        );
    }
};
const mapStateToProps = (state) => {
    return { posts: state.posts };
}
export default connect(mapStateToProps, { FetchPostsWithUser })(PostsList);
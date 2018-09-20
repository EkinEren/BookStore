import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBooksWithRedux } from "../actions/SearchBook";
import { Icon, Spin } from "antd";

const antLoadingIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

class Browse extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            input: ''
        }
    }
    componentDidMount() {
        this.props.fetchBooksWithRedux();
    }


    render() {
        { console.log(this.props.books) }
        return (
            <ul>
                {
                    this.props.books &&
                    this.props.books.map((book) => {
                        return (
                            <li key={book.index}>{book}</li>
                        )
                    })
                }
            </ul>
        );
    }
}

const mapStateToProps = state => ({
    books: state.books
});

let Container = connect(mapStateToProps, { fetchBooksWithRedux })(Browse);

export default Container;
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBooks } from "../actions/SearchBook";

class Browse extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(fetchBooks());
    }

    render() {
        const { error, loading, books } = this.props;

        if (error) {
            return <div>Error! {error.message}</div>;
        }

        if (loading) {
            return <div>Loading...</div>; //antd load again
        }

        return (
            <ul>
                {books.map(book =>
                    <li key={book.id}>{book.name}</li>
                )}
            </ul>
        );
    }
}

const mapStateToProps = state => ({
    books: state.books.items,
    loading: state.books.loading,
    error: state.books.error
});

connect(mapStateToProps)(Browse);

export default Browse;
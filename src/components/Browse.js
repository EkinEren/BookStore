import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBooksWithRedux } from "../actions/SearchBook";
import { Icon, Spin } from "antd";
import CardItem from "./CardItem";

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
        const { loading } = this.props;

        if (loading) {
            return <div>
                <br />
                <Spin indicator={antLoadingIcon} />
                <h2>Loading...</h2>
            </div>
        }

        return (
            <ul>
                {
                    this.props.books &&
                    this.props.books.map((book, index) => {
                        return (
                            <CardItem
                                key={index}
                                title={book.volumeInfo.title}
                                image={book.volumeInfo.imageLinks.smallThumbnail}
                                year={book.volumeInfo.publishedDate}
                                description={book.volumeInfo.description} />
                        )
                    })
                }
            </ul>
        );
    }
}

const mapStateToProps = state => ({
    books: state.books,
    loading: state.loading
});

let Container = connect(mapStateToProps, { fetchBooksWithRedux })(Browse);

export default Container;

/*<ul key={index}>
<li>{book.volumeInfo.title}</li>
<li>{book.volumeInfo.description}</li>
</ul>*/
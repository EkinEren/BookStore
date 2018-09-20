import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBooksWithRedux } from "../actions/SearchBook";
import { Spin, Icon } from "antd";
import CardItem from "./CardItem";
import '../styles/Card.css';

const antLoadingIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

class Browse extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            input: ''
        }
    }

    handleSubmit = (e) => {

        e.preventDefault();
        this.props.fetchBooksWithRedux(this.state.input);
    }

    handleChange = (e) => {

        this.state.input = e.target.value;
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
            <div>
                <form className="well" layout="inline" onSubmit={this.handleSubmit}>
                    <fieldset className="fieldset">
                        <legend>Search Books...</legend>
                        <label htmlFor="title" style={{ fontSize: "large" }}> Title: </label>
                        <input type="text" id="title" name="title" style={{ width: 200, marginLeft: 20 }} onChange={this.handleChange} />&nbsp;
                        <button type="primary" htmlType="submit" className="Button-space"> Submit </button>
                        <button type="dange" htmlType="reset" className="Button-space" > Reset </button>
                    </fieldset>
                </form>
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
            </div>
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
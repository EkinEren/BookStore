import React from "react";
import { connect } from "react-redux";
import { fetchBooksWithRedux } from "../actions/SearchBook";
import { addItem } from "../actions/CartActions";
import { Spin, Icon, Button, Form, Input } from "antd";
import CardItem from "./CardItem";
import '../styles/Card.css';

const antLoadingIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

class Browse extends React.Component {

    state = {
        input: ''
    }

    handleSubmit = (e) => {

        e.preventDefault();
        this.props.fetchBooksWithRedux(this.state.input);
    }

    handleChange = (e) => {

        this.setState({
            input: e.target.value
        })
    }


    render() {

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
                <Form className="well" layout="inline" onSubmit={this.handleSubmit}>
                    <fieldset className="fieldset">
                        <legend>Search Books...</legend>
                        <label htmlFor="title" style={{ fontSize: "large" }}> Title: </label>
                        <Input type="text" id="title" name="title" style={{ width: 200, marginLeft: 20 }} onChange={this.handleChange} />&nbsp;
                        <Button type="primary" htmlType="submit" className="Button-space"> Submit </Button>
                        <Button type="danger" htmlType="reset" className="Button-space" > Reset </Button>
                    </fieldset>
                </Form>
                <div style={{ padding: '30px', display: "flex", flexWrap: "wrap" }}>
                    {

                        this.props.books.map((book, index) => {
                            return (
                                <CardItem
                                    key={index}
                                    title={book.volumeInfo.title}
                                    image={book.volumeInfo.imageLinks.smallThumbnail}
                                    price={book.saleInfo.listPrice.amount}
                                    addToCart={() => this.props.addItem(this.props.books[index])}
                                    description={book.volumeInfo.description} />
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    books: state.searchReducer.books,
    loading: state.searchReducer.loading,
    itemsInCart: state.cartReducer.itemsInCart
});

let Container = connect(mapStateToProps, { fetchBooksWithRedux, addItem })(Browse);

export default Container;

/*(this.props.itemsInCart.filter(item => item.id !== index.id)) ?
            this.props.addItem(this.props.books[index]) : toggleAlert = true*/
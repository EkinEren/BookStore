import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBooksWithRedux } from "../actions/SearchBook";
import { Spin, Icon, Pagination, Button, Form, Input, Col } from "antd";
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

        this.setState({
            input: e.target.value
        })
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
                <Form className="well" layout="inline" onSubmit={this.handleSubmit}>
                    <fieldset className="fieldset">
                        <legend>Search Books...</legend>
                        <label htmlFor="title" style={{ fontSize: "large" }}> Title: </label>
                        <Input type="text" id="title" name="title" style={{ width: 200, marginLeft: 20 }} onChange={this.handleChange} />&nbsp;
                        <Button type="primary" htmlType="submit" className="Button-space"> Submit </Button>
                        <Button type="danger" htmlType="reset" className="Button-space" > Reset </Button>
                    </fieldset>
                </Form>
                {
                    this.props.books &&
                    this.props.books.map((book, index) => {
                        return (
                            <div style={{ padding: '30px' }}>
                                <Col span={8}>
                                    <CardItem
                                        key={index}
                                        title={book.volumeInfo.title}
                                        image={book.volumeInfo.imageLinks.smallThumbnail}
                                        year={book.volumeInfo.publishedDate} />
                                </Col>
                            </div>
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

/*<div className="card-deck">
  <div className="card">
    <img className="card-img-top" src={book.volumeInfo.imageLinks.smallThumbnail} alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">{book.volumeInfo.title}</h5>
      <p class="card-text">{book.volumeInfo.imageLinks.smallThumbnail}</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">{book.volumeInfo.publishedDate}</small>
    </div>
  </div>
</div>*/

//üstte 2 tane smallthumbnail var ondan error atmış
//https://getbootstrap.com/docs/4.0/components/card/
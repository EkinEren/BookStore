import React from "react";
import { connect } from "react-redux";
import { Table, Button } from 'antd';
import { removeItem } from "../actions/CartActions";

const { Column } = Table;
const total = 0;

class ShoppingCart extends React.Component {

    render() {
        return (
            <div>
                <h1>Books in your cart : </h1>
                <p>Number of items in your cart : {this.props.numberOfItems}</p>
                <Table dataSource={this.props.itemsInCart} rowKey="id" footer={() => 'Total Cost : '} >
                    <Column
                        title="Title"
                        dataIndex="volumeInfo.title"
                        key="volumeInfo.title"
                    />
                    <Column
                        title="Author(s)"
                        dataIndex="volumeInfo.authors[0]"
                        key="volumeInfo.authors[0]"
                    />
                    <Column
                        title="Price"
                        dataIndex="saleInfo.listPrice.amount"
                        key="saleInfo.listPrice.amount"
                    />
                    <Column
                        title="Remove Item"
                        key="id"
                        render={(obj, row) => (
                            <span>
                                <Button type="danger" onClick={() => this.props.removeItem(this.props.itemsInCart.filter(item => item.id === row.id))}>Delete</Button>
                                {console.log(row.id)}
                                {console.log(this.props.itemsInCart.filter(item => item.id === row.id))}
                                {console.log(this.props.itemsInCart.map(item => (item.saleInfo.listPrice.amount)))}
                            </span>
                        )}
                    />
                </Table>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    itemsInCart: state.cartReducer.itemsInCart,
    numberOfItems: state.cartReducer.numberOfItems
});

let Cart = connect(mapStateToProps, { removeItem })(ShoppingCart);

export default Cart;

//to do : make delete a link button, delete function according to index, add footer checkout. birden çok author için render.
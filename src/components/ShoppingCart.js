import React from "react";
import { connect } from "react-redux";
import { Table, Button } from 'antd';
import { removeItem } from "../actions/CartActions";

const { Column } = Table;
let totalCostArray = [];
let totalCost = 0;

class ShoppingCart extends React.Component {

    render() {

        totalCostArray = (this.props.itemsInCart.map(item => (item.saleInfo.listPrice.amount)))

        return (
            <div>
                <h1>Books in your cart : </h1>
                <p>Number of items in your cart : {this.props.itemsInCart.length + 1}</p>
                <Table dataSource={this.props.itemsInCart} rowKey="id" >
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
                            </span>
                        )}
                    />
                </Table>
                <p><b>Total Cost :</b> {totalCostArray.length !== 0 ? totalCost = totalCostArray.reduce((total, amount) => total + amount) : totalCost = 0}</p>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    itemsInCart: state.cartReducer.itemsInCart
});

let Cart = connect(mapStateToProps, { removeItem })(ShoppingCart);

export default Cart;

//to do : make delete a link button, add footer checkout. Footer is a pain in the booty, can just nvm. render for more than one authored books, stateless func çevir.
//id göre alıyor, birden fazla aynı id item eklemesin. eklemeye çalışırsa alert (browse sayfasında)
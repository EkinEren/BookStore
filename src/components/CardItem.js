import React from 'react';
import '../styles/Card.css';
import { Card, Button, Modal } from 'antd';

class CardItem extends React.Component {

    state = {
        isVisible: false
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    handleOk = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }

    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }

    render() {
        return (
            <div style={{ display: "inline-block", padding: 30 }}>
                <Card
                    title={this.props.title}
                    className="well"
                    cover={<img src={this.props.image} alt="Not available" style={{ width: 200, height: 250, paddingTop: 10, paddingLeft: 35 }} />}
                >
                    <p>{this.props.price} {this.props.currencyCode}</p>
                    <Button type="primary" className="Button-space" onClick={this.showModal}> Details </Button>
                    <Button type="primary" className="Button-space" onClick={this.props.addToCart}> Add to Cart </Button>
                    <Modal
                        title="Book Details"
                        style={{ textAlign: "center" }}
                        visible={this.state.visible}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                    >
                        <p><b>Title : </b>{this.props.title}</p>
                        <p><b>Author(s) : </b>{this.props.authors}</p>
                        <p><b>Publisher : </b>{this.props.publisher}</p>
                        <p><b>Published Date : </b>{this.props.date}</p>
                        <p><b>Description : </b>{this.props.description}</p>

                    </Modal>
                </Card>
            </div>
        );
    }
}

export default CardItem;
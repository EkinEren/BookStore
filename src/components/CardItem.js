import React from 'react';
import '../styles/Card.css';
import { Card, Col, Row } from 'antd';

//max-height in card.css
class CardItem extends React.Component {

    render() {
        return (
            <div>
                <Row gutter={12}>
                    <Card
                        title={this.props.title}
                        style={{ width: 150 }}
                        className="well"
                        cover={<img src={this.props.image} alt="Not available" />}
                    >
                        <p>{this.props.year}</p>
                    </Card>
                </Row>
            </div>
        );
    }
}

export default CardItem;
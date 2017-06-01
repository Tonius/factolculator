import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Col, Grid, Row} from 'react-bootstrap';
import sortBy from 'lodash.sortby';

import calculate from 'src/calculate';
import {mapObject} from 'src/utils';


const separator = <span style={{marginLeft: '2px', marginRight: '2px'}}> • </span>;

export default class CalculatorResults extends Component {
    static propTypes = {
        itemToCraft: PropTypes.string.isRequired,
        unitsPerMinute: PropTypes.number.isRequired,
        assemblerSpeed: PropTypes.number.isRequired,
        furnaceSpeed: PropTypes.number.isRequired,
    }

    shouldComponentUpdate(nextProps) {
        return (
            nextProps.itemToCraft !== this.props.itemToCraft ||
            nextProps.unitsPerMinute !== this.props.unitsPerMinute ||
            nextProps.assemblerSpeed !== this.props.assemblerSpeed ||
            nextProps.furnaceSpeed !== this.props.furnaceSpeed
        );
    }

    render() {
        let {tree, totals} = calculate(
            this.props.itemToCraft,
            this.props.unitsPerMinute,
            this.props.assemblerSpeed,
            this.props.furnaceSpeed
        );

        return (
            <Grid>
                <Row>
                    <Col xs={12} md={6}>
                        <h3 style={{marginBottom: '30px'}}>Tree</h3>

                        <ul style={{marginBottom: '50px'}}>
                            {this.renderTree(tree)}
                        </ul>
                    </Col>

                    <Col xs={12} md={6}>
                        <h3 style={{marginBottom: '30px'}}>Total per item</h3>

                        <ul>
                            {this.renderTotals(totals)}
                        </ul>
                    </Col>
                </Row>
            </Grid>
        );
    }

    renderTree(data) {
        let ingredients = null;
        if (data.crafting !== null) {
            ingredients = <ul>{data.crafting.ingredients.map(i => this.renderTree(i))}</ul>;
        }

        return (
            <Item
                key={data.item}
                itemName={data.itemName}
                perMinute={data.perMinute}
                production={data.crafting}>
                {ingredients}
            </Item>
        );
    }

    renderTotals(totals) {
        let list = mapObject(totals, (data, item) => ({...data, item}));
        list = sortBy(list, data => data.itemName);

        return list.map(data => (
            <Item
                key={data.item}
                itemName={data.itemName}
                perMinute={data.perMinute}
                production={data.crafting} />
        ));
    }
}


class Item extends Component {
    static propTypes = {
        itemName: PropTypes.string.isRequired,
        perMinute: PropTypes.number.isRequired,
        production: PropTypes.shape({
            producedBy: PropTypes.string.isRequired,
            producerAmount: PropTypes.number.isRequired,
        }),
        children: PropTypes.node,
    }

    static defaultProps = {
        production: null,
        children: null,
    }

    state = {
        exactProducerAmountShown: false,
    }

    handleProducerAmountClick = () => {
        this.setState({exactProducerAmountShown: !this.state.exactProducerAmountShown});
    }

    render() {
        return (
            <li style={{marginLeft: '-15px'}}>
                <strong>{this.props.itemName}</strong>
                {separator}
                {this.props.perMinute}/m

                {this.renderProduction()}

                {this.props.children}
            </li>
        );
    }

    renderProduction() {
        if (this.props.production === null) {
            return null;
        }

        let {producedBy, producerAmount} = this.props.production;

        producedBy = producedBy.match(/[A-Za-z][a-z]*/g).map(word => word.toLowerCase()).join(' ');

        return (
            <span>
                {separator}
                {this.renderProducerAmount(producerAmount)} {producedBy}{Math.ceil(producerAmount) === 1 ? null : 's'}
            </span>
        );
    }

    renderProducerAmount(amount) {
        if (amount === Math.ceil(amount)) {
            return <span>{amount}</span>;
        }

        let style = {
            cursor: 'pointer',
        };

        if (this.state.exactProducerAmountShown) {
            style.color = '#0000ff';
        }

        return (
            <span
                style={style}
                onClick={this.handleProducerAmountClick}>
                {this.state.exactProducerAmountShown ? null : '~'}
                {this.state.exactProducerAmountShown ? amount : Math.ceil(amount)}
            </span>
        );
    }
}

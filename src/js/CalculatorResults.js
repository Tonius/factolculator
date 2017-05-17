import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Col, Grid, Row} from 'react-bootstrap';
import sortBy from 'lodash.sortby';

import calculate from 'src/calculate';
import {mapObject} from 'src/utils';


const separator = <span style={{marginLeft: '6px', marginRight: '6px'}}>•</span>;

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
        return (
            <li key={data.item} style={{marginLeft: '-15px'}}>
                <strong>{data.itemName}</strong>
                {separator}
                {this.renderAmount(data.perMinute)}/m

                {this.renderTreeItemCrafting(data)}
            </li>
        );
    }

    renderTreeItemCrafting(data) {
        if (data.crafting === null) {
            return null;
        }

        return (
            <span>
                {separator}
                {this.renderProduction(data.crafting.producedBy, data.crafting.producerAmount)}

                <ul>
                    {data.crafting.ingredients.map(i => this.renderTree(i))}
                </ul>
            </span>
        );
    }

    renderTotals(totals) {
        let list = mapObject(totals, (data, item) => ({...data, item}));
        list = sortBy(list, data => data.itemName);

        return list.map(data => {
            return (
                <li key={data.item} style={{marginLeft: '-15px'}}>
                    <strong>{data.itemName}</strong>
                    {separator}
                    {this.renderAmount(data.perMinute)}/m

                    {this.renderTotalItemCrafting(data)}
                </li>
            );
        });
    }

    renderTotalItemCrafting(data) {
        if (data.crafting === null) {
            return null;
        }

        return (
            <span>
                {separator}
                {this.renderProduction(data.crafting.producedBy, data.crafting.producerAmount)}
            </span>
        );
    }

    renderProduction(producedBy, producerAmount) {
        producedBy = producedBy.match(/[A-Za-z][a-z]*/g).map(word => word.toLowerCase()).join(' ');

        return <span>{this.renderAmount(producerAmount)} {producedBy}{producerAmount === 1 ? null : 's'}</span>;
    }

    renderAmount(amount) {
        if (Math.round(amount) === amount) {
            return <span>{amount}</span>;
        }

        return <span title={amount}>{amount.toFixed(1)}</span>;
    }
}

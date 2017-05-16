import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Col, Grid, Row} from 'react-bootstrap';

import calculate from 'src/calculate';
import {mapObject} from 'src/utils';


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

    renderTree(tree) {
        if (tree.crafting === null) {
            return (
                <li key={tree.item} style={{marginLeft: '-15px'}}>
                    <strong>{tree.itemName}</strong>
                    &nbsp;•&nbsp;
                    {tree.perMinute}/m
                </li>
            );
        }

        return (
            <li key={tree.item} style={{marginLeft: '-15px'}}>
                <strong>{tree.itemName}</strong>
                &nbsp;•&nbsp;
                {tree.perMinute}/m
                &nbsp;•&nbsp;
                {this.renderAmount(tree.crafting.producerAmount)} {tree.crafting.producedBy}(s)

                <ul>
                    {tree.crafting.ingredients.map(i => this.renderTree(i))}
                </ul>
            </li>
        );
    }

    renderTotals(totals) {
        return mapObject(totals, (t, item) => {
            if (t.crafting === null) {
                return (
                    <li key={item} style={{marginLeft: '-15px'}}>
                        <strong>{t.itemName}</strong>
                        &nbsp;•&nbsp;
                        {t.perMinute}/m
                    </li>
                );
            }

            return (
                <li key={item} style={{marginLeft: '-15px'}}>
                    <strong>{t.itemName}</strong>
                    &nbsp;•&nbsp;
                    {t.perMinute}/m
                    &nbsp;•&nbsp;
                    {this.renderAmount(t.crafting.producerAmount)} {t.crafting.producedBy}(s)
                </li>
            );
        });
    }

    renderAmount(amount) {
        if (Math.round(amount) === amount) {
            return <span>{amount}</span>;
        }

        return <span title={amount}>{amount.toFixed(1)}</span>;
    }
}

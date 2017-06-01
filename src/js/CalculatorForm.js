import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, Col, ControlLabel, FormControl, FormGroup, Grid, Row} from 'react-bootstrap';

import ITEMS from './items';
import {mapObject} from './utils';


const ASSEMBLER_TYPES = {
    '1': {
        name: 'Assembling machine 1',
        speed: 0.5
    },
    '2': {
        name: 'Assembling machine 2',
        speed: 0.75
    },
    '3': {
        name: 'Assembling machine 3',
        speed: 1.25
    }
};

const FURNACE_TYPES = {
    'stone': {
        name: 'Stone furnace',
        speed: 1
    },
    'steelElectric': {
        name: 'Steel furnace / Electric furnace',
        speed: 2
    }
};


export default class CalculatorForm extends Component {
    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
    }

    state = {
        itemToCraft: 'electronicCircuit',
        unitsPerMinute: '100',
        assemblerType: '2',
        furnaceType: 'steelElectric',
    }

    handleFieldChange = (field) => (evt) => {
        this.setState({[field]: evt.target.value});
    }

    handleSubmit = () => {
        this.props.onSubmit({
            itemToCraft: this.state.itemToCraft,
            unitsPerMinute: parseInt(this.state.unitsPerMinute, 10),
            assemblerSpeed: ASSEMBLER_TYPES[this.state.assemblerType].speed,
            furnaceSpeed: FURNACE_TYPES[this.state.furnaceType].speed
        });
    }

    render() {
        return (
            <div>
                <Grid>
                    <Row>
                        <Col xs={12} sm={9}>
                            <FormGroup>
                                <ControlLabel>Item to craft</ControlLabel>
                                <FormControl
                                    componentClass="select"
                                    value={this.state.itemToCraft}
                                    onChange={this.handleFieldChange('itemToCraft')}>
                                    {mapObject(ITEMS, ({name}, key) => (
                                        <option key={key} value={key}>{name}</option>
                                    ))}
                                </FormControl>
                            </FormGroup>
                        </Col>
                        <Col xs={12} sm={3}>
                            <FormGroup>
                                <ControlLabel>Units per minute</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.unitsPerMinute}
                                    onChange={this.handleFieldChange('unitsPerMinute')} />
                            </FormGroup>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={12} sm={4}>
                            <FormGroup>
                                <ControlLabel>Assembler type</ControlLabel>
                                <FormControl
                                    componentClass="select"
                                    value={this.state.assemblerType}
                                    onChange={this.handleFieldChange('assemblerType')}>
                                    {mapObject(ASSEMBLER_TYPES, ({name}, key) => (
                                        <option key={key} value={key}>{name}</option>
                                    ))}
                                </FormControl>
                            </FormGroup>
                        </Col>
                        <Col xs={12} sm={4}>
                            <FormGroup>
                                <ControlLabel>Furnace type</ControlLabel>
                                <FormControl
                                    componentClass="select"
                                    value={this.state.furnaceType}
                                    onChange={this.handleFieldChange('furnaceType')}>
                                    {mapObject(FURNACE_TYPES, ({name}, key) => (
                                        <option key={key} value={key}>{name}</option>
                                    ))}
                                </FormControl>
                            </FormGroup>
                        </Col>
                    </Row>
                </Grid>

                <div style={{textAlign: 'center', marginTop: '10px'}}>
                    <Button
                        bsStyle="primary"
                        disabled={isNaN(parseInt(this.state.unitsPerMinute, 10))}
                        onClick={this.handleSubmit}>
                        Calculate
                    </Button>
                </div>
            </div>
        );
    }
}

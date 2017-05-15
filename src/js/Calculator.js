import React, {Component} from 'react';

import CalculatorForm from 'src/CalculatorForm';
import CalculatorResults from 'src/CalculatorResults';


export default class Calculator extends Component {
    state = {
        input: null,
    }

    handleSubmit = (formData) => {
        this.setState({input: formData});
    }

    render() {
        return (
            <div>
                <CalculatorForm onSubmit={this.handleSubmit} />

                <hr />

                {this.renderResults()}
            </div>
        );
    }

    renderResults() {
        if (this.state.input === null) {
            return <div style={{textAlign: 'center', fontSize: '200%'}}>...</div>;
        }

        return <CalculatorResults {...this.state.input} />;
    }
}

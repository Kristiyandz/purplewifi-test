import React, { Component } from 'react';
import { addReportAction } from '../js/actions/index';
import { connect } from 'react-redux';
import '../styles/Main.css'

class AddReport extends Component {
    state = {
        name: '',
        type: '',
        chartType: '',
        filterTypes: [],
        frequency: '',
        active: ''
    };
    handleInput(key, value) {
        this.setState({
            [key]: value
        });
    };
    render() {
        return (
            <div className="add-report">
                <input value={this.state.name} onChange={(event) => this.handleInput('name', event.target.value)} />
                <input value={this.state.type} onChange={(event) => this.handleInput('type', event.target.value)} />
                <input value={this.state.chartType} onChange={(event) => this.handleInput('chartType', event.target.value)} />
                <input value={this.state.filterTypes} onChange={(event) => this.handleInput('filterTypes', event.target.value)} />
                <input value={this.state.frequency} onChange={(event) => this.handleInput('frequency', event.target.value)} />
                <input value={this.state.active} onChange={(event) => this.handleInput('active', event.target.value)} />
                <button onClick={() =>this.props.addReportAction(this.state)}>Submit Report</button>
            </div>
        );
    };
};

export default connect(null, { addReportAction })(AddReport);

import React, { Component } from 'react';
import { addReportAction } from '../js/actions/index';
import { connect } from 'react-redux';

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
    addReportAndHideComponent() {
        this.props.addReportAction(this.state);
        this.props.handler();
    }
    render() {
        return (
            <div className="add-report">
            <h3>Fill the fields bellow</h3>
                <ul>
                    <li>Name: <input value={this.state.name} onChange={(event) => this.handleInput('name', event.target.value)} /></li>
                    <li>Type: <input value={this.state.type} onChange={(event) => this.handleInput('type', event.target.value)} /></li>
                    <li>Char Type: <input value={this.state.chartType} onChange={(event) => this.handleInput('chartType', event.target.value)} /></li>
                    <li>Filter Types: <input value={this.state.filterTypes} onChange={(event) => this.handleInput('filterTypes', event.target.value)} /></li>
                    <li>Frequency: <input value={this.state.frequency} onChange={(event) => this.handleInput('frequency', event.target.value)} /></li>
                    <li>Active: <input value={this.state.active} onChange={(event) => this.handleInput('active', event.target.value)} /></li>
                </ul> 
                <button className="submit-report-btn" onClick={() => this.addReportAndHideComponent()}>Submit Report</button>
            </div>
        );
    };
};

export default connect(null, { addReportAction })(AddReport);

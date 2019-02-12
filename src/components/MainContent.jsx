import React, { Component } from 'react';
import { connect } from 'react-redux';
import DeleteButton from './DeleteButton';
import AddReport from './AddReport';

class MainContent extends Component {
    state = {
        showComponent: false,
        startIndx: 0,
        endIndex: 10,
        currentPage: 1,
    };
    showAddRecordComponent() {
        this.setState({
            showComponent: true
        });
    };
    handlePrevious() {
        if(this.state.startIndx === 0) {
            return this.state;
        };
        this.setState({
            startIndx: this.state.startIndx - 10,
            endIndex: this.state.endIndex - 10,
            currentPage: this.state.currentPage - 1
        });
    };
    handleNext() {
        this.setState({
            startIndx: this.state.startIndx + 10,
            endIndex: this.state.endIndex + 10,
            currentPage: this.state.currentPage + 1
        });
    };
    displayCurrentPage() {
        return this.state.currentPage;
    };

    render() {
        return (
            <div className="content">
                {this.props.data.map((element, i) => {
                    return (
                        <ul key={i}>
                            <li>Name: {element.name} </li>
                            <li>Type: {element.type} </li>
                            <li>Char Type: {element.chartType} </li>
                            <li>FilterTypes: {[...element.filterTypes]} </li>
                            <li> Frequency: {element.frequency} </li>
                            <li>Active: {`${element.active}`} </li>
                            <DeleteButton value={i} />
                        </ul>
                    );
                }).slice(this.state.startIndx, this.state.endIndex)}
                {this.state.showComponent ? <AddReport/> : null}
                <button onClick={() => this.showAddRecordComponent()}>Add</button>
                <button onClick={() => this.handlePrevious()}>Prev</button>
                <button>{this.displayCurrentPage()}</button>
                <button onClick={() => this.handleNext()}>Nex</button>
            </div>
        );
    };
};

const mapStateToProps = state => {
    return {
        data: state.data
    };
};

export default connect(mapStateToProps)(MainContent);
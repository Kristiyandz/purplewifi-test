import React, { Component } from 'react';
import { connect } from 'react-redux';
import DeleteButton from './DeleteButton';
import AddReport from './AddReport';

class MainContent extends Component {
    constructor(props){
        super(props)
        this.state = {
            showComponent: false,
            startIndx: 0,
            endIndex: 10,
            currentPage: 1,
        };
        this.hideAfterAddingReport = this.hideAfterAddingReport.bind(this);
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
    hideAfterAddingReport() {
       return this.setState({
            showComponent: false
        });
    };
    render() {
        return (
            <div className="content">
                {this.props.data.map((element, i) => {
                    return (
                        <div>
                            <ul key={i}>
                                <li>Name: {element.name} </li>
                                <li>Type: {element.type} </li>
                                <li>Char Type: {element.chartType} </li>
                                <li>FilterTypes: {[...element.filterTypes]} </li>
                                <li> Frequency: {element.frequency} </li>
                                <li>Active: {`${element.active}`} </li>
                                <DeleteButton value={i} />
                            </ul>
                            <hr/>
                        </div>
                    );
                }).slice(this.state.startIndx, this.state.endIndex)}
                
                {this.state.showComponent ? <AddReport handler={this.hideAfterAddingReport}/> : null}
                <button onClick={() => this.showAddRecordComponent()}>Add new report</button>
                <div>
                    <button onClick={() => this.handlePrevious()}>Prev</button>
                    <button>{this.displayCurrentPage()}</button>
                    <button onClick={() => this.handleNext()}>Nex</button>
                </div>
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
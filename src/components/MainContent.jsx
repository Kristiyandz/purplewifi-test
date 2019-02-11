import React, { Component } from 'react';
import { connect } from 'react-redux';

class MainContent extends Component {
    render() {
        return (
            <div className="content">
                {this.props.data.map(element => {
                    return (
                        <ul>
                            <li>Name: {element.name}</li>
                            <li>Type: {element.type}</li>
                            <li>Char Type: {element.charType}</li>
                            <li>FilterTypes: {element.filterTypes[0]}</li>
                            <li> Frequency: {element.frequency}</li>
                            <li>Active: {element.active}</li>
                            <button>Delete</button>
                        </ul>
                    );
                })}
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
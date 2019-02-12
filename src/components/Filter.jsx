import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterByTypeAction } from '../js/actions/index';
import '../styles/Main.css';

class InputFilter extends Component {
    render() {
        return (
            <div>
                <label>Filter by type: </label>
                <input onChange={(event) => this.props.filterByTypeAction(event.target.value)} className="filter-input" type="text"/>
            </div>
        );
    };
};

export default connect(null, { filterByTypeAction })(InputFilter);

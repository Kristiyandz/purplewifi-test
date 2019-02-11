import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterByTypeAction } from '../js/actions/index';

class InputFilter extends Component {
    render() {
        return (
            <input onChange={(event) => this.props.filterByTypeAction(event.target.value)} className="filter-input" type="text"/>
        );
    };
};

export default connect(null, { filterByTypeAction })(InputFilter);

import React, { Component } from 'react';
import { connect } from 'react-redux'
import { sortAscendingAction, sortDescendingAction } from '../js/actions/index';


class Buttons extends Component {
    render() {
        return (
            <div className="wrapper">
                <button className="main-btns" onClick={() => this.props.sortAscendingAction()}>Sort Ascending</button>
                <button className="main-btns" onClick={() => this.props.sortDescendingAction()}>Sort Descending</button>
            </div>
        );
    };
};

export default connect(null, { sortAscendingAction, sortDescendingAction })(Buttons);



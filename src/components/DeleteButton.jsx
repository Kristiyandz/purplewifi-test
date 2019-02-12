import React, { Component } from 'react';
import { deleteReportAction } from '../js/actions/index';
import { connect } from 'react-redux';

class DeleteButton extends Component {

    render() {
        console.log(this.props);
        return (
            <div>
                <button onClick={() => this.props.deleteReportAction(this.props.value)}>Delete</button>
            </div>
        );
    };
};

export default connect(null, { deleteReportAction })(DeleteButton);

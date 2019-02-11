import React, { Component } from 'react';
import { connect } from 'react-redux';
class Main extends Component {
   
    render() {

        console.log(this.props.data[0].name);
        return (
            <div>
                <p>{this.props.data[0].name}</p>
            </div>
        );
    };
};

const mapStateToProps = state => {
    return {
        data: state.data
    };
};

export default connect(mapStateToProps)(Main);
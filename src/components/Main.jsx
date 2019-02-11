import React, { Component } from 'react';
import { connect } from 'react-redux';
import Buttons from './Buttons';
import InputFilter from './Filter';
import MainContent from './MainContent';
import '../styles/Main.css'


class Main extends Component {
   
    render() {
        console.log(this.props);
        return (
            <div className="container">
                <Buttons />
                <InputFilter/>
                <MainContent />
            </div>
               
        );
    };
};

export default Main;

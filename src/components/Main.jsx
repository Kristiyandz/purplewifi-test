import React, { Component } from 'react';
import Buttons from './Buttons';
import InputFilter from './Filter';
import MainContent from './MainContent';
import '../styles/Main.css'


class Main extends Component {
    render() {
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

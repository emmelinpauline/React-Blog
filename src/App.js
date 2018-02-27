import React, { Component } from 'react';
import Header from "./components/Header/Header";
import Router from "./Router/Router";
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router />
      </div>
    );
  }
}
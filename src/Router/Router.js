import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

//Components
import Home from "./../components/Home/Home";
import Article from "./../components/Article/Article";
import About from "./../components/About/About";
import Page from "./../components/Page/Page";
import NotFound from "./../components/NotFound/NotFound";


const Router = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/page" component={Page} />
        <Route path="/article/:number" component={Article} />
        <Route component={ NotFound } />
    </Switch>


); 

export default Router;

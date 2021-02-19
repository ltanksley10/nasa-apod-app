import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import MainPage from './components/MainPage';
import ViewMorePhotos from './components/ViewMorePhotos';
import './App.css';

const App = () => {
    return (
        <BrowserRouter>
            <div className="app">
                <Route component={Home} exact path="/" />
                <Route component={MainPage} path="/mainpage" />
                <Route component={ViewMorePhotos} path="/viewmorephotos" />
            </div>
        </BrowserRouter>
    );
}

export default App;
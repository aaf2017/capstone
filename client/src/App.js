import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';
import Header from './components/Nav/Header/Header';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import Drawer from './components/Nav/Drawer/Drawer';




const App = () => (
    <BrowserRouter>
            <Container maxWidth="lg">
                <Header />             
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/auth" exact component={Auth} />
                    <Route path="/drawer" exact component={Drawer} />
                </Switch>
            </Container>          
    </BrowserRouter>
);
 


export default App;
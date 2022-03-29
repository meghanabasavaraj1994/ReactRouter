import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import './RootRouter.css'
import Home from './HomePage';
import AboutPage from './AboutPage';
import ContactUs from './ContactUs';
import Content from './Content';

function RootRouter() {
    return (
        <BrowserRouter>
        <nav class="nav_bar" >
            <Link class="nav_link" to="/HomePage">HomePage</Link>
            <Link class="nav_link" to="/AboutPage">AboutPage</Link>
            <Link class="nav_link" to="/ContactUs">ContactUs</Link>
            
        </nav>
        

        <Switch>
            <Route exact path="/">
                <Content/>
            </Route>
        <Route index path="/HomePage">
            <Home/>
            </Route> 
        <Route path="/AboutPage">
            <AboutPage/>
            </Route>
        <Route path="/ContactUs/:identifier">
            <ContactUs/>
            </Route>
        </Switch>
        
        </BrowserRouter>
    );
}
export default RootRouter;
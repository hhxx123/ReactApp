import React from 'React';
import {NavLink,Switch, Route, BrowserRouter} from 'react-router-dom';
import Nav from './nav.jsx';
import Page from './page.jsx';
export default class Link extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/page" component={Page} />
                    <Route exact path="/" component={Nav} />
                </Switch>
            </BrowserRouter>

        )
    }
}
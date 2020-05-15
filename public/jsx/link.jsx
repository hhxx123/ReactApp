import React from 'React';
import {NavLink,Switch, Route, BrowserRouter} from 'react-router-dom';
import Nav from '../jsx/nav.jsx';
import Page from '../jsx/page.jsx';
export default class Link extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Nav} />
                    <Route exact path="/page" component={Page} />
                </Switch>
            </BrowserRouter>

        )
    }
}
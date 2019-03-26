import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import {Books} from './books/Books';
import LinkList from "./link/LinkList";
import {Route, Switch} from "react-router-dom";
import CreateLink from "./link/CreateLink";
import Login from "./auth/Login";

import "../styles/App.css";

export function Root() {
  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit">
            Loona Example
          </Typography>
        </Toolbar>
      </AppBar>
      <div style={{padding: 15}}>
        <div className="ph3 pv1 background-gray">
        <Switch>
          <Route exact path="/" component={LinkList}/>
          <Route exact path="/books" component={Books}/>
          <Route exact path="/create" component={CreateLink}/>
          <Route exact path="/login" component={Login}/>
        </Switch>
        </div>

      </div>
    </React.Fragment>
  );
}

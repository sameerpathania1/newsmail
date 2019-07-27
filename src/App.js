import React from 'react';
import './App.css';
import { Login } from './components/Login';
import Homepage from "./containers/HomePage"
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom"

function Loggedin() {
  return false
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest}
    render={props => Loggedin() ? <React.Fragment><Component {...props} /></React.Fragment> : <Redirect to="/login" />}
  />
)

const PublicRoute = ({ component: Component, ...rest }) => (
  <Route {...rest}
    render={props => Loggedin() ? <Redirect to="/" /> : <Component {...props} />}
  />
)

export default class App extends React.Component {
  render() {
    return (
      // <Router>
      //   <Switch>
      //     <PrivateRoute exact Path="/" component={Homepage} />
      //     <PublicRoute Path="/login" component={Login} />
      //     <Route component={NoRoute} />
      //   </Switch>
      // </Router>
      <Login/>
    )
  }
}

class NoRoute extends React.Component {
  render() {
    return (
      <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
        <h1>The Route you are Lokking for is not Found</h1>
      </div>)
  }
}
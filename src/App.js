import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.scss';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));

// Pages
// const Login = React.lazy(() => import('./views/Login/index'));
// const Register = React.lazy(() => import('./views/Register/index'));
const Home  = React.lazy(()=>import('./views/Home/index'))
const Dashboard = React.lazy(()=>import('./views/Dashboard/Dashboard'))
class App extends Component {
  render() {
    return (
      <HashRouter>
          <React.Suspense fallback={loading()}>
            <Switch>
              {/* <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} /> */}
              <Route exact path="/home" name="Home Page" render={props => <Home {...props}/>} />
              {/* <Route exact path="/dashboard" name="Dashboard" render={props => <Dashboard {...props}/>} /> */}

              <Route path="/" name="Home" render={props => <DefaultLayout {...props}/>} />
            </Switch>
          </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;

import { Component, h } from 'preact';
import { Route, Router, RouterOnChangeArgs } from 'preact-router';

import Home from '../routes/home';
import Header from './header';

if ((module as any).hot) {
  // eslint-disable-next-line global-require
  require('preact/debug');
}

export default class App extends Component {
  public currentUrl?: string;

  public handleRoute = (e: RouterOnChangeArgs) => {
    this.currentUrl = e.url;
  };

  public render() {
    return (
      <div id="app">
        <Header />
        <Router onChange={this.handleRoute}>
          <Route path="/" component={Home} />
        </Router>
      </div>
    );
  }
}

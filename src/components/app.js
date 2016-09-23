import React from 'react';
import RouteContent from './route-content';
import Header from './header';
import Footer from './footer';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <div className="header-row">
            <Header />
        </div>
        <div className="content">
            <RouteContent />
        </div>
        <div className="footer-row">
            <Footer />
        </div>
      </div>
    );
  }
}

import React from 'react';
import Urls from 'urls';

export default class Header extends React.Component {
  renderNavLink(url, text, enabled) {
    return enabled ? <li role="presentation"><a href={ url }>{ text }</a></li> : '';
  }
  render() {
    const imgLinkStyle = {
        padding: '0 15px'
      },
      imgStyle = {
        height: '3em'
      },
      uiContext = config.ui.contextPath;
    return (
      <ul className="nav nav-pills">
          <li role="presentation">
            <a href={ uiContext + "/#/" } style={ imgLinkStyle }>
              <img src={ uiContext + "/assets/logo.png" } style={ imgStyle } />
            </a>
          </li>
          <li role="presentation">
            <a href={ Urls.about() }></a>
          </li>
      </ul>
    );
  }
}

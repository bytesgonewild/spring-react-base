import React from 'react';
import Urls from 'urls';

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <hr />
        <p>
          <a href={ Urls.about() }>Hello World 0.1.0</a> - Bytes Gone Wild 2016
          (<a href="mailto:david@bytesgonewild.com">david@bytesgonewild.com</a>)
        </p>
      </div>
    );
  }
}

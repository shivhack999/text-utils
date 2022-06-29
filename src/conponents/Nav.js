import React from 'react';
import PropTypes from 'prop-types';


export default function Nav(props) {
  return (
    <div>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">{props.title}</a>
          </div>
        </nav>
      </div>
    </div>
  );
}
Nav.propTypes={
title:PropTypes.string.isRequired
};
Nav.defaultProps={
  title:'this is second title'
};

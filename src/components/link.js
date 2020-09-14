import React from 'react';
import PropTypes from 'prop-types';
import './link.css';

/**
 * @typedef LinkProps
 * @type {Object}
 * @property {React.ReactNode} [children]
 * @property {string} id
 * @property {string} [to]
 */

/**
 * @param {LinkProps} props
 * @returns {JSX.Element}
 */
function Link(props) {
  const { children, id } = props;
  const to = props.to ?? '#';

  return (
    <a id={`link_${id}`} className="jl-link" href={to} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

Link.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string.isRequired,
  to: PropTypes.string,
};

export { Link };

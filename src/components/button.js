import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './button.css';

/**
 * @typedef ButtonProps
 * @type {Object}
 * @property {string} id
 * @property {React.ReactNode} children
 * @property {string} [link]
 * @property {ButtonColor} [color]
 */

/**
 * @enum {string}
 */
const ButtonColor = {
  BLUE: 'blue',
  GREEN: 'green',
};

/**
 * Component that is an anchor, but looks like a button.
 *
 * @param {ButtonProps} props
 * @returns {JSX.Element}
 */
function Button(props) {
  const { id, children, color } = props;
  const link = props.link ?? '#';

  const className = classNames('jl-button', {
    'jl-button--blue': color === ButtonColor.BLUE,
    'jl-button--green': color === ButtonColor.GREEN,
  });

  return (
    <a id={`button_${id}`} className={className} href={link}>
      {children}
    </a>
  );
}

Button.Color = ButtonColor;

Button.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  link: PropTypes.string,
  color: PropTypes.oneOf(Object.values(ButtonColor)),
};

export { Button };

import React from 'react';
import PropTypes from 'prop-types';
import './card.css';

/**
 * @typedef CardProps
 * @type {Object}
 * @property {React.ReactNode} [children]
 * @property {string} id
 * @property {string} [title]
 */

/**
 * @param {CardProps} props
 * @returns {JSX.Element}
 */
function Card(props) {
  const { children, id, title } = props;
  const hasTitle = typeof title === 'string' && title.trim().length > 0;

  return (
    <article className="jl-card" id={`card_${id}`}>
      {hasTitle && (
        <header>
          <h2 className="jl-card__title">{title}</h2>
        </header>
      )}
      {children}
    </article>
  );
}

Card.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export { Card };

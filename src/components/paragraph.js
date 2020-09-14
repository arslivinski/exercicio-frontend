import React from 'react';
import PropTypes from 'prop-types';

/**
 * @typedef ParagraphProps
 * @type {Object}
 * @property {string} children
 */

/**
 * This component split the children text by the character `\n` and render each
 * part inside a `<p>` element.
 *
 * @param {ParagraphProps} props
 * @returns {JSX.Element}
 */
function Paragraph(props) {
  const { children } = props;

  if (typeof children !== 'string') {
    return null;
  }

  const paragraphs = children.split('\n');

  return (
    <React.Fragment>
      {paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </React.Fragment>
  );
}

Paragraph.propTypes = {
  children: PropTypes.string,
};

export { Paragraph };

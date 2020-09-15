import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from './icon.js';
import './social-media-icon.css';

/**
 * @typedef SocialMediaIconProps
 * @type {Object}
 * @property {string} id
 * @property {string} label
 * @property {string} icon
 * @property {string} url
 */

/**
 * Small and round button with an icon that opens the provided link in a new tab
 *
 * @param {SocialMediaIconProps} props
 * @returns {JSX.Element}
 */
function SocialMediaIcon(props) {
  const { id, label, icon, url } = props;
  return (
    <a
      id={`social-media-icons_${id}`}
      className="jl-social-media-icon"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      title={label}
    >
      <Icon name={icon} size="medium" color="white" alt={`${label} logo`} />
    </a>
  );
}

SocialMediaIcon.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.string,
  url: PropTypes.string,
};

export { SocialMediaIcon };

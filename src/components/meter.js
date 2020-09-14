import React from 'react';
import PropTypes from 'prop-types';
import './meter.css';

/**
 * @typedef MeterProps
 * @type {Object}
 * @property {string} id
 * @property {number} value
 * @property {number} [max]
 * @property {string} label
 * @property {string} [description]
 */

/**
 * @param {MeterProps} props
 * @returns {JSX.Element}
 */
function Meter(props) {
  const { id, label, description } = props;
  const max = props.max ?? 100;
  const value = props.value <= max ? props.value : max;

  return (
    <article id={`meter_${id}`} className="jl-meter">
      <header className="jl-meter__header">
        <h3 className="jl-meter__label">{label}</h3>
        {description != null && <div className="jl-meter__description">{description}</div>}
      </header>
      <div className="jl-meter__bar">
        <div className="jl-meter__value" style={{ width: `${(value / max) * 100}%` }} />
      </div>
    </article>
  );
}

Meter.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  max: PropTypes.number,
  label: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export { Meter };

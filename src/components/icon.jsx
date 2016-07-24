import React from 'react';
import classNames from '../shared/classnames';
import Style from './icon.scss';


const Icon = ({ type }) => (
  <i className={classNames(Style[`icon-${type}`], Style.icon)}></i>
);

Icon.propTypes = {
  type: React.PropTypes.string.isRequired,
};

export default Icon;

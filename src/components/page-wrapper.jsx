import React from 'react';
// import Style from './page-wrapper.scss';


const PageWrapper = (props) => (
  <div>
    {props.children}
  </div>
);
PageWrapper.propTypes = {
  children: React.PropTypes.element.isRequired,
};

export default PageWrapper;

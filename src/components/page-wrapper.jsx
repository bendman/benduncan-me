import React from 'react';


const PageWrapper = (props) => (
  <div>
    {props.children}
  </div>
);
PageWrapper.propTypes = {
  children: React.PropTypes.element.isRequired,
};

export default PageWrapper;

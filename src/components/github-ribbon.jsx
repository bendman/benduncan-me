import React from 'react';
import Style from './github-ribbon.static.css'; // eslint-disable-line no-unused-vars


const GithubRibbon = ({ repo }) => (
  <a
    className="github-fork-ribbon left-bottom fixed"
    href={`https://github.com/${repo}`}
    title="Fork me on GitHub"
  >Fork me on GitHub</a>
);

GithubRibbon.propTypes = {
  repo: React.PropTypes.string.isRequired,
};

export default GithubRibbon;

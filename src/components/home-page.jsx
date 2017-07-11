import React from 'react';
import Style from './home-page.scss';
import GithubRibbon from './github-ribbon';
import Icon from './icon';
import data from './data';
import classNames from '../shared/classnames';

// TODO: this might better be done with sanitized markdown
const createMarkup = source => ({ __html: source });

const HomePage = () => (
  <div>
    <div className={classNames(Style.head, Style.wrap)}>
      <header className="vcard">
        <h1 className="fn">Ben Duncan</h1>
        <address>
          <div className="adr location">
            <Icon type="location" />
            <span className="locality">Portland</span>, <span className="region">Oregon</span>
          </div>
          <span className="tel">
            <Icon type="tel" />347-709-1388
          </span>
          <span className="email">
            <Icon type="email" />
            <a href="mailto:ben@cascadiaconcepts.com?subject=Hello%20Ben!">ben@cascadiaconcepts.com</a>
          </span>
          <span className={Style.url}><Icon type="url" /><a href="http://benduncan.me">http://benduncan.me</a></span>
          <span className="git"><Icon type="git" /><a href="https://github.com/bendman">https://github.com/bendman</a></span>
        </address>
        <h2 className="title">Software Engineer</h2>
      </header>
      <GithubRibbon repo="bendman/benduncan-me" />
    </div>
    <div className={classNames(Style.skills, Style.wrap)} id="skills">
      <section>

        <p>
          I have ten years of professional experience in web and mobile development:
          building user interfaces, front end architecture, and working in teams
          to deliver enterprise and consumer products in fast iterations.
        </p>

        <h3>Skills</h3>
        <section className={Style['skills-tree']}>
          <div>
            <h4>Programming</h4>
            <dl>
              <dd>Unity Engine</dd>
              <dd>C#</dd>
              <dd>Javascript (ES6)</dd>
              <dd>HTML 5</dd>
              <dd>CSS 3</dd>
              <dd>LESS</dd>
              <dd>SASS</dd>

              <dt>Backend</dt>
              <dd>Node</dd>
              <dd>Python</dd>
              <dd>PHP 5</dd>
              <dd>SQL</dd>
              <dd>Nginx</dd>
            </dl>
          </div>
          <div>
            <h4>Tools</h4>
            <dl>
              <dd>NPM</dd>
              <dd>Mocha</dd>
              <dd>Webpack</dd>
              <dd>Grunt</dd>
              <dd>Gulp</dd>
              <dd>Docker</dd>

              <dt>Libraries</dt>
              <dd>React</dd>
              <dd>React Native</dd>
              <dd>Backbone</dd>
              <dd>Underscore</dd>
              <dd>Knockout</dd>
              <dd>jQuery</dd>
              <dd>D3</dd>
            </dl>
          </div>
          <div>
            <h4>Other</h4>
            <dl>
              <dt>Design</dt>
              <dd>Blender</dd>
              <dd>Fusion</dd>
              <dd>Inventor</dd>
              <dd>Illustrator</dd>
              <dd>Photoshop</dd>
              <dd>Lightroom</dd>

              <dt>Version Control</dt>
              <dd>Git</dd>
              <dd>Mercurial</dd>
              <dd>SVN</dd>
            </dl>
          </div>
        </section>
      </section>
    </div>
    <div className={classNames(Style.experience, Style.wrap)} id="experience">
      <section>
        <h3>Experience</h3>

        {data.experiences.map((experience, eIndex) => (
          <section className={Style['project-group']} key={eIndex}>
            <header>
              <h4>{experience.experience}</h4>
              {experience.period ? <span className={Style.period}>{experience.period}</span> : null}
              {experience.title ? (
                <span className={Style['job-title']}>{experience.title}</span>
              ) : null}
            </header>
            {experience.projects.map((project, pIndex) => (
              <article className={Style.project} key={pIndex}>
                {project.summary ? (
                  <h5>
                    {project.link ? <a href={project.link}>{project.summary}</a> : project.summary}
                  </h5>
                ) : null}
                <p dangerouslySetInnerHTML={createMarkup(project.description)}></p>
              </article>
            ))}
          </section>
        ))}
      </section>
    </div>
  </div>
);

export default HomePage;

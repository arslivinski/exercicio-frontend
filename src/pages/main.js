import React from 'react';
import { Header } from '../containers.js';
import { Card, Icon, Link, Meter } from '../components.js';
import { Projects } from './main/projects.js';
import './main.css';

/**
 * Website's main page
 *
 * @returns {JSX.Element}
 */
function Main() {
  return (
    <>
      <Header />
      <section className="jl-main">
        <section className="jl-main__content">
          <Card id="about-me" title="About Me">
            <p>
              Write a brief intro about yourself. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Curabitur maximus vestibulum nisi, id blandit est vehicula a. Vestibulum nec
              felis cursus, sollicitudin tortor sed, ultricies sapien. Nulla imperdiet, felis quis
              bibendum vestibulum, ante arcu laoreet felis, ut molestie turpis lorem eget eros.
              Integer sed ullamcorper elit, et accumsan magna. Sed eleifend ut nunc vel tempus.
            </p>
            <p>
              It`s a good idea to include your personal interests and hobbies as well. Vivamus
              placerat tellus tincidunt elit hendrerit pretium. Vivamus sed purus sapien. Quisque
              quis laoreet dui. Aenean eros orci, ultricies sed leo vitae, interdum varius arcu.
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
              egestas. Cras porta consequat vestibulum. Nullam luctus ipsum risus, et laoreet dui
              pulvinar ac. Proin non gravida odio. Nam venenatis lorem eu tempor molestie. Duis
              dictum mattis orci sed convallis.
            </p>
          </Card>
          <Projects />
        </section>
        <aside className="jl-main__aside">
          <Card id="info">
            <Link id="location" to="https://www.google.com/maps/place/San+Francisco,+CA,+EUA">
              <Icon name="map-marker" color="gray" size="small" />
              San Franciso, US
            </Link>
            <Link id="location" to="mailto:jameslee@website.com">
              <Icon name="email-outline" color="gray" size="small" />
              jameslee@website.com
            </Link>
            <Link id="location" to="https://www.website.com">
              <Icon name="link-variant" color="gray" size="small" />
              https://www.website.com
            </Link>
          </Card>
          <Card id="skills" title="Skills">
            <p>
              Intro about your skills goes here. Keep the list lean and only show your primary
              skillset. You can always provide a link to your Linkedin or Coderwall profile so
              people can get more info there.
            </p>
            <Meter id="python-jango" label="Python & Django" description="Expert" value={96} />
            <Meter
              id="javascript-jquery"
              label="Javascript & jQuery"
              description="Expert"
              value={96}
            />
            <Meter
              id="html5-css3-sass-less"
              label="HTML5, CSS3, SASS & LESS"
              description="Expert"
              value={96}
            />
            <Meter id="ruby-on-rails" label="Ruby on Rails" description="Pro" value={85} />
            <Link id="coderwall" to="https://coderwall.com">
              <Icon name="open-in-new" size="small" color="green" />
              More on Coderwall
            </Link>
          </Card>
        </aside>
      </section>
    </>
  );
}

export { Main };

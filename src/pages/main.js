import React from 'react';
import { Header } from '../containers.js';
import { Card, Link } from '../components.js';
import IconEmail from './main/icon-email-outline.png';
import IconLink from './main/icon-link-variant.png';
import IconMap from './main/icon-map-marker.png';
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
        </section>
        <aside className="jl-main__aside">
          <Card id="info">
            <Link id="location" to="https://www.google.com/maps/place/San+Francisco,+CA,+EUA">
              <img src={IconMap} alt="" />
              San Franciso, US
            </Link>
            <Link id="location" to="mailto:jameslee@website.com">
              <img src={IconEmail} alt="" />
              jameslee@website.com
            </Link>
            <Link id="location" to="https://www.website.com">
              <img src={IconLink} alt="" />
              https://www.website.com
            </Link>
          </Card>
        </aside>
      </section>
    </>
  );
}

export { Main };

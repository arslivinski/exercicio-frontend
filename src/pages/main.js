import React from 'react';
import { Header } from '../containers.js';
import { Card } from '../components.js';
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
        <aside className="jl-main__aside"></aside>
      </section>
    </>
  );
}

export { Main };

import React from 'react';
import { Header } from '../containers.js';
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
        <section className="jl-main__content"></section>
        <aside className="jl-main__aside"></aside>
      </section>
    </>
  );
}

export { Main };

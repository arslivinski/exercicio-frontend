import React from 'react';
import { Button, Icon, SocialMediaIcon } from '../components.js';
import Avatar from './header/profile.png';
import './header.css';

/**
 * Page header
 *
 * @returns {JSX.Element}
 */
function Header() {
  return (
    <header id="header" className="jl-header">
      <div className="jl-header__container">
        <img className="jl-header__avatar" src={Avatar} alt="James Lee face" />
        <div className="jl-header__content">
          <h1 className="jl-header__title">James Lee</h1>
          <div className="jl-header__subtitle">Web App Developer</div>
          <div className="jl-header__icons">
            <SocialMediaIcon
              id="twitter"
              label="Twitter"
              icon="twitter"
              url="https://twitter.com"
            />
            <SocialMediaIcon
              id="google-plus"
              label="Google+"
              icon="google-plus"
              url="https://gcemetery.co/google-plus"
            />
            <SocialMediaIcon
              id="linkedin"
              label="LinkedIn"
              icon="linkedin"
              url="https://linkedin.com"
            />
            <SocialMediaIcon id="github" label="GitHub" icon="github" url="https://github.com" />
            <SocialMediaIcon
              id="hacker-news"
              label="Hacker News"
              icon="y-combinator"
              url="https://news.ycombinator.com/"
            />
          </div>
        </div>
        <Button id="contact-me" link="mailto:jameslee@example.com" color="green">
          <Icon name="telegram" color="white" /> Contact me
        </Button>
      </div>
    </header>
  );
}

export { Header };

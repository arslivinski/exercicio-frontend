import React from 'react';
import { Button, SocialMediaIcon } from '../components.js';
import IconGitHub from './header/icon-github.png';
import IconGooglePlus from './header/icon-google-plus.png';
import IconHackerNews from './header/icon-hacker-news.png';
import IconLinkedIn from './header/icon-linkedin.png';
import IconTwitter from './header/icon-twitter.png';
import IconTelegram from './header/icon-telegram.png';
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
              icon={IconTwitter}
              url="https://twitter.com"
            />
            <SocialMediaIcon
              id="google-plus"
              label="Google+"
              icon={IconGooglePlus}
              url="https://gcemetery.co/google-plus"
            />
            <SocialMediaIcon
              id="linkedin"
              label="LinkedIn"
              icon={IconLinkedIn}
              url="https://linkedin.com"
            />
            <SocialMediaIcon
              id="github"
              label="GitHub"
              icon={IconGitHub}
              url="https://github.com"
            />
            <SocialMediaIcon
              id="hacker-news"
              label="Hacker News"
              icon={IconHackerNews}
              url="https://news.ycombinator.com/"
            />
          </div>
        </div>
        <Button id="contact-me" link="mailto:jameslee@example.com" color={Button.Color.GREEN}>
          <img src={IconTelegram} alt="" /> Contact me
        </Button>
      </div>
    </header>
  );
}

export { Header };

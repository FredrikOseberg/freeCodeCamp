import React from 'react';

import fccLogo from '../../../assets/images/landing/fccLogo.svg';
import searchIcon from '../../../assets/images/landing/search.svg';

import { ImageLoader } from '../../helpers';

function LandingTopV2Header() {
  return (
    <div className='landing-top-v2-header'>
      <span className='landing-top-v2-header-left-content'>
        <ImageLoader src={fccLogo} alt='logo' />
        <span>freeCodeCamp</span>

        <div className='landing-top-v2-search-container'>
          <ImageLoader src={searchIcon} alt='search icon' />
          <input type='text' placeholder='Search for courses' />
        </div>
      </span>

      <div className='landing-top-v2-buttons-container'>
        <a href='/donate' className='landing-top-v2-nav-link'>
          Donate
        </a>
        <a
          href='Sign in'
          className='landing-top-v2-nav-link landing-top-v2-nav-btn'
        >
          Sign in
        </a>
      </div>
    </div>
  );
}

export default LandingTopV2Header;

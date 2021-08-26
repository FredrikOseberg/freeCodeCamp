import React from 'react';

import apple from '../../../assets/images/landing/app.png';
import google from '../../../assets/images/landing/google.png';
import spotify from '../../../assets/images/landing/spotify.png';
import microsoft from '../../../assets/images/landing/microsoft.png';
import amazon from '../../../assets/images/landing/amazon.png';

import { ImageLoader } from '../../helpers';

function LandingTopV2Graduates() {
  return (
    <div className='landing-top-v2-graduates'>
      <p id='landing-top-v2-graduates-header'>Graduates work at</p>
      <div className='landing-top-v2-logos-container'>
        <ImageLoader
          src={apple}
          alt='apple logo'
          className='landing-top-v2-graduates-logo landing-top-v2-graduates-logo-apple'
        />
        <ImageLoader
          src={google}
          alt='google logo'
          className='landing-top-v2-graduates-logo'
        />
        <ImageLoader
          src={spotify}
          alt='spotify logo'
          className='landing-top-v2-graduates-logo'
        />
        <ImageLoader
          src={microsoft}
          alt='microsoft logo'
          className='landing-top-v2-graduates-logo landing-top-v2-graduates-logo-microsoft'
        />
        <ImageLoader
          src={amazon}
          alt='amazon logo'
          className='landing-top-v2-graduates-logo'
        />
      </div>
    </div>
  );
}

export default LandingTopV2Graduates;

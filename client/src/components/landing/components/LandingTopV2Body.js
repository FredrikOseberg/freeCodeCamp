import React from 'react';

import worldMap from '../../../assets/images/landing/world.svg';
import diplomaIcon from '../../../assets/images/landing/dipmpla.svg';
import signatureIcon from '../../../assets/images/landing/signature.svg';

import { ImageLoader } from '../../helpers';

function LandingTopV2Body() {
  return (
    <div className='landing-top-v2-body'>
      <div className='landing-top-v2-body-content-left'>
        <h2 className='landing-top-v2-body-content-left-header'>
          Learn to code - for free
        </h2>
        <p id='landing-top-v2-body-content-left-paragraph'>
          Join a unique community worldwide that is focused on helping each
          other reach each others goals.
        </p>
        <a href='/learn' className='landing-top-v2-body-content-left-cta'>
          Get started now - it's free
        </a>
        <ImageLoader
          src={worldMap}
          alt='world map'
          className='landing-top-v2-body-content-wm'
        />
      </div>

      <div className='landing-top-v2-body-content-right'>
        <div className='landing-top-v2-body-content-certificate-card'>
          <ImageLoader
            src={diplomaIcon}
            alt='diploma icon'
            className='landing-top-v2-body-diploma-icon'
          />
          <h3 className='landing-top-v2-body-certificate-header'>
            Create real projects and earn certifications.
          </h3>
          <p id='landing-top-v2-body-certificate-paragraph'>
            Verified by Quincy Larson
          </p>
          <ImageLoader
            src={signatureIcon}
            alt='signature icon'
            className='landing-top-v2-body-signature-icon'
          />
        </div>
      </div>
    </div>
  );
}

export default LandingTopV2Body;

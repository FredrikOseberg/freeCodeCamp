import { Grid } from '@freecodecamp/react-bootstrap';
import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import { useTranslation } from 'react-i18next';

import { NEW_DESIGN_ON } from '../../flags';
import AsSeenIn from './components/AsSeenIn';
import Certifications from './components/Certifications';
import LandingTop from './components/LandingTop';
import LandingTopV2 from './components/LandingTopV2';
import Testimonials from './components/Testimonials';

import './landing.css';

const propTypes = {
  page: PropTypes.string
};

export const Landing = ({ page = 'landing' }) => {
  const { t } = useTranslation();

  const landingTopComponent = NEW_DESIGN_ON ? (
    <div className='landing-page-new-hero'>
      <Grid>
        <LandingTopV2 page={page} />
      </Grid>
    </div>
  ) : (
    <Grid>
      <LandingTop page={page} />
    </Grid>
  );

  return (
    <>
      <Helmet>
        <title>{t('metaTags:title')}</title>
      </Helmet>
      <main className='landing-page'>
        {landingTopComponent}

        <Grid fluid={true}>
          <AsSeenIn />
        </Grid>
        <Grid>
          <Testimonials />
          <Certifications />
        </Grid>
      </main>
    </>
  );
};

Landing.displayName = 'Landing';
Landing.propTypes = propTypes;
export default Landing;

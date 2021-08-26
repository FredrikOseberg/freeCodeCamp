import { Col, Row } from '@freecodecamp/react-bootstrap';
import React from 'react';
import LandingTopV2Body from './LandingTopV2Body';
import LandingTopV2Graduates from './LandingTopV2Graduates';

import LandingTopV2Header from './LandingTopV2Header';

function LandingTopV2() {
  return (
    <div className='landing-top'>
      <Row>
        <Col lg={12} sm={12} xs={12}>
          <LandingTopV2Header />
          <LandingTopV2Body />
          <LandingTopV2Graduates />
        </Col>
      </Row>
    </div>
  );
}

LandingTopV2.displayName = 'LandingTop';
export default LandingTopV2;

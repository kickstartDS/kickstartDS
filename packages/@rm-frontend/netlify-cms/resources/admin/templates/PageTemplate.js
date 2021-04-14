/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

import TextpicIntextleft from '@rm-frontend/build-tools/source/_patterns/3-organisms/standard-content/typo3-standard-content/TextpicIntextleft.jsx';
import Teaserbox from '@rm-frontend/build-tools/source/_patterns/3-organisms/teaser-box/Teaserbox.jsx';
import Keyvisual from '@rm-frontend/build-tools/source/_patterns/2-molecules/keyvisual/keyvisual/Keyvisual.jsx';

import Layout from './Layout';

const elementCounter = [];

function getComponent(element) {
  elementCounter[element.type] = elementCounter[element.type] + 1 || 1;
  const key = `${element.type}-'+${elementCounter[element.type]}`;

  switch (element.type) {
    case 'teaser-box':
      return <Teaserbox key={key} data={element} />;
    case 'textpic-intextleft':
      return <TextpicIntextleft key={key} data={element} />;
    default:
      return `No component definition for type: ${element.type}`;
  }
}

export const PageTemplate = ({ keyvisual, heading, content }) => (
  <Layout>
    {keyvisual && keyvisual.show && <Keyvisual data={keyvisual} />}

    <div class="l-section">
      <div class="l-main-wrap">
        <header class="content-headline content-headline--page-header">
          <h1>{heading}</h1>
        </header>
      </div>
    </div>

    {content &&
      content.length > 0 &&
      content.map((element) => getComponent(element))}
  </Layout>
);

PageTemplate.propTypes = {
  keyvisual: PropTypes.object,
  heading: PropTypes.string,
  content: PropTypes.array,
};

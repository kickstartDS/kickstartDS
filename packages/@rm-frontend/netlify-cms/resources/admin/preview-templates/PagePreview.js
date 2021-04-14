import React from 'react';
import PropTypes from 'prop-types';
import { PageTemplate } from '../templates/PageTemplate';

const PagePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS();

  data.content = data.content || [];

  if (data) {
    return (
      <PageTemplate
        keyvisual={data.keyvisual}
        heading={data.heading}
        content={data.content}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

PagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default PagePreview;

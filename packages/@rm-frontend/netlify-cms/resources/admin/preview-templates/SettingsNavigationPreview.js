import React from 'react';
import PropTypes from 'prop-types';
import { SettingsNavigationTemplate } from '../templates/SettingsNavigationTemplate';

const SettingsNavigationPreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS();
  console.log(data);
  if (data) {
    return <SettingsNavigationTemplate links={data['main-nav'].links} />;
  } else {
    return <div>Loading...</div>;
  }
};

SettingsNavigationPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default SettingsNavigationPreview;

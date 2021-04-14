import CMS from 'netlify-cms-app';
import idWidget from 'netlify-cms-widget-simple-uuid';

import PagePreview from './preview-templates/PagePreview';
import SettingsNavigationPreview from './preview-templates/SettingsNavigationPreview';

import * as assets from '../assets/asset-paths.json';

CMS.registerWidget('id', idWidget.IdControl, idWidget.IdPreview);

[...assets.css.critical, ...assets.css.rest].forEach((asset) => {
  CMS.registerPreviewStyle(`..${asset}`);
});

CMS.registerPreviewTemplate('pages', PagePreview);
CMS.registerPreviewTemplate('navigation', SettingsNavigationPreview);

CMS.init();

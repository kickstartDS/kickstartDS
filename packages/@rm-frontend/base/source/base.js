/* eslint-disable import/newline-after-import, import/first */
import { registerModule, domLoaded } from '@rm-frontend/core';
import { ElementQueries } from 'css-element-queries';
// #if target !== 'esm'
import './0-base/2-generic/polyfills/polyfills';
import placeholder from './0-base/1-tools/js/placeholder';
// #endif
import svgFixer from './0-base/1-tools/js/svg-icon-baseurl';
import './1-atoms/image/lazy-img/LazyImg';

ElementQueries.listen();

const components = {};

import ShareMailLink from './1-atoms/link/ShareMailLink';
components[ShareMailLink.identifier] = ShareMailLink;

import ResponsiveTable from './1-atoms/table/ResponsiveTable';
components[ResponsiveTable.identifier] = ResponsiveTable;

import SelectInput from './1-atoms/input/select-input/SelectInput';
components[SelectInput.identifier] = SelectInput;

import NumberInput from './1-atoms/input/number/NumberInput';
components[NumberInput.identifier] = NumberInput;

import IframeRatio from './1-atoms/iframe/IframeRatio';
components[IframeRatio.identifier] = IframeRatio;

// #if modules.base.atoms['scroll-to-top']
import ScrollToTop from './1-atoms/scroll-to-top/ScrollToTop';
components[ScrollToTop.identifier] = ScrollToTop;
// #endif

// #if modules.base.atoms['tag-label']
import './1-atoms/tag-label/TagLabel';
// #endif

// #if modules.base.atoms.datepicker
import { identifier as datepickerIdentifier } from './1-atoms/input/datepicker/Datepicker.desc';
import lazyDatepicker from './1-atoms/input/datepicker/lazyDatepicker';
components[datepickerIdentifier] = lazyDatepicker;
// #endif

// #if modules.base.atoms.fileupload
import FileUpload from './1-atoms/input/fileupload/FileUpload';
components[FileUpload.identifier] = FileUpload;
// #endif

// #if modules.base.molecules['date-range-picker']
import DateRangePicker from './2-molecules/date-range-picker/DateRangePicker';
components[DateRangePicker.identifier] = DateRangePicker;
// #endif

// #if modules.base.molecules['content-navigation']
import ContentNavigationItem from './2-molecules/content-navigation/ContentNavigationItem';
components[ContentNavigationItem.identifier] = ContentNavigationItem;

import ContentNavigation from './3-organisms/content-navigation/ContentNavigation';
components[ContentNavigation.identifier] = ContentNavigation;
// #endif

// #if modules.base.molecules['teaser-box-item']
import './2-molecules/teaser-box/TeaserBox';
// #endif

import Dropdown from './2-molecules/dropdown/Dropdown';
components[Dropdown.identifier] = Dropdown;

import SlideDropdown from './2-molecules/dropdown/SlideDropdown';
components[SlideDropdown.identifier] = SlideDropdown;

// #if modules.base.molecules['nav-lang']
import NavLang from './2-molecules/nav/nav-lang/NavLang';
components[NavLang.identifier] = NavLang;
// #endif

// #if !modules.base.organisms.sidebar
import NavToggle from './1-atoms/nav-toggle/NavToggle';
components[NavToggle.identifier] = NavToggle;

import NavMain from './2-molecules/nav/nav-main/NavMain';
components[NavMain.identifier] = NavMain;
// #endif

// #if modules.base.organisms.sidebar
import NavSidebar from './2-molecules/nav/nav-sidebar/NavSidebar';
components[NavSidebar.identifier] = NavSidebar;

import SidebarToggle from './3-organisms/sidebar/SidebarToggle';
components[SidebarToggle.identifier] = SidebarToggle;

import { identifier as sidebarIdentifier } from './3-organisms/sidebar/Sidebar.desc';
import lazySidebar from './3-organisms/sidebar/lazySidebar';
components[sidebarIdentifier] = lazySidebar;
// #endif

// #if modules.base.organisms.sidebar === 'fixed'
import SidebarSticky from './3-organisms/sidebar/SidebarSticky';
components[SidebarSticky.identifier] = SidebarSticky;
// #endif

import Notification from './2-molecules/notification/Notification';
components[Notification.identifier] = Notification;

// import Overlay from './2-molecules/overlay/overlay/overlay';
// components[Overlay.identifier] = Overlay;

// #if modules.base.molecules['location-map']
import LocationMap from './2-molecules/maps/location-map/location-map';
components[LocationMap.identifier] = LocationMap;
// #endif

// #if modules.base.molecules['filter-area']
import FilterArea from './2-molecules/filter-area/FilterArea';
components[FilterArea.identifier] = FilterArea;
// #endif

import { identifier as formIdentifier } from './2-molecules/form/Form.desc';
import lazyForm from './2-molecules/form/lazyForm';
components[formIdentifier] = lazyForm;

// #if modules.base.organisms.header
import Header from './3-organisms/header/Header';
components[Header.identifier] = Header;
// #endif

// #if modules.base.molecules['collapsible-box']
import { identifier as collapsibleBoxIdentifier } from './2-molecules/collapsible-box/CollapsibleBox.desc';
import lazyCollapsibleBox from './2-molecules/collapsible-box/lazyCollapsibleBox';
components[collapsibleBoxIdentifier] = lazyCollapsibleBox;
// #endif

// #if modules.base.molecules.slider
import './2-molecules/slider/lazySlider';
// #endif

import { identifier as lightboxIdentifier } from './3-organisms/lightbox/Lightbox.desc';
import lazyLightbox from './3-organisms/lightbox/lazyLightbox';
components[lightboxIdentifier] = lazyLightbox;

domLoaded(() => {
  svgFixer();
  // #if target !== 'esm'
  placeholder();
  // #endif

  document.documentElement.classList.add('js');

  if (window.self !== window.top) {
    document.documentElement.classList.add('is-in-iframe');
  }
});

registerModule(components);

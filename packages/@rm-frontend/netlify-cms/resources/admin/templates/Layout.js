/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
import React from 'react';

const TemplateWrapper = ({ children }) => {
  return (
    <div class="page-wrap__content">
      <main class="content-wrap" id="content" tabIndex="-1">
        {children}
      </main>
      <a href="#🔝" class="scroll-to-top" data-component="base.scroll-to-top">
        <svg class="icon " role="img">
          <use
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xlinkHref="#icon-arrow-up"
          ></use>
        </svg>
      </a>
    </div>
  );
};

export default TemplateWrapper;

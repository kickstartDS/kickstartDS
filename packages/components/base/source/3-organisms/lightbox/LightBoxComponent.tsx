import {
  ForwardRefRenderFunction,
  HTMLAttributes,
  forwardRef,
  createElement,
  createContext,
  useContext,
} from 'react';
import './lazyLightbox.js';
import './lightbox.scss';

const LightBoxComponent: ForwardRefRenderFunction<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
> = (props, ref) => (
  // Root element of PhotoSwipe. Must have className pswp.
  <div
    className="pswp"
    tabIndex={-1}
    role="dialog"
    aria-hidden="true"
    data-component="base.lightbox"
    ref={ref}
    {...props}
  >
    {/* Background of PhotoSwipe.
         It's a separate element as animating opacity is faster than rgba(). */}
    <div className="pswp__bg"></div>

    {/* Slides wrapper with overflow:hidden. */}
    <div className="pswp__scroll-wrap">
      {/* Container that holds slides.
            PhotoSwipe keeps only 3 of them in the DOM to save memory.
            Don't modify these 3 pswp__item elements, data is added later on. */}
      <div className="pswp__container">
        <div className="pswp__item"></div>
        <div className="pswp__item"></div>
        <div className="pswp__item"></div>
      </div>

      {/* Default (PhotoSwipeUI_Default) interface on top of sliding area. Can be changed. */}
      <div className="pswp__ui pswp__ui--hidden">
        <div className="pswp__top-bar">
          {/*  Controls are self-explanatory. Order can be changed. */}

          <div className="pswp__counter"></div>

          <button
            className="pswp__button pswp__button--close"
            title="Close (Esc)"
          />

          <button className="pswp__button pswp__button--share" title="Share" />

          <button
            className="pswp__button pswp__button--fs"
            title="Toggle fullscreen"
          />

          <button
            className="pswp__button pswp__button--zoom"
            title="Zoom in/out"
          />

          {/* Preloader demo https://codepen.io/dimsemenov/pen/yyBWoR
                element will get className pswp__preloader--active when preloader is running */}
          <div className="pswp__preloader">
            <div className="pswp__preloader__icn">
              <div className="pswp__preloader__cut">
                <div className="pswp__preloader__donut" />
              </div>
            </div>
          </div>
        </div>

        <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
          <div className="pswp__share-tooltip" />
        </div>

        <button
          className="pswp__button pswp__button--arrow--left"
          title="Previous (arrow left)"
        />

        <button
          className="pswp__button pswp__button--arrow--right"
          title="Next (arrow right)"
        />

        <div className="pswp__caption">
          <div className="pswp__caption__center" />
        </div>
      </div>
    </div>
  </div>
);

export const LightBoxContextDefault = forwardRef(LightBoxComponent);
export const LightBoxContext = createContext(LightBoxContextDefault);
export const LightBox: typeof LightBoxContextDefault = forwardRef(
  (props, ref) => createElement(useContext(LightBoxContext), { ...props, ref })
);

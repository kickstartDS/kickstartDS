import { FunctionComponent } from 'react';
import classnames from 'classnames';
import { Headline } from '../../../2-molecules/headline/HeadlineComponent';
import { HeadlineProps } from '../../../2-molecules/headline/HeadlineProps';
import './section.scss';

interface SectionProps {
  background?: '0' | '1';
  id?: string;
  width?: 'full' | 'full-gap' | 'default' | 'narrow';
  'space-before'?: 'default' | 'small' | 'none';
  'space-after'?: 'default' | 'small' | 'none';
  headline?: HeadlineProps;
  className?: string;
}

export const Section: FunctionComponent<SectionProps> = ({
  children,
  background,
  id,
  width,
  'space-before': spaceBefore,
  'space-after': spaceAfter,
  headline,
  className,
}) => (
  <div
    className={classnames(
      'l-section',
      background && `l-section--bg-${background}`,
      spaceBefore && `l-section--space-before-${spaceBefore}`,
      spaceAfter && `l-section--space-after-${spaceAfter}`,
      className
    )}
    id={id}
  >
    <div
      className={classnames('l-main-wrap', width && `l-main-wrap--${width}`)}
    >
      {headline ? <Headline {...headline} /> : ''}
      {children}
    </div>
  </div>
);

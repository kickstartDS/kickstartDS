import { FunctionComponent } from 'react';
import classnames from 'classnames';
import { ContentHeadline } from '../../../2-molecules/content-headline/ContentHeadlineComponent';
import { ContentHeadlineProps } from '../../../2-molecules/content-headline/ContentHeadlineProps';
import './section.css';

interface SectionProps {
  background?: '0' | '1';
  id?: string;
  width?: 'full' | 'full-gap' | 'default' | 'narrow';
  'space-before'?: 'default' | 'small' | 'none';
  'space-after'?: 'default' | 'small' | 'none';
  headline?: ContentHeadlineProps;
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
      {headline ? <ContentHeadline {...headline} /> : ''}
      {children}
    </div>
  </div>
);

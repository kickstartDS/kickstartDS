import { FunctionComponent, HTMLAttributes } from 'react';
import { HTMLProps } from './HtmlProps';

export const Html: FunctionComponent<
  HTMLProps & HTMLAttributes<HTMLDivElement>
> = ({ html }) => (
  <div className="c-html" dangerouslySetInnerHTML={{ __html: html }} />
);

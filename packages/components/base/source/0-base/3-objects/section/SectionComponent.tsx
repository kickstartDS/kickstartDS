import {
  FunctionComponent,
  createContext,
  useContext,
  HTMLAttributes,
} from 'react';
import classnames from 'classnames';
import { Headline } from '../../../2-molecules/headline/HeadlineComponent';
import { SectionProps } from './SectionProps';
import './section.scss';

const Container: FunctionComponent<SectionProps> = ({
  width,
  gutter,
  mode,
  children,
}) => (
  <div
    className={classnames(
      'l-section__container',
      width && width !== 'default' && `l-section__container--${width}`,
      gutter &&
        gutter !== 'default' &&
        `l-section__container--gutter-${gutter}`,
      mode && mode !== 'default' && `l-section__container--${mode}`
    )}
  >
    {children}
  </div>
);

const SectionComponent: FunctionComponent<
  SectionProps & HTMLAttributes<HTMLDivElement>
> = ({
  background,
  spaceBefore,
  spaceAfter,
  headline,
  width,
  gutter,
  mode,
  className,
  children,
  ...props
}) => (
  <div
    className={classnames(
      'l-section',
      background && background !== 'default' && `l-section--${background}`,
      spaceBefore &&
        spaceBefore !== 'default' &&
        `l-section--space-before-${spaceBefore}`,
      spaceAfter &&
        spaceAfter !== 'default' &&
        `l-section--space-after-${spaceAfter}`,
      className
    )}
    {...props}
  >
    {headline && headline.content && (
      <Container width={width}>
        <Headline {...headline} />
      </Container>
    )}
    {children && (
      <Container width={width} gutter={gutter} mode={mode}>
        {children}
      </Container>
    )}
  </div>
);

export const SectionContextDefault = SectionComponent;
export const SectionContext = createContext(SectionContextDefault);
export const Section: typeof SectionContextDefault = (props) => {
  const Component = useContext(SectionContext);
  return <Component {...props} />;
};

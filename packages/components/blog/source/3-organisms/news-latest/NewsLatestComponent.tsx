import { FunctionComponent } from 'react';
import { Section } from '@kickstartds/base/section';
import { NewsLatestItem } from '../../2-molecules/news-latest-item';
import { NewsLatestProps } from './NewsLatestProps';
import './news-latest.scss';

// TODO only show 3: {{#each (slice newsItems 0 3)}}
export const NewsLatest: FunctionComponent<NewsLatestProps> = ({
  newsItems,
}) => (
  <Section mode="tile">
    {newsItems &&
      newsItems.map((newsItem, i) => (
        <NewsLatestItem {...newsItem} key={i} index={i} />
      ))}
  </Section>
);

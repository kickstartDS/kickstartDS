import { FunctionComponent } from 'react';
import { Section } from '@kickstartds/base/lib/section';
import { NewsListItem } from '../../2-molecules/news-list-item';
import { NewsListProps } from './NewsListProps';

// TODO readd: {{try "molecules-pagination" }}
// TODO only show 5: {{#each (slice newsItems 1 5)}}
export const NewsList: FunctionComponent<NewsListProps> = ({ newsItems }) => (
  <Section width="narrow" mode="list">
    {newsItems &&
      newsItems.map((newsItem, index) => (
        <NewsListItem {...newsItem} key={`newsItem-${index}`} index={index} />
      ))}
  </Section>
);

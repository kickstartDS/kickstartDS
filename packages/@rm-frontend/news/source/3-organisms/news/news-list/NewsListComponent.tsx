import { FunctionComponent } from 'react';
import { Section } from '@rm-frontend/base';
import { NewsListItem } from '../../../2-molecules/news/news-list-item/NewsListItemComponent';
import { NewsListProps } from './NewsListProps';
import './news-list.css';

// TODO readd: {{try "molecules-pagination" }}
// TODO only show 5: {{#each (slice newsItems 1 5)}}
export const NewsList: FunctionComponent<NewsListProps> = ({ newsItems }) => (
  <Section width="narrow">
    <div className="news-list">
      {newsItems &&
        newsItems.map((newsItem, index) => (
          <NewsListItem {...newsItem} key={`newsItem-${index}`} index={index} />
        ))}
    </div>
  </Section>
);

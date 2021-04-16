import { FunctionComponent } from 'react';
import { Section } from '@rm-frontend/base/lib/section';
import { LinkButton } from '@rm-frontend/base/lib/link-button';
import { NewsLatestItem } from '../../2-molecules/news-latest-item';
import { NewsLatestProps } from './NewsLatestProps';
import './news-latest.scss';

// TODO only show 3: {{#each (slice newsItems 0 3)}}
export const NewsLatest: FunctionComponent<NewsLatestProps> = ({
  newsItems,
}) => (
  <Section>
    <div className="news news-latest">
      {newsItems &&
        newsItems.map((newsItem, i) => (
          <NewsLatestItem {...newsItem} key={i} index={i} />
        ))}
    </div>

    <div className="news news-latest__more">
      <LinkButton label="Alle Neuigkeiten" variant="outline" href="#" />
    </div>
  </Section>
);

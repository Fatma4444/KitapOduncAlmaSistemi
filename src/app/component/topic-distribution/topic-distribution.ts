import { Component } from '@angular/core';
import { TopicDistributionHeader } from './topic-distribution-header/topic-distribution-header';
import { AreaDistribution } from './area-distribution/area-distribution';
import { BookDistribution } from './book-distribution/book-distribution';

@Component({
  imports: [TopicDistributionHeader, AreaDistribution, BookDistribution],
  selector: 'app-topic-distribution',
  styleUrl: './topic-distribution.css',
  templateUrl: './topic-distribution.html',
})
export class TopicDistribution {}

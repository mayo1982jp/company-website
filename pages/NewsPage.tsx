
import React from 'react';
import type { NewsArticle } from '../types';
import { Link } from 'react-router-dom';

const newsArticles: NewsArticle[] = [
  {
    id: 'news-01',
    title: '自律型AIプラットフォーム「CogniSphere」のβ版を提供開始',
    date: '2025年6月15日',
    imageUrl: 'https://picsum.photos/400/250?random=10',
    excerpt: '誰でも簡単にAIエージェントを構築できるSaaSプラットフォーム「CogniSphere」のβ版を、一部企業向けに提供開始しました。'
  },
  {
    id: 'news-03',
    title: '世界最大級のAIカンファレンスにCEOの田中が登壇',
    date: '2024年11月20日',
    imageUrl: 'https://picsum.photos/400/250?random=12',
    excerpt: 'サンフランシスコで開催された「AI World Summit 2024」にて、CEOの田中がAIエージェントの未来について講演しました。'
  },
  {
    id: 'news-02',
    title: 'シリーズAラウンドで15億円の資金調達を実施',
    date: '2024年3月5日',
    imageUrl: 'https://picsum.photos/400/250?random=11',
    excerpt: '国内外の投資家を引受先とする第三者割当増資により、シリーズAラウンドで15億円の資金調達を完了したことをお知らせします。'
  },
  {
    id: 'news-04',
    title: '大手製造業との業務自動化に関する実証実験を開始',
    date: '2023年8月10日',
    imageUrl: 'https://picsum.photos/400/250?random=13',
    excerpt: '国内大手製造メーカーと共同で、サプライチェーン管理をAIエージェントで自動化する実証実験を開始しました。'
  },
];

const NewsCard: React.FC<{ article: NewsArticle }> = ({ article }) => (
    <Link to="#" className="group block bg-neutral-900 rounded-xl overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 border border-transparent hover:border-brand-blue">
        <img src={article.imageUrl} alt={article.title} className="w-full h-48 object-cover group-hover:opacity-90 transition-opacity" />
        <div className="p-6">
            <p className="text-sm text-neutral-400">{article.date}</p>
            <h3 className="mt-2 text-lg font-semibold text-white group-hover:text-brand-blue transition-colors">{article.title}</h3>
            <p className="mt-2 text-sm text-neutral-300">{article.excerpt}</p>
        </div>
    </Link>
);

const NewsPage: React.FC = () => {
  return (
    <div className="bg-black text-white animate-fade-in-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-neutral-200 to-neutral-400 bg-clip-text text-transparent">News</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-neutral-300">
                QuantumLeapの最新情報、プレスリリース、活動報告をお届けします。
            </p>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.map(article => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsPage;

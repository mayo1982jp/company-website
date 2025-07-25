
import React, { useState } from 'react';
import type { JobOpening } from '../types';

const jobOpenings: JobOpening[] = [
  {
    id: 'swe-01',
    title: 'AIリサーチエンジニア',
    department: '研究開発部',
    location: 'フルリモート / 東京都千代田区',
    description: '最新の論文を基にしたAIモデルの実装、及び自社製品への応用研究を担当していただきます。大規模言語モデルや強化学習に関する深い知識が求められます。'
  },
  {
    id: 'swe-02',
    title: 'バックエンドエンジニア (AI Platform)',
    department: '開発部',
    location: 'フルリモート / 東京都千代田区',
    description: 'AIエージェントプラットフォーム「CogniSphere」のスケーラブルなバックエンドシステムの設計、開発、運用を担当します。Python, Go, Kubernetesの経験者歓迎。'
  },
  {
    id: 'pm-01',
    title: 'AIプロジェクトマネージャー',
    department: '事業開発部',
    location: '東京都千代田区',
    description: 'クライアント企業の課題解決に向けたAI導入プロジェクトの計画、実行、管理をリードします。技術チームとビジネスサイドの橋渡しとなる重要なポジションです。'
  },
];

const JobCard: React.FC<{ job: JobOpening; onSelect: () => void; isSelected: boolean }> = ({ job, onSelect, isSelected }) => (
    <div className="border-b border-neutral-800">
      <button onClick={onSelect} className="w-full text-left p-6 hover:bg-neutral-900 transition-colors duration-200">
        <div className="flex justify-between items-center">
            <div>
              <h3 className="text-xl font-semibold text-brand-blue">{job.title}</h3>
              <p className="mt-1 text-neutral-400">{job.department} / {job.location}</p>
            </div>
            <svg className={`w-6 h-6 text-neutral-500 transform transition-transform ${isSelected ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
        </div>
      </button>
      {isSelected && (
        <div className="p-6 pt-0">
          <p className="text-neutral-300 whitespace-pre-line">{job.description}</p>
          <button className="mt-6 bg-brand-blue text-white font-semibold py-2 px-5 rounded-full hover:bg-opacity-90 transition-all">
            応募する
          </button>
        </div>
      )}
    </div>
);

const CareersPage: React.FC = () => {
    const [selectedJobId, setSelectedJobId] = useState<string | null>(null);

    const handleSelectJob = (jobId: string) => {
        setSelectedJobId(prevId => (prevId === jobId ? null : jobId));
    };

  return (
    <div className="bg-black text-white animate-fade-in-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-neutral-200 to-neutral-400 bg-clip-text text-transparent">未来を、共に創る。</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-neutral-300">
                世界を変える情熱と才能を、私たちは求めています。QuantumLeapで、あなたのキャリアの次章を始めませんか。
            </p>
        </div>

        <div className="mt-20 max-w-4xl mx-auto bg-neutral-950 rounded-2xl border border-neutral-800 overflow-hidden">
            <h2 className="text-2xl font-bold p-6 text-white border-b border-neutral-800">募集中のポジション</h2>
            <div>
                {jobOpenings.map(job => (
                    <JobCard 
                        key={job.id} 
                        job={job} 
                        isSelected={selectedJobId === job.id} 
                        onSelect={() => handleSelectJob(job.id)}
                    />
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;


import React from 'react';

const ServiceCard = ({ title, description, icon }: { title: string, description: string, icon: React.ReactNode }) => (
    <div className="bg-neutral-900 p-8 rounded-2xl border border-white/10 transform hover:-translate-y-2 transition-transform duration-300">
        <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-brand-blue text-white">
            {icon}
        </div>
        <h3 className="mt-6 text-xl font-semibold text-white">{title}</h3>
        <p className="mt-2 text-base text-neutral-400">{description}</p>
    </div>
);

const ServicesPage: React.FC = () => {
    return (
        <div className="bg-neutral-950 text-white animate-fade-in-up">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                <div className="text-center">
                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-neutral-200 to-neutral-400 bg-clip-text text-transparent">事業内容</h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-neutral-300">
                        オーダーメイドのAIエージェントで、あなたのビジネスを次の次元へ。
                    </p>
                </div>

                <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ServiceCard 
                        title="カスタムAIエージェント開発"
                        description="お客様の業界や業務フローに特化した、完全オーダーメイドのAIエージェントを構築。既存システムとの連携もスムーズです。"
                        icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><path d="M12 18v-6"></path><path d="m9 15 3-3 3 3"></path></svg>}
                    />
                    <ServiceCard 
                        title="AI業務自動化コンサルティング"
                        description="どの業務をAIで自動化できるか、専門家が分析・提案。導入から運用まで一貫してサポートし、ROIの最大化を目指します。"
                        icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>}
                    />
                    <ServiceCard 
                        title="AIプラットフォーム『CogniSphere』"
                        description="当社のコア技術をSaaSとして提供。ノーコードで独自のAIエージェントを構築・管理できるプラットフォームです。"
                        icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 17.54V6.5a2 2 0 0 0-2-2h-12a2 2 0 0 0-2 2v11.04"></path><path d="M8 19v-5"></path><path d="M12 19v-3"></path><path d="M16 19v-1"></path><path d="M12 3v2"></path><path d="M6 3v2"></path><path d="M18 3v2"></path></svg>}
                    />
                </div>

                <div className="mt-24 bg-black p-10 md:p-16 rounded-2xl flex flex-col lg:flex-row items-center gap-10">
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl font-bold text-white">導入プロセス</h2>
                        <p className="mt-4 text-neutral-400">お客様との対話を第一に。スムーズな導入で、すぐに価値を実感いただけます。</p>
                        <ol className="mt-8 space-y-4">
                            <li className="flex items-start"><span className="text-brand-blue font-bold mr-3">1.</span><span className="text-neutral-300">ヒアリング & 要件定義</span></li>
                            <li className="flex items-start"><span className="text-brand-blue font-bold mr-3">2.</span><span className="text-neutral-300">プロトタイプ開発 & PoC</span></li>
                            <li className="flex items-start"><span className="text-brand-blue font-bold mr-3">3.</span><span className="text-neutral-300">本開発 & システム連携</span></li>
                            <li className="flex items-start"><span className="text-brand-blue font-bold mr-3">4.</span><span className="text-neutral-300">導入 & 運用サポート</span></li>
                        </ol>
                    </div>
                    <div className="lg:w-1/2">
                        <img src="https://picsum.photos/600/400?random=3" alt="Process" className="rounded-xl w-full" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;

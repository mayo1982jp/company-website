
import React from 'react';

const StatCard = ({ label, value }: { label: string; value: string }) => (
    <div className="bg-neutral-900 p-6 rounded-xl border border-white/10">
        <dt className="text-sm text-neutral-400">{label}</dt>
        <dd className="mt-1 text-2xl font-semibold text-white">{value}</dd>
    </div>
);

const CompanyPage: React.FC = () => {
  return (
    <div className="bg-black text-white animate-fade-in-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-neutral-200 to-neutral-400 bg-clip-text text-transparent">知性の、その先へ。</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-neutral-300">
            私たちはAI技術の探求を通じて、人類のポテンシャルを最大限に引き出すことを使命としています。
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="prose prose-invert lg:prose-lg text-neutral-300">
                <h2 className="text-white">Our Mission</h2>
                <p>
                    自律型AIエージェントの研究開発と社会実装を通じて、複雑な知的労働を自動化し、人々がより創造的な活動に集中できる世界を実現します。
                </p>
                <h2 className="text-white">Our Vision</h2>
                <p>
                    すべての個人と組織が、最高のパフォーマンスを発揮するための専用AIパートナーを持つ未来を創造します。AIが人間知性を拡張し、共存共栄する社会のフロントランナーであり続けます。
                </p>
            </div>
            <div>
                <img src="https://picsum.photos/600/400?random=2" alt="Office" className="rounded-2xl shadow-2xl"/>
            </div>
        </div>

        <div id="culture" className="mt-24">
            <h2 className="text-3xl font-bold text-center text-white">働く環境</h2>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-8 bg-neutral-900 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold">自律と挑戦</h3>
                    <p className="mt-2 text-neutral-400">最高のパフォーマンスを発揮できるよう、裁量権の大きいフラットな組織を重視しています。</p>
                </div>
                <div className="p-8 bg-neutral-900 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold">継続的な学習</h3>
                    <p className="mt-2 text-neutral-400">書籍購入補助や勉強会開催など、メンバーの成長を積極的にサポートします。</p>
                </div>
                <div className="p-8 bg-neutral-900 rounded-xl border border-white/10">
                    <h3 className="text-xl font-semibold">オープンなコミュニケーション</h3>
                    <p className="mt-2 text-neutral-400">役職に関係なく、誰もが自由に意見を交わせるオープンな文化を醸成しています。</p>
                </div>
            </div>
        </div>


        <div className="mt-24 bg-neutral-950 p-10 rounded-2xl">
            <h2 className="text-3xl font-bold text-center text-white mb-10">会社概要</h2>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 max-w-3xl mx-auto">
                <div className="sm:col-span-1">
                    <dt className="text-neutral-400">会社名</dt>
                    <dd className="text-white">QuantumLeap AI株式会社 (QuantumLeap AI Inc.)</dd>
                </div>
                <div className="sm:col-span-1">
                    <dt className="text-neutral-400">設立</dt>
                    <dd className="text-white">2023年4月1日</dd>
                </div>
                <div className="sm:col-span-1">
                    <dt className="text-neutral-400">代表者</dt>
                    <dd className="text-white">代表取締役CEO 田中 聡</dd>
                </div>
                <div className="sm:col-span-1">
                    <dt className="text-neutral-400">資本金</dt>
                    <dd className="text-white">1億円</dd>
                </div>
                <div className="sm:col-span-2">
                    <dt className="text-neutral-400">所在地</dt>
                    <dd className="text-white">〒100-0005 東京都千代田区丸の内1-1-1 パレスビル</dd>
                </div>
                <div className="sm:col-span-2">
                    <dt className="text-neutral-400">事業内容</dt>
                    <dd className="text-white">自律型AIエージェントの研究・開発・販売</dd>
                </div>
            </dl>
        </div>

      </div>
    </div>
  );
};

export default CompanyPage;

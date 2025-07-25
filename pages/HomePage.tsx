
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="animate-fade-in-up">
      {/* Hero Section */}
      <section className="h-screen min-h-[700px] flex flex-col justify-center items-center text-center relative px-4 overflow-hidden">
        <div className="absolute inset-0 bg-black z-0">
            <img src="https://picsum.photos/1920/1080?grayscale&blur=2" alt="Abstract background" className="w-full h-full object-cover opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
        </div>
        <div className="relative z-10 flex flex-col items-center">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight bg-gradient-to-r from-neutral-200 to-neutral-400 bg-clip-text text-transparent">
                未来を実装する。
            </h1>
            <p className="mt-6 text-lg md:text-xl max-w-2xl text-neutral-300">
                QuantumLeapは、自律型AIエージェントでビジネスの限界を突破します。
                複雑なタスクを自動化し、新たな価値創造を実現するパートナー。
            </p>
            <div className="mt-10 flex gap-4">
                <Link to="/services" className="bg-brand-blue text-white font-semibold py-3 px-6 rounded-full hover:bg-opacity-90 transition-all flex items-center gap-2">
                    事業内容を見る
                </Link>
                <Link to="/contact" className="bg-neutral-800 text-white font-semibold py-3 px-6 rounded-full hover:bg-neutral-700 transition-all flex items-center gap-2">
                    お問い合わせ <ArrowRight size={16} />
                </Link>
            </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="py-20 sm:py-32 bg-neutral-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                  <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">AIエージェントが、全てを変える</h2>
                  <p className="mt-4 text-lg text-neutral-400">私たちの技術がもたらす変革をご覧ください。</p>
              </div>
              <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="p-8 bg-neutral-900 rounded-2xl border border-white/10">
                      <h3 className="text-xl font-semibold text-white">自律的タスク実行</h3>
                      <p className="mt-2 text-neutral-400">データ分析からレポート作成、顧客対応まで。AIが自ら考え、実行します。</p>
                  </div>
                  <div className="p-8 bg-neutral-900 rounded-2xl border border-white/10">
                      <h3 className="text-xl font-semibold text-white">高度な意思決定支援</h3>
                      <p className="mt-2 text-neutral-400">膨大な情報から最適な戦略を提案し、ビジネスの精度を高めます。</p>
                  </div>
                  <div className="p-8 bg-neutral-900 rounded-2xl border border-white/10">
                      <h3 className="text-xl font-semibold text-white">24/365の業務効率化</h3>
                      <p className="mt-2 text-neutral-400">人間を超えるスピードと正確さで、ノンストップな業務遂行を可能に。</p>
                  </div>
              </div>
          </div>
      </section>

      {/* Company Vision */}
      <section className="relative py-20 sm:py-32 overflow-hidden">
        <img src="https://picsum.photos/1920/1080?random=1" alt="Vision" className="absolute inset-0 w-full h-full object-cover opacity-20"/>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">人の知性を、次のステージへ。</h2>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-neutral-300">
            私たちはAIを単なるツールとしてではなく、人間の創造性を拡張するパートナーとして捉えています。AIとの共創が当たり前になる社会を、QuantumLeapがリードします。
          </p>
          <div className="mt-10">
            <Link to="/company" className="text-brand-blue font-semibold hover:underline">
              私たちの理念について <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

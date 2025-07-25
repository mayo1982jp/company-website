
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-neutral-400">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-neutral-200 tracking-wider uppercase">QuantumLeap</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/services" className="hover:text-white transition">事業内容</Link></li>
              <li><Link to="/company" className="hover:text-white transition">企業情報</Link></li>
              <li><Link to="/news" className="hover:text-white transition">ニュース</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-neutral-200 tracking-wider uppercase">採用</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/careers" className="hover:text-white transition">採用情報</Link></li>
              <li><Link to="/company#culture" className="hover:text-white transition">働く環境</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-neutral-200 tracking-wider uppercase">Connect</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:text-white transition">X / Twitter</a></li>
              <li><a href="#" className="hover:text-white transition">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white transition">GitHub</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-neutral-200 tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:text-white transition">プライバシーポリシー</a></li>
              <li><a href="#" className="hover:text-white transition">利用規約</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-neutral-800 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm">
            <p>&copy; {year} QuantumLeap AI株式会社. All rights reserved.</p>
            <p className="mt-4 sm:mt-0">日本から、AIの未来を。</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

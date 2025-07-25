
import React, { useState, useRef, useEffect } from 'react';
import type { ChatMessage } from '../types';
import { askAI } from '../services/geminiService';
import { Send, Bot, User, Loader } from 'lucide-react';

const ContactPage: React.FC = () => {
    const [messages, setMessages] = useState<ChatMessage[]>([
        { id: 'initial', role: 'assistant', content: 'こんにちは！QuantumLeapのAIアシスタントです。何かご質問はありますか？' }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage: ChatMessage = { id: Date.now().toString(), role: 'user', content: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const aiResponse = await askAI(input);
            const assistantMessage: ChatMessage = { id: (Date.now() + 1).toString(), role: 'assistant', content: aiResponse };
            setMessages(prev => [...prev, assistantMessage]);
        } catch (error) {
            const errorMessage: ChatMessage = { id: (Date.now() + 1).toString(), role: 'system', content: 'エラーが発生しました。しばらくしてから再度お試しください。' };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-neutral-950 text-white animate-fade-in-up">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                <div className="text-center">
                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-neutral-200 to-neutral-400 bg-clip-text text-transparent">お問い合わせ</h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-neutral-300">
                        AIエージェント開発のご相談、協業のご提案など、お気軽にご連絡ください。
                    </p>
                </div>

                <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* AI Assistant */}
                    <div className="bg-black p-6 rounded-2xl border border-white/10 flex flex-col h-[600px]">
                        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><Bot size={24}/> AIアシスタントに質問する</h2>
                        <div className="flex-1 overflow-y-auto pr-2 space-y-4">
                            {messages.map(msg => (
                                <div key={msg.id} className={`flex items-start gap-3 ${msg.role === 'user' ? 'justify-end' : ''}`}>
                                    {msg.role === 'assistant' && <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-blue flex items-center justify-center"><Bot size={18}/></div>}
                                    <div className={`p-3 rounded-lg max-w-sm ${msg.role === 'user' ? 'bg-brand-blue text-white' : 'bg-neutral-800 text-neutral-200'}`}>
                                        <p className="text-sm">{msg.content}</p>
                                    </div>
                                    {msg.role === 'user' && <div className="flex-shrink-0 w-8 h-8 rounded-full bg-neutral-700 flex items-center justify-center"><User size={18}/></div>}
                                </div>
                            ))}
                             {isLoading && (
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-blue flex items-center justify-center"><Bot size={18}/></div>
                                    <div className="p-3 rounded-lg bg-neutral-800 text-neutral-200">
                                       <Loader className="animate-spin" size={20} />
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>
                        <form onSubmit={handleSendMessage} className="mt-4 flex gap-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="AIに質問してみる..."
                                className="flex-1 bg-neutral-800 border border-neutral-700 rounded-full py-2 px-4 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-brand-blue"
                                disabled={isLoading}
                            />
                            <button type="submit" className="bg-brand-blue text-white rounded-full p-3 hover:bg-opacity-90 transition disabled:bg-neutral-600" disabled={isLoading || !input.trim()}>
                                <Send size={20} />
                            </button>
                        </form>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-black p-8 rounded-2xl border border-white/10">
                        <h2 className="text-xl font-bold text-white mb-6">お問い合わせフォーム</h2>
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-neutral-300">お名前</label>
                                <input type="text" id="name" className="mt-1 block w-full bg-neutral-800 border-neutral-700 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-blue" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-neutral-300">メールアドレス</label>
                                <input type="email" id="email" className="mt-1 block w-full bg-neutral-800 border-neutral-700 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-blue" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-neutral-300">お問い合わせ内容</label>
                                <textarea id="message" rows={5} className="mt-1 block w-full bg-neutral-800 border-neutral-700 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-blue"></textarea>
                            </div>
                            <div>
                                <button type="submit" className="w-full bg-brand-blue text-white font-semibold py-3 px-4 rounded-md hover:bg-opacity-90 transition-all">
                                    送信する
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;

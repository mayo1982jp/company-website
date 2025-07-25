
export interface JobOpening {
  id: string;
  title: string;
  location: string;
  department: string;
  description: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  date: string;
  imageUrl: string;
  excerpt: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
}

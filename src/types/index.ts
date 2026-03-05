export interface User {
  id: number;
  name: string;
  email: string;
  level: number;
  exp: number;
  streak: number;
  lastStudyDate?: string | null;
  createdAt: string;
}

export interface Term {
  id: number;
  term: string;
  shortDesc: string;
  fullDesc: string;
  category: string;
  tags: string[];
}

export interface UserProgress {
  id: number;
  userId: number;
  termId: number;
  status: 'unseen' | 'learned' | 'weak';
  createdAt: string;
  updatedAt: string;
}

export interface Badge {
  id: number;
  name: string;
  emoji: string;
  color: string;
  condition: string;
  description: string;
}

export interface UserBadge {
  id: number;
  userId: number;
  badgeId: number;
  earnedAt: string;
  badge?: Badge;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  answerIndex: number;
  category: string;
}

export interface LearningHistory {
  id: number;
  userId: number;
  activity: string;
  expGained: number;
  createdAt: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  token?: string;
  user?: User;
}

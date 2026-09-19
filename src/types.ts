export interface Candidate {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  matchScore: number;
  experience: string;
  avatar: string;
  skills: string[];
  status: 'new' | 'screened' | 'shortlisted' | 'interviewed';
  whyMatched: string;
}

export interface StepInfo {
  number: string;
  tag: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  category: 'Enterprise' | 'Healthcare' | 'Tech' | 'Advisors';
  avatar: string;
  metric?: string;
  metricLabel?: string;
}

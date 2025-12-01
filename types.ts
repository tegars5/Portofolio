export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  imageUrl: string;
  liveUrl: string;
  repoUrl: string;
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Tools';
  iconName: string; // Using string reference for Lucide icons mapping
}

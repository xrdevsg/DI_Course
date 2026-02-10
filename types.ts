export interface Course {
  id: string;
  number: string;
  title: string;
  tagline: string;
  shortDescription: string;
  targetAudience: string[];
  duration: string;
  tools: string[];
  whyNow?: string;
  journey: {
    title: string;
    description: string;
    steps: string[];
  };
  outcomes: string[];
  forWho: {
    individuals: string;
    teams: string;
  };
  color: string;
}

export interface ComparisonRow {
  label: string;
  left: string;
  right: string;
}
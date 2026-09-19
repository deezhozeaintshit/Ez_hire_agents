export interface ScenarioAction {
  id: string;
  type: 'search' | 'ats' | 'screen' | 'schedule' | 'email';
  title: string;
  detail: string;
  status: 'pending' | 'in_progress' | 'completed';
  timestamp: string;
  metric?: string;
}

export interface CandidateDemo {
  id: string;
  name: string;
  role: string;
  location: string;
  avatar: string;
  matchScore: number;
  matchRationale: string;
  badge: string;
  experience: string;
  skills: string[];
  screeningResult?: {
    score: string;
    highlights: string[];
  };
}

export interface ScenarioDefinition {
  id: string;
  chipLabel: string;
  prompt: string;
  category: 'Sourcing' | 'Screening' | 'Scheduling' | 'ATS Enrichment' | 'Executive';
  roleTitle: string;
  agentSummary: string;
  candidatesFound: number;
  actions: ScenarioAction[];
  candidates: CandidateDemo[];
  atsStatus: {
    system: string;
    recordsUpdated: number;
    syncLatency: string;
    details: string;
  };
}

export type AgentPersonalityMode = 'precision' | 'executive' | 'energetic';

export interface PersonalityConfig {
  id: AgentPersonalityMode;
  name: string;
  tagline: string;
  description: string;
  tone: string;
  greeting: string;
  avatarIcon: string;
  accentBadge: string;
}

export const AGENT_PERSONALITIES: Record<AgentPersonalityMode, PersonalityConfig> = {
  precision: {
    id: 'precision',
    name: 'Precision Algorithmic',
    tagline: 'Deterministic & ICP-Hardened',
    description: 'Ultra-objective, metric-driven recruiting engine prioritizing quota verification, tenure stats, and zero fluff.',
    tone: 'Analytical, concise, statistical',
    greeting: 'Parameters locked. Synthesizing ICP match score matrices and cross-platform verified credentials.',
    avatarIcon: '🎯',
    accentBadge: 'bg-emerald-500/15 border-emerald-500/30 text-emerald-400'
  },
  executive: {
    id: 'executive',
    name: 'Executive Advisor',
    tagline: 'Strategic & High-Touch Concierge',
    description: 'Tailored for senior leadership, board appointments, and white-glove candidate experience.',
    tone: 'Sophisticated, consultative, strategic',
    greeting: 'Good day. I am orchestrating discrete market outreach for senior leadership caliber talent.',
    avatarIcon: '👔',
    accentBadge: 'bg-cyan-500/15 border-cyan-500/30 text-cyan-400'
  },
  energetic: {
    id: 'energetic',
    name: 'Hyper-Growth Sourcer',
    tagline: 'Velocity & Inbound Magnet',
    description: 'Optimized for high-volume sprints, rapid candidate conversion, and dynamic personalized storytelling.',
    tone: 'Vibrant, fast-paced, high-momentum',
    greeting: 'Pipeline primed! Launching multi-thread sourcing sprints across 45+ platforms right now.',
    avatarIcon: '⚡',
    accentBadge: 'bg-indigo-500/15 border-indigo-500/30 text-indigo-400'
  }
};

export const PREDEFINED_SCENARIOS: ScenarioDefinition[] = [
  {
    id: 'sales-manager',
    chipLabel: 'find a sales manager with 2+ years exp',
    prompt: 'find a sales manager with 2+ years exp in Dallas',
    category: 'Sourcing',
    roleTitle: 'Senior Sales Manager • Dallas, TX',
    agentSummary: 'EZ Agent scanned 45+ platforms and internal ATS archives. Located 1,420 profiles, filtered against ICP quota attainment, and prepared initial outreach sequence with voice screening.',
    candidatesFound: 1420,
    actions: [
      {
        id: 'act-1',
        type: 'search',
        title: 'Multi-channel talent search executed',
        detail: 'Queried LinkedIn, AngelList, Salesforce Trailblazers, and 2,800+ dormant CRM profiles.',
        status: 'completed',
        timestamp: '00:01',
        metric: '1,420 analyzed'
      },
      {
        id: 'act-2',
        type: 'ats',
        title: 'Greenhouse & CRM bi-directional sync',
        detail: 'Matched 14 historical applicants; updated current titles, tenures, and contact details.',
        status: 'completed',
        timestamp: '00:03',
        metric: '14 enriched'
      },
      {
        id: 'act-3',
        type: 'screen',
        title: 'Autonomous voice screening dispatched',
        detail: 'Generated custom situational sales leadership questions based on hiring manager rubrics.',
        status: 'completed',
        timestamp: '00:06',
        metric: '9.4/10 average'
      },
      {
        id: 'act-4',
        type: 'schedule',
        title: 'Executive interview calendar holds',
        detail: 'Coordinating panel slots with VP of Sales & Hiring Team across Google Calendar.',
        status: 'in_progress',
        timestamp: '00:08',
        metric: '3 slots reserved'
      }
    ],
    candidates: [
      {
        id: 'c-vr',
        name: 'Verónica Rios',
        role: 'Sr. Sales Manager',
        location: 'Dallas, TX',
        avatar: 'VR',
        matchScore: 98,
        matchRationale: '140% quota attainment across 4 consecutive years at ScaleCo. Matches Dallas ICP with 5 yrs enterprise SaaS leadership.',
        badge: 'Top Match',
        experience: '5+ years SaaS leadership',
        skills: ['Enterprise SaaS', 'Outbound Motion', 'Salesforce CRM', 'Team Mentorship'],
        screeningResult: {
          score: '9.4/10',
          highlights: ['Exceeded team ACV goals by $2.4M', 'Proven pipeline coaching methodology']
        }
      },
      {
        id: 'c-mc',
        name: 'Michael Chang',
        role: 'Strategic Team Lead & AE',
        location: 'Austin / Dallas Remote',
        avatar: 'MC',
        matchScore: 94,
        matchRationale: 'Dormant ATS profile refreshed today. Promoted from AE to Strategic Team Lead. Active on job market.',
        badge: 'ATS Refreshed',
        experience: '4 years mid-market & enterprise',
        skills: ['Contract Negotiation', 'MEDDPICC', 'Account Management'],
        screeningResult: {
          score: '9.1/10',
          highlights: ['Closed 7 seven-figure deals', 'Strong inbound lead conversion rate']
        }
      },
      {
        id: 'c-el',
        name: 'Elena Rostova',
        role: 'Head of Regional Sales',
        location: 'Plano, TX (Dallas Area)',
        avatar: 'EL',
        matchScore: 91,
        matchRationale: 'Managed 18 account reps in cloud infrastructure software. Calendar slot aligned for panel interview.',
        badge: 'Panel Ready',
        experience: '6 years B2B cloud sales',
        skills: ['Cloud Infrastructure', 'Team Scaling', 'Forecasting & RevOps'],
        screeningResult: {
          score: '8.9/10',
          highlights: ['Built team from 4 to 18 SDRs/AEs', 'Consistent 118% revenue delivery']
        }
      }
    ],
    atsStatus: {
      system: 'Greenhouse & Workday Connected',
      recordsUpdated: 2840,
      syncLatency: '38ms',
      details: 'Stage triggers mapped: "Sourced by EZ Agent" -> "Screening Completed" -> "Panel Scheduled"'
    }
  },
  {
    id: 'match-icp',
    chipLabel: 'match candidate profiles to ICP',
    prompt: 'match candidate profiles to ICP for staff platform engineers with Kubernetes & Go',
    category: 'ATS Enrichment',
    roleTitle: 'Staff Platform Engineer • Hybrid / Remote',
    agentSummary: 'Cross-referenced engineering requisition parameters with GitHub commit graphs, patent registries, and internal ATS talent pool to eliminate candidate qualification guesswork.',
    candidatesFound: 840,
    actions: [
      {
        id: 'act-icp-1',
        type: 'ats',
        title: 'Deep ICP Criteria Synthesized',
        detail: 'Parsed 12 must-have architectural requirements: multi-region Kubernetes, Go concurrency, eBPF telemetry.',
        status: 'completed',
        timestamp: '00:01',
        metric: '100% matched'
      },
      {
        id: 'act-icp-2',
        type: 'search',
        title: 'GitHub & StackOverflow graph analysis',
        detail: 'Scored open-source contributions to CNCF projects and high-volume repository commits.',
        status: 'completed',
        timestamp: '00:04',
        metric: '320 contributors'
      },
      {
        id: 'act-icp-3',
        type: 'email',
        title: 'Hyper-personalized outreach generated',
        detail: 'Contextual emails citing specific open-source repo merges and distributed systems architecture.',
        status: 'completed',
        timestamp: '00:07',
        metric: '72% open rate'
      }
    ],
    candidates: [
      {
        id: 'c-dk',
        name: 'Devon Kallis',
        role: 'Principal Systems Architect',
        location: 'Seattle, WA (Remote)',
        avatar: 'DK',
        matchScore: 99,
        matchRationale: 'Direct maintainer of Kubernetes ingress controllers. Authored eBPF networking micro-benchmarks with 4k+ stars.',
        badge: 'Direct ICP Fit',
        experience: '8+ years distributed systems',
        skills: ['Kubernetes Internals', 'Golang', 'eBPF', 'Terraform'],
        screeningResult: {
          score: '9.8/10',
          highlights: ['Architected 99.999% uptime cluster at FinTech unicorn', 'Strong mentorship track record']
        }
      },
      {
        id: 'c-sa',
        name: 'Sophia Al-Mansoor',
        role: 'Staff Infrastructure Engineer',
        location: 'San Francisco, CA',
        avatar: 'SA',
        matchScore: 96,
        matchRationale: 'Previously led cloud platform migration at HashiCorp partner. 5 years focused on zero-downtime deployments.',
        badge: 'High Intent',
        experience: '7 years cloud platform',
        skills: ['Go', 'Rust', 'Service Mesh', 'CI/CD Pipeline'],
        screeningResult: {
          score: '9.3/10',
          highlights: ['Reduced deployment cold starts by 64%', 'Deep expertise in Istio and Envoy']
        }
      },
      {
        id: 'c-jt',
        name: 'Julian Thorne',
        role: 'Lead Platform Reliability Engineer',
        location: 'Denver, CO (Remote)',
        avatar: 'JT',
        matchScore: 93,
        matchRationale: 'ATS profile reactivated: previously interviewed for Senior role 2 years ago, now qualified for Staff level.',
        badge: 'Re-engaged Talent',
        experience: '6 years SRE & platform',
        skills: ['AWS ECS/EKS', 'Go', 'Prometheus', 'Chaos Engineering'],
        screeningResult: {
          score: '9.0/10',
          highlights: ['Pioneered chaos engineering drills', 'Saved $1.2M in annual AWS cloud compute']
        }
      }
    ],
    atsStatus: {
      system: 'Ashby & Lever Live Pipeline',
      recordsUpdated: 1140,
      syncLatency: '24ms',
      details: 'Automatic skill tag synchronization and seniority classification active.'
    }
  },
  {
    id: 'ai-screening',
    chipLabel: 'setup AI Screening calls for the shortlist',
    prompt: 'setup AI Screening calls for the shortlist of Clinical Nurse Supervisors',
    category: 'Screening',
    roleTitle: 'Clinical Nurse Supervisor • Memorial Healthcare',
    agentSummary: 'Autonomous conversational agent placed 18 compliant phone & voice screening sessions, validating compact state licenses, ICU shift availability, and patient safety certifications.',
    candidatesFound: 360,
    actions: [
      {
        id: 'act-scr-1',
        type: 'screen',
        title: 'Voice agent questions customized',
        detail: 'Loaded BLS/ACLS protocols, Compact State RN credential verification, and night-shift willingness questions.',
        status: 'completed',
        timestamp: '00:02',
        metric: '18 calls queued'
      },
      {
        id: 'act-scr-2',
        type: 'screen',
        title: 'Voice screening completed autonomously',
        detail: 'Zero human recruiter time spent on preliminary phone tags. Real-time audio transcript & scored summaries generated.',
        status: 'completed',
        timestamp: '00:05',
        metric: '15 completed'
      },
      {
        id: 'act-scr-3',
        type: 'schedule',
        title: 'Hospital Director panel times locked',
        detail: 'Booked top 3 qualified candidates directly into Chief Nursing Officer calendar.',
        status: 'completed',
        timestamp: '00:08',
        metric: '3 confirmed'
      }
    ],
    candidates: [
      {
        id: 'c-ab',
        name: 'Angela Brooks, BSN, RN',
        role: 'ICU Charge Nurse & Supervisor',
        location: 'Nashville, TN',
        avatar: 'AB',
        matchScore: 97,
        matchRationale: 'Compact State RN License active. 7 years level 1 trauma center experience. Excellent bedside leadership scores.',
        badge: 'Screening: 9.6/10',
        experience: '7 years Trauma ICU',
        skills: ['Compact RN License', 'ACLS/BLS Certified', 'Clinical Scheduling', 'Magnet Hospital'],
        screeningResult: {
          score: '9.6/10',
          highlights: ['Immediate availability for 36-hr night/day rotations', 'Zero safety incidents over 5 years']
        }
      },
      {
        id: 'c-tw',
        name: 'Tariq Washington, MSN',
        role: 'Nurse Manager - Critical Care',
        location: 'Louisville, KY',
        avatar: 'TW',
        matchScore: 95,
        matchRationale: 'Master of Science in Nursing. Managed 32 unit nurses. Confirmed relocation readiness during AI voice screen.',
        badge: 'Screening: 9.3/10',
        experience: '6 years unit management',
        skills: ['MSN Leadership', 'Staff Retention', 'Electronic Health Records (Epic)'],
        screeningResult: {
          score: '9.3/10',
          highlights: ['Boosted nurse retention rate by 28%', 'Epic Super-User certification']
        }
      },
      {
        id: 'c-ml',
        name: 'Maria Lourdes, RN',
        role: 'Assistant Nurse Manager',
        location: 'Indianapolis, IN',
        avatar: 'ML',
        matchScore: 92,
        matchRationale: 'Verified credential database. Scored highly in de-escalation scenarios and patient advocate interviews.',
        badge: 'Screening: 9.0/10',
        experience: '5 years emergency nursing',
        skills: ['Telemetry', 'Team Scheduling', 'Joint Commission Audit Prep'],
        screeningResult: {
          score: '9.0/10',
          highlights: ['Passed Joint Commission hospital inspection with zero infractions', 'Bilingual English/Spanish']
        }
      }
    ],
    atsStatus: {
      system: 'Workday HCM Healthcare Edition',
      recordsUpdated: 480,
      syncLatency: '32ms',
      details: 'Credentialing and screening transcript attachments synced to candidate profiles.'
    }
  },
  {
    id: 'schedule-panel',
    chipLabel: 'schedule interview with Olivia & Jarvis',
    prompt: 'schedule interview with Olivia & Jarvis for executive VP of Product',
    category: 'Scheduling',
    roleTitle: 'Executive VP of Product • Multi-stakeholder Panel',
    agentSummary: 'EZ Agent parsed panel attendee constraints across 3 time zones, held multi-interviewer buffer slots, and issued branded calendar invitations with briefing packets.',
    candidatesFound: 42,
    actions: [
      {
        id: 'act-sch-1',
        type: 'schedule',
        title: 'Executive calendar constraints resolved',
        detail: 'Analyzed calendar blocks for Olivia (CEO) & Jarvis (CTO). Detected overlapping board commitments.',
        status: 'completed',
        timestamp: '00:01',
        metric: '2 executive cal synced'
      },
      {
        id: 'act-sch-2',
        type: 'schedule',
        title: 'Candidate time zone consensus achieved',
        detail: 'Offered dynamic 45-minute focus windows. Automated SMS confirmation dispatched upon candidate acceptance.',
        status: 'completed',
        timestamp: '00:04',
        metric: 'Thursday 2:30 PM CST'
      },
      {
        id: 'act-sch-3',
        type: 'email',
        title: 'Executive briefing package delivered',
        detail: 'Attached parsed career dossier, executive track record, and AI screening summary to the calendar invite.',
        status: 'completed',
        timestamp: '00:06',
        metric: 'Briefing attached'
      }
    ],
    candidates: [
      {
        id: 'c-gw',
        name: 'Genevieve Walsh',
        role: 'VP of Product Innovation',
        location: 'New York / Chicago',
        avatar: 'GW',
        matchScore: 99,
        matchRationale: 'Scaled B2B SaaS platform from $20M to $180M ARR. Unanimous AI alignment with CEO product vision.',
        badge: 'Interview Confirmed',
        experience: '12+ years product leadership',
        skills: ['Product Strategy', 'PLG Growth', 'Enterprise M&A', 'Antigravity AI Models'],
        screeningResult: {
          score: '9.9/10',
          highlights: ['Led 45-person cross-functional PM & Design organization', 'Spearheaded 3 major product launches']
        }
      },
      {
        id: 'c-dp',
        name: 'David Patel',
        role: 'Senior Director of Product',
        location: 'Boston, MA',
        avatar: 'DP',
        matchScore: 95,
        matchRationale: 'Deep enterprise cybersecurity and infrastructure background. Former tech founder with successful exit.',
        badge: 'Slots Held',
        experience: '10 years executive product',
        skills: ['Zero Trust Architecture', 'Executive Roadmap', 'Pricing & Packaging'],
        screeningResult: {
          score: '9.4/10',
          highlights: ['Sold previous cybersecurity startup to Fortune 50', 'Managed global product roadmap']
        }
      }
    ],
    atsStatus: {
      system: 'Google Workspace & Greenhouse',
      recordsUpdated: 160,
      syncLatency: '18ms',
      details: 'Calendar invites, Google Meet links, and interviewer scorecards automatically generated.'
    }
  }
];

export function findMatchingScenario(userInput: string): ScenarioDefinition {
  const lower = userInput.toLowerCase();
  
  if (lower.includes('icp') || lower.includes('engineer') || lower.includes('kubernetes') || lower.includes('developer') || lower.includes('tech')) {
    return PREDEFINED_SCENARIOS[1];
  }
  if (lower.includes('screen') || lower.includes('call') || lower.includes('nurse') || lower.includes('health') || lower.includes('voice')) {
    return PREDEFINED_SCENARIOS[2];
  }
  if (lower.includes('schedule') || lower.includes('interview') || lower.includes('olivia') || lower.includes('jarvis') || lower.includes('calendar') || lower.includes('vp')) {
    return PREDEFINED_SCENARIOS[3];
  }
  
  // Default to sales manager scenario
  return PREDEFINED_SCENARIOS[0];
}

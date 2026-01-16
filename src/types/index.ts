import React from 'react';

export interface Member {
    id: string;
    name: string;
    budgetMin: number;
    budgetMax: number;
    seasons: string[];
    interests: string[];
    crowdPreference: 'avoid' | 'okay' | 'no-preference';
    avatar?: string;
}

export interface Destination {
    id: string;
    name: string;
    cost: number;
    season: string;
    category: string[];
    description: string;
    duration: number; // Number of days for this destination
    image?: string;
}

export interface Conflict {
    memberId: string;
    memberName: string;
    type: 'budget' | 'interest' | 'season';
    message: string;
    severity: 'high' | 'medium' | 'low';
}

// Dashboard Page Types
export type SummaryStat = {
  label: string
  value: string
  sub: string
  icon: React.ReactNode
}

export type ConflictItem = {
  severity: "high" | "medium" | "low"
  title: string
  description: string
}

export type DashboardDestination = {
  title: string
  description: string
  matchLabel: string
  cost: string
  season: string
  interests: string
  alignmentPercent: number
}
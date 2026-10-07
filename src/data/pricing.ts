// Stage 1 pilot prices from the Retiree Mentorship Business Model (Oct 2026). Not final.
export type PlanKey = 'trial' | 'annual' | 'orgPilot' | 'orgAnnual';

export const plans: { key: PlanKey; audience: 'individual' | 'organization'; price: number }[] = [
  { key: 'trial', audience: 'individual', price: 25 },
  { key: 'annual', audience: 'individual', price: 120 },
  { key: 'orgPilot', audience: 'organization', price: 1500 },
  { key: 'orgAnnual', audience: 'organization', price: 3000 },
];

export const formatUSD = (n: number) => `$${n.toLocaleString('en-US')}`;

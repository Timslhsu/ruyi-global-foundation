// Initial Board of Directors, Bylaws Section 2.3.
export type BoardRole = 'chair' | 'viceChair' | 'secretary' | 'director';

export const board: { name: string; nameZh?: string; role: BoardRole }[] = [
  { name: 'Wennie Hwang', nameZh: '黃薇如', role: 'chair' },
  { name: 'Sophie Ou', role: 'viceChair' },
  { name: 'Neha Joseph', role: 'secretary' },
  { name: 'Kareena Joseph', role: 'director' },
  { name: 'Yuanyuan Hsu', role: 'director' },
];

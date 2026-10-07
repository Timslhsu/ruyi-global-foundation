// Single source of truth for organization facts (from the Bylaws and Business Plan).
export const site = {
  legalName: 'Ruyi Global Foundation',
  chineseName: '如意基金會',
  url: 'https://timslhsu.github.io/ruyi-global-foundation/',
  ein: '42-3267051',
  incorporated: '2026-06-14',
  // TODO: confirm the public contact email before launch.
  email: 'info@ruyiglobalfoundation.org',
  principalOffice: '774 Navajo Drive, Riverside, CA 92507',
  mailingAddress: '10598 Flora Vista Ave, Cupertino, CA 95014',
  zelle: {
    // TODO: the bank QR page shows "ruyiglobalfpundation" — confirm spelling with U.S. Bank.
    recipientName: 'RUYI GLOBAL FOUNDATION',
    qrImage: '/images/zelle-qr.png',
  },
  // Paste Tally / Google Forms URLs here. Empty values fall back to an email link.
  forms: {
    mentee: '',
    mentor: '',
    organization: '',
    youthWaitlist: '',
    contact: '',
  },
} as const;

export type FormKey = keyof typeof site.forms;

export function formHref(key: FormKey, subject: string): string {
  return site.forms[key] || `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;
}

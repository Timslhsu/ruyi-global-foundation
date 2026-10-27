// Single source of truth for organization facts (from the Bylaws and Business Plan).
export const site = {
  legalName: 'Ruyi Global Foundation',
  chineseName: '如意基金會',
  url: 'https://timslhsu.github.io/ruyi-global-foundation/',
  ein: '42-3267051',
  incorporated: '2026-06-14',
  // Recipient for every website form and email button. Change it here to switch the whole site.
  // The address is never shown as page text.
  contactEmail: 'info@ruyiglobalfoundation.org',
  zelle: {
    // TODO: the bank QR page shows "ruyiglobalfpundation" — confirm spelling with U.S. Bank.
    recipientName: 'RUYI GLOBAL FOUNDATION',
    qrImage: '/images/zelle-qr.png',
  },
  features: {
    showBoard: false, // set to true once Board of Directors details are confirmed
    enrollmentOpen: false, // set to true to enable participant applications and the youth waitlist
  },
  // Optional external form URLs (Tally / Google Forms). Empty values fall back to an email link.
  forms: {
    mentee: '',
    organization: '',
    youthWaitlist: '',
  },
} as const;

export type FormKey = keyof typeof site.forms;

export function mailtoHref(subject: string, body?: string): string {
  const params = [`subject=${encodeURIComponent(subject)}`];
  if (body) params.push(`body=${encodeURIComponent(body)}`);
  return `mailto:${site.contactEmail}?${params.join('&')}`;
}

export function formHref(key: FormKey, subject: string): string {
  return site.forms[key] || mailtoHref(subject);
}

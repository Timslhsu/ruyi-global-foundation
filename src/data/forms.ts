import type { FormField } from '../components/MailtoForm.astro';
import { useContent, type Lang } from '../i18n/utils';

// Field definitions for the mailto forms, shared by every page that shows them.
export function mentorFields(lang: Lang): FormField[] {
  const m = useContent(lang).getInvolved.mentors;
  const f = m.form.fields;
  return [
    { name: 'name', label: f.name, type: 'text', required: true },
    { name: 'email', label: f.email, type: 'email', required: true },
    { name: 'phone', label: f.phone, type: 'tel' },
    { name: 'location', label: f.location, type: 'text', required: true },
    { name: 'industry', label: f.industry, type: 'text', required: true },
    { name: 'years', label: f.years, type: 'number', required: true, min: 0 },
    { name: 'experiences', label: f.experiences, type: 'checkboxes', options: m.experiences },
    { name: 'availability', label: f.availability, type: 'select', options: m.form.availabilityOptions },
    { name: 'about', label: f.about, type: 'textarea', required: true },
    { name: 'consent', label: f.consent, type: 'consent', required: true },
  ];
}

export function receiptFields(lang: Lang): FormField[] {
  const f = useContent(lang).donate.receipt.fields;
  return [
    { name: 'name', label: f.name, type: 'text', required: true },
    { name: 'bank', label: f.bank, type: 'text', required: true },
    { name: 'account', label: f.account, type: 'text', required: true, hint: f.accountHint },
    { name: 'date', label: f.date, type: 'date', required: true },
    { name: 'amount', label: f.amount, type: 'number', required: true, min: 1, step: 0.01 },
    { name: 'replyEmail', label: f.replyEmail, type: 'email' },
  ];
}

export function contactFields(lang: Lang): FormField[] {
  const k = useContent(lang).contact.form;
  return [
    { name: 'name', label: k.fields.name, type: 'text', required: true },
    { name: 'email', label: k.fields.email, type: 'email', required: true },
    { name: 'topic', label: k.fields.topic, type: 'select', required: true, options: k.topics },
    { name: 'message', label: k.fields.message, type: 'textarea', required: true },
  ];
}

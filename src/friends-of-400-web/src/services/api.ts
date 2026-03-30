import type { DonationRequest, DonationResponse, ContactRequest, ContactResponse, DonationCategory, AuthUser, AdminDonation, AdminContact, AdminStats } from '../types';

const API_BASE = import.meta.env.DEV ? '' : '';

async function request<T>(url: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE}${url}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || `Request failed with status ${res.status}`);
  }
  return res.json();
}

export async function submitDonation(data: DonationRequest): Promise<DonationResponse> {
  return request('/api/donations', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

export async function getDonationCategories(): Promise<DonationCategory[]> {
  return request('/api/donations/categories');
}

export async function submitContact(data: ContactRequest): Promise<ContactResponse> {
  return request('/api/contact', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

export async function getAuthUser(): Promise<AuthUser> {
  try {
    return await request('/api/auth/me');
  } catch {
    return { isAuthenticated: false, email: '', name: '' };
  }
}

export async function logout(): Promise<void> {
  await request('/api/auth/logout', { method: 'POST' });
}

export async function getAdminStats(): Promise<AdminStats> {
  return request('/api/admin/stats');
}

export async function getAdminDonations(): Promise<AdminDonation[]> {
  return request('/api/admin/donations');
}

export async function getAdminContacts(): Promise<AdminContact[]> {
  return request('/api/admin/contacts');
}

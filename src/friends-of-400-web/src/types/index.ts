export interface DonationRequest {
  category: string;
  amount: number;
  frequency: 'one-time' | 'monthly';
  donorName?: string;
  donorEmail?: string;
}

export interface DonationResponse {
  success: boolean;
  referenceId: string;
  message: string;
}

export interface ContactRequest {
  name: string;
  email: string;
  phone?: string;
  message: string;
  type: 'general' | 'volunteer' | 'sponsor';
}

export interface ContactResponse {
  success: boolean;
  message: string;
}

export interface DonationCategory {
  id: string;
  name: string;
  description: string;
  gradientFrom: string;
  gradientTo: string;
}

export interface AuthUser {
  email: string;
  name: string;
  isAuthenticated: boolean;
}

export interface AdminDonation {
  id: string;
  donorName: string;
  donorEmail: string;
  amount: number;
  category: string;
  frequency: string;
  date: string;
  referenceId: string;
}

export interface AdminContact {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  message: string;
  type: string;
  date: string;
}

export interface AdminStats {
  totalDonations: number;
  totalAmount: number;
  totalContacts: number;
}

export interface AdminImage {
  id: string;
  fileName: string;
  altText: string;
  category: string;
  url: string;
  uploadedAt: string;
}

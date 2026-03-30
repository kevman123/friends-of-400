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

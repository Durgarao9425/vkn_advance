export interface BookingData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  service: string;
  message: string;
  subject: string;
  time: string;
}

export function sendEmail(bookingData: BookingData): Promise<any>;

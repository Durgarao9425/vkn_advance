import emailjs from 'emailjs-com';

const EMAILJS_CONFIG = {
  serviceId: 'service_91rdylh',
  templateId: 'template_lr826hs',
  publicKey: 'zYkfkUekbz9A165fk'
};

// Initialize EmailJS with your public key
emailjs.init(EMAILJS_CONFIG.publicKey);

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

export const sendEmail = async (bookingData: BookingData): Promise<any> => {
  try {
    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      bookingData
    );
    return response;
  } catch (error) {
    console.error('Failed to send email:', error);
    throw error;
  }
};
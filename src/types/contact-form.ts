export type ContactFormPayload = {
  fullName: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

export type ContactFormValidationResult =
  | { success: true; data: ContactFormPayload }
  | { success: false; error: string };

export type ContactMethodIcon =
  | "phone"
  | "whatsapp"
  | "location"
  | "tiktok"
  | "instagram";

export type ContactMethod = {
  id: string;
  title: string;
  value: string;
  subtitle: string;
  icon: ContactMethodIcon;
  href?: string;
};

export type ContactFormField = {
  id: string;
  label: string;
  placeholder?: string;
  type: "text" | "tel" | "email" | "select" | "textarea";
  required?: boolean;
};

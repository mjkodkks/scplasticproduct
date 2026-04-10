export const languages = {
  th: "ไทย",
  en: "English",
};

export const defaultLang = "th";

export const ui = {
  th: {
    "contact.name.placeholder": "ชื่อ-นามสกุล",
    "contact.name.error": "กรุณากรอกชื่อ-นามสกุล",
    "contact.email.label": "อีเมล",
    "contact.email.placeholder": "อีเมล",
    "contact.email.emptyError": "กรุณากรอกอีเมล",
    "contact.email.invalidError": "กรุณากรอกอีเมลที่ถูกต้อง",
    "contact.message.placeholder": "ข้อความของคุณ",
    "contact.message.error": "กรุณากรอกข้อความ",
    "contact.submit": "ส่งข้อความ",
    "contact.sending": "กำลังส่ง...",
    "contact.error": "เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง",
  },
  en: {
    "contact.name.placeholder": "Full Name",
    "contact.name.error": "Please provide your full name.",
    "contact.email.label": "Email Address",
    "contact.email.placeholder": "Email Address",
    "contact.email.emptyError": "Please provide your email address.",
    "contact.email.invalidError": "Please provide a valid email address.",
    "contact.message.placeholder": "Your Message",
    "contact.message.error": "Please enter your message.",
    "contact.submit": "Send Message",
    "contact.sending": "Sending...",
    "contact.error": "Something went wrong!",
  },
} as const;

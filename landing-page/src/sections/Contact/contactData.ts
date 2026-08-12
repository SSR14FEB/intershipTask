export interface ContactMethod {
  label: string;
  value: string;
  href: string;
}

export const contactHeading = "Get in touch";
export const contactSubheading =
  "Have a question about your build or want a system designed for you? Send us a message and an engineer will reply ASAP.";

export const contactMethods: ContactMethod[] = [
  { label: "Email", value: "hello@nohma.com", href: "mailto:hello@nohma.com" },
  { label: "Phone", value: "+44 1234 567 890", href: "tel:+441234567890" },
  { label: "Address", value: "Bristol, United Kingdom", href: "#" },
];
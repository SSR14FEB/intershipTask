/**
 * Truncates a string to a maximum length, appending an ellipsis
 * when the original text is longer than the limit.
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trimEnd()}…`;
}

/**
 * Smoothly scrolls the page to the element matching the given id.
 */
export function scrollToId(id: string): void {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

/**
 * Basic email format validator used for contact / newsletter forms.
 */
export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * Formats a number with commas, e.g. 4000 -> "4,000".
 */
export function formatNumber(value: number): string {
  return value.toLocaleString("en-US");
}
export function formatReadableDate(
  isoDate: string,
  locale: string = 'en-US',
  options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' }
): string {
  try {
    const date = new Date(isoDate);
    if (isNaN(date.getTime())) {
      throw new Error("Invalid ISO date string");
    }
    return date.toLocaleDateString(locale, options);
  } catch (error) {
    console.error("Error formatting date:", error);
    return '';
  }
}

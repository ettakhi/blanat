/**
 * Converts a date to a human-readable relative time format
 * @param date - The date to convert (Date object, string, or number)
 * @param options - Configuration options
 * @returns A string like "2 days ago", "in 3 months", "just now", etc.
 */
export function timeAgo(
  date: Date | string | number,
  options: {
    locale?: string;
    includeSeconds?: boolean;
    maxUnit?: "second" | "minute" | "hour" | "day" | "week" | "month" | "year";
  } = {}
): string {
  const { locale = "en", includeSeconds = false, maxUnit = "year" } = options;

  const now = new Date();
  const targetDate = new Date(date);

  // Check for invalid date
  if (isNaN(targetDate.getTime())) {
    return "Invalid date";
  }

  const diffInSeconds = Math.floor(
    (now.getTime() - targetDate.getTime()) / 1000
  );
  const isPast = diffInSeconds > 0;
  const absoluteDiff = Math.abs(diffInSeconds);

  // Define time units in seconds
  const units = [
    { name: "year", seconds: 31536000, max: maxUnit === "year" },
    {
      name: "month",
      seconds: 2592000,
      max: ["year", "month"].includes(maxUnit),
    },
    {
      name: "week",
      seconds: 604800,
      max: ["year", "month", "week"].includes(maxUnit),
    },
    {
      name: "day",
      seconds: 86400,
      max: ["year", "month", "week", "day"].includes(maxUnit),
    },
    {
      name: "hour",
      seconds: 3600,
      max: ["year", "month", "week", "day", "hour"].includes(maxUnit),
    },
    {
      name: "minute",
      seconds: 60,
      max: ["year", "month", "week", "day", "hour", "minute"].includes(maxUnit),
    },
    { name: "second", seconds: 1, max: true },
  ];

  // Handle "just now" case
  if (absoluteDiff < 60 && !includeSeconds) {
    return "just now";
  }

  // Find the appropriate unit
  for (const unit of units) {
    if (!unit.max) continue;

    const value = Math.floor(absoluteDiff / unit.seconds);

    if (value >= 1 || unit.name === "second") {
      // Skip seconds if not included and we're in the seconds range
      if (unit.name === "second" && !includeSeconds && value < 60) {
        return "just now";
      }

      const rtf = new Intl.RelativeTimeFormat(locale, { numeric: "auto" });
      const relativeValue = isPast ? -value : value;

      return rtf.format(
        relativeValue,
        unit.name as Intl.RelativeTimeFormatUnit
      );
    }
  }

  return "just now";
}

/**
 * Formats a date to a more detailed human-readable format
 * @param date - The date to format
 * @param options - Formatting options
 * @returns A formatted date string
 */
export function formatDate(
  date: Date | string | number,
  options: {
    locale?: string;
    includeTime?: boolean;
    dateStyle?: "full" | "long" | "medium" | "short";
    timeStyle?: "full" | "long" | "medium" | "short";
  } = {}
): string {
  const {
    locale = "en",
    includeTime = false,
    dateStyle = "medium",
    timeStyle = "short",
  } = options;

  const targetDate = new Date(date);

  if (isNaN(targetDate.getTime())) {
    return "Invalid date";
  }

  const formatOptions: Intl.DateTimeFormatOptions = {
    dateStyle: dateStyle,
  };

  if (includeTime) {
    formatOptions.timeStyle = timeStyle;
  }

  return new Intl.DateTimeFormat(locale, formatOptions).format(targetDate);
}

/**
 * Gets a smart date representation that shows relative time for recent dates
 * and absolute dates for older ones
 * @param date - The date to format
 * @param options - Configuration options
 * @returns A smart formatted date string
 */
export function smartDate(
  date: Date | string | number,
  options: {
    locale?: string;
    relativeDays?: number; // Show relative time for dates within this many days
  } = {}
): string {
  const { locale = "en", relativeDays = 7 } = options;

  const now = new Date();
  const targetDate = new Date(date);

  if (isNaN(targetDate.getTime())) {
    return "Invalid date";
  }

  const diffInDays = Math.abs(
    (now.getTime() - targetDate.getTime()) / (1000 * 60 * 60 * 24)
  );

  // Use relative time for recent dates
  if (diffInDays <= relativeDays) {
    return timeAgo(date, { locale });
  }

  // Use absolute date for older dates
  return formatDate(date, { locale, dateStyle: "medium" });
}

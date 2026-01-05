// Example configuration for the trash collection calendar
// This is a sample config for a fictional town. Customize it for your location.

const startDateStr = "2026-01-23";  // Start date for biweekly household waste collection
const months = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
const daysShort = ["M", "T", "W", "T", "F", "S", "S"];  // Monday to Sunday
const title = "2026 Trash Calendar - Example Town";
const headerH1 = "2026 // TRASH COLLECTION";
const headerInfo = "Every other Friday starting Jan. 23th, even if there are no explicit labels <br>Includes bonus days such as Jul. 1st with label, and Jul. 15th without label.";
const legend = [
    { code: "P", text: "PLASTIC/METAL" },
    { code: "R", text: "PAPER" },
    { code: "G", text: "GLASS" },
    { code: "C", text: "CLOTHES" }
];
const schedule = [
  { month: 0, day: 23, types: ['P', 'R'] },
  { month: 1, day: 6, types: ['P'] },
  { month: 1, day: 20, types: ['R', 'G'] },
  { month: 2, day: 6, types: ['P'] },
  { month: 2, day: 20, types: ['R', 'C'] },
  { month: 3, day: 17, types: ['P'] },
  { month: 3, day: 31, types: ['R'] },
  { month: 3, day: 3, types: ['P'] },
  { month: 4, day: 15, types: ['P'] },
  { month: 4, day: 29, types: ['R', 'G'] },
  { month: 4, day: 1, types: ['P'] },
  { month: 5, day: 12, types: ['P'] },
  { month: 5, day: 26, types: ['R', 'C'] },
  { month: 6, day: 1, types: ['C'] },
  { month: 6, day: 15, types: [] }, // Bonus day with no label
  { month: 7, day: 7, types: ['P'] },
  { month: 7, day: 21, types: ['R', 'G'] },
  { month: 8, day: 4, types: ['P'] },
  { month: 8, day: 18, types: ['R', 'C'] },
  { month: 9, day: 2, types: ['P'] },
  { month: 9, day: 16, types: ['R'] },
  { month: 9, day: 30, types: ['R'] },
  { month: 10, day: 13, types: ['P'] },
  { month: 10, day: 27, types: ['R', 'G'] },
  { month: 11, day: 11, types: ['P'] },
  { month: 11, day: 25, types: ['R', 'C'] }
];
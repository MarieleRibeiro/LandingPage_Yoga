const theme = {
  title: "default",
  colors: {
    white: "#FFFFFF",
    gray: " #E5E5E5",
    blue: " #2B3076",
    blue100: "#4B5092",
    blue200: "#7D81B1"
  }
} as const;

export type MyTheme = typeof theme;

export default theme;
const theme = {
  title: "default",
  colors: {
    white: "#FFFFFF",
    gray: " #F1F7FF",
    gray100: "#F8FBFF",
    blue: " #2B3076",
    blue100: "#4B5092",
    blue200: "#7D81B1",
  },
} as const;

export type MyTheme = typeof theme;

export default theme;

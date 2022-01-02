import { extendTheme, ThemeOverride } from "@chakra-ui/react";

export const theme = extendTheme({
  components: {
    Divider: {
      baseStyle: {
        opacity: 1,
        borderColor: "#47585B",
      },
    },
  },
  colors: {
    gray: {
      "50": "#FFFFFF",
      "100": "#F5F8FA",
      "300": "#DADADA",
      "500": "#999999",
      "700": "#47585B",
      "900": "#000000",
    },
    yellow: {
      "500": "#FFBA08",
    },
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  styles: {
    global: {
      body: {
        bg: "gray.50",
        color: "gray.700",
      },
    },
  },
});

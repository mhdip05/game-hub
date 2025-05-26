import { defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          100: { value: "#f7fafc" },
          900: { value: "#1a202c" },
        },
      },
      fonts: {
        heading: { value: "'Figtree', sans-serif" },
        body: { value: "'Figtree', sans-serif" },
      },
    },
  },
});

export default config;

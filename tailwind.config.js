module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A4DA2",
        container: "#F6F8FB",
        footer: "#FFFFFF",

        pageHeading: "#FFFFFF",
        containerHeading: "#002D67",
        cardHeading: "#393939",
        lightCount: "#FFA939",
        buttonText: {
          active: "#FFFFFF",
          inactive: "#002D67",
        },

        buttonRed: {
          start: "#FF9B9B",
          end: "#FFBC91",
        },
        buttonPurple: {
          start: "#A693EB",
          end: "#DA93EB",
        },
        buttonBlue: {
          start: "#93CAEB",
          end: "#93DDEB",
        },
        buttonGreen: {
          start: "#89DD94",
          end: "#BFEC92",
        },

        colorIcon: {
          red: "#FF9B9B",
          green: "#94EB9E",
          blue: "#94CAEB",
          purple: "#A594EB",
          pink: "#DE94EB",
          yellow: "#EBD094",
        }
      }
    },
  },
  plugins: [],
}

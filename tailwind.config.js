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
        lightCount: {
          small: "#FFA939",
          big:"#FFD239",
        },
        buttonText: {
          active: "#FFFFFF",
          inactive: "#002D67",
        },
        buttonBackground: {
          active: "#002D67",
          inactive: "#FFFFFF",
        },
        profileIcon: {
          border: "#FFFFFF",
          notification: "#FF9898",
        },
        intensitySelector: {
          activeMeter: "#FFD339",
          inactiveMeter: "#CECECE",
          setting: "#CECECE",
          adjuster: "#FFFFFF",
        },
        powerButton: {
          background: "#FFFFFF",
          icon: "#FF9696",
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
          white: "#FFFFFF",
        }
      }
    },
  },
  plugins: [],
}

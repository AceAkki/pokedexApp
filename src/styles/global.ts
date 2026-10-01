import { StyleSheet } from "react-native";

export const colors = {
  primary: "#EE1515",
  secondary: "#222224",
  tertiary: "#F0F0F0",

  background: "#F2F2F7",
  backgroundLight: "#F5F5F599",

  txt: "#1D2128",
  txtLight: "#F2F2F7",

  disabled: "#CCCECF",
  accent: "#FFDE00",
  alert: "#D90000",
};

export const typeColors = {
  normal: "#A9A8C4",
  fire: "#fb7e7b",
  water: "#76befe",
  electric: "#e1be69",
  grass: "#49d0b0",
  ice: "#72DCEB",
  fighting: "#EF5967",
  poison: "#C66BE8",
  ground: "#E0AE55",
  flying: "#9B8CFF",
  psychic: "#FF6FAD",
  bug: "#A9D94A",
  rock: "#C6A458",
  ghost: "#8D70D8",
  dragon: "#7864F2",
  dark: "#625477",
  steel: "#A8B4CA",
  fairy: "#F58FBD",
};
export const typeIcons = {
  normal: "circle",
  fire: "fire",
  water: "droplet",
  electric: "bolt",
  grass: "leaf",
  ice: "snowflake",
  fighting: "hand-fist",
  poison: "flask",
  ground: "hill-rockslide", // or "mountain"
  flying: "wind",
  psychic: "eye", // or "brain"
  bug: "bug",
  rock: "gem", // or "mountain"
  ghost: "ghost",
  dragon: "dragon",
  dark: "moon",
  steel: "shield-halved", // or "wrench"
  fairy: "wand-magic-sparkles", // or "star"
} as const;

export const globalStyles = StyleSheet.create({
  bold900: {
    fontWeight: 900,
  },

  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "100%",
    boxSizing: "border-box",
  },

  titleText: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.txt,
  },

  typeRow: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },

  innerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  center: {
    alignItems: "center",
    justifyContent: "center",
  },

  buttonMain: {
    backgroundColor: colors.secondary,
    borderRadius: 100,
    // boxShadow:
    //   "rgba(238, 21, 21, .2) 0 -25px 18px -14px inset,rgba(238, 21, 21, .15) 0 1px 2px,rgba(238, 21, 21, .15) 0 2px 4px,rgba(238, 21, 21, .15) 0 4px 8px,rgba(238, 21, 21, .15) 0 8px 16px,rgba(238, 21, 21, .15) 0 16px 32px",
    cursor: "pointer",
    paddingVertical: 7,
    paddingHorizontal: 20,
    textAlign: "center",
    fontSize: 16,
    alignSelf: "flex-start",
    width: 120,
  },
  buttonMainTxt: {
    color: colors.tertiary,
  },

  // buttonMain:hover { box-shadow: rgba(44,187,99,.35) 0 -25px 18px -14px inset,rgba(44,187,99,.25) 0 1px 2px,rgba(44,187,99,.25) 0 2px 4px,rgba(44,187,99,.25) 0 4px 8px,rgba(44,187,99,.25) 0 8px 16px,rgba(44,187,99,.25) 0 16px 32px; transform: scale(1.05) rotate(-1deg);}
});

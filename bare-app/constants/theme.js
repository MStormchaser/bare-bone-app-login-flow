const COLORS = {
  primary: "#312651",
  secondary: "#444262",
  tertiary: "#FF7754",

  surfaceBase: "#fff",
  surfacePrimary: "#F2F2F2",
  surfaceSecondary: "#B3B3B3",

  white: "#fff",
  black: "#252525",
  flamingo: "#FF66B2",
};

const FONT = {
  regular: "DMRegular",
  medium: "DMMedium",
  bold: "DMBold",
};

const SIZES = {
  xxxSmall: 4,
  xxSmall: 8,
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
  x3Large: 36,
  x4Large: 40,
  x5Large: 48,
  x6Large: 56,
};

const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

export { COLORS, FONT, SIZES, SHADOWS };

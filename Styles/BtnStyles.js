import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import Colors from "./colors";

// Base button style (excluding round)
const baseStyle = {
  backgroundColor: Colors.dodgerBlue,
  paddingVertical: hp("1.3%"),
  paddingHorizontal: wp("3%"),
  borderRadius: 5,
  alignItems: "center",
  justifyContent: "center",
  alignSelf: "center",
  margin: hp("0.4%"),
};

// Main button styles
const ButtonStyles = StyleSheet.create({
  base: {
    ...baseStyle,
    width: wp("50%"), // Fixed width instead of min/max
    height: hp("6%"),
  },
  small: {
    width: wp("35%"),
    height: hp("5%"),
  },
  large: {
    width: wp("60%"),
    height: hp("7%"),
  },
  xtrLarge: {
    width: wp("80%"),
    height: hp("8%"),
  },
  round: {
    width: wp("13%"),
    height: wp("13%"),
    borderRadius: wp("6.5%"),
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: Colors.dodgerBlue,
  },
  icons: {
    width: wp("13%"),
    height: wp("13%"),
    borderRadius: wp("6.5%"),
    backgroundColor: 'none',

  },
  logOut: {
    ...baseStyle,
    width: wp("50%"),
    height: hp("6%"),
    backgroundColor: Colors.red,
  },
  resetBtn: {
    ...baseStyle,
    width: wp("50%"),
    height: hp("6%"),
    backgroundColor: Colors.darkerDodgerBlue,
  },
  heartRatesBtn: {
    justifyContent: "center",
    alignItems: "center",
    width: wp("45%"),
    height: wp("45%"),
    borderRadius: wp("22.5%"),
    borderWidth: wp("0.3%"),
    borderColor: Colors.kellyGreen,
    backgroundColor: Colors.pennBlue,
  },
  text: {
    color: Colors.mintCream,
    fontSize: hp("2%"),
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  pressed: {
    transform: [{ scale: 0.98 }],
    backgroundColor: Colors.darkerDodgerBlue,
  },
});

export default ButtonStyles;

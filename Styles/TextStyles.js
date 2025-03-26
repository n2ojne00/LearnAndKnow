import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Colors from "./colors";


const TextStyles = StyleSheet.create({
  base: {
    fontSize: hp('5%'),
    color: "#333",
  },
  title: {
    fontSize: hp('4%'),
    fontWeight: "bold",
    color: "#000",
  },
  subtitle: {
    fontSize: hp('3%'),
    fontWeight: "600",
    color: "#444",
  },
  body: {
    fontSize: hp('2.5%'),
    color: "#555",
  },
  small: {
    fontSize: hp('2.2%'),
    color: "#666",
  },
  heartData: {
    fontSize: hp("2.5%"),
    fontWeight: "bold",
    color: Colors.kellyGreen,
    marginTop: hp("0.5%")
  },
  error: {
    fontSize: hp('2.2%'),
    color: "red",
  },
  txtInput: {
    borderColor: Colors.dodgerBlue,
    borderWidth: 1,
    borderRadius: 5,
    width: wp('90%'),
    height: hp('6%'),
    margin: hp('0.3%'),
  }
});

export default TextStyles;

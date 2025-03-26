import React from "react";
import { Pressable, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import TextStyles from "../Styles/TextStyles";
import ButtonStyles from "../Styles/BtnStyles";
import Colors from "../Styles/colors";

export const CustomButton = ({ title, onPress, size = "base" }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        ButtonStyles.base,
        ButtonStyles[size], // Apply size dynamically
        pressed && ButtonStyles.pressed,
      ]}
      onPress={onPress}
    >
      <Text style={ButtonStyles.text}>{title}</Text>
    </Pressable>
  );
};


export const IconButton = ({ iconName, onPress, size = 24, color = "#fff" }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        ButtonStyles.base,
        ButtonStyles.round,
        pressed && ButtonStyles.pressed,
      ]}
      onPress={onPress}
    >
      <Icon name={iconName} size={size} color={color} />
    </Pressable>
  );
};

export const ReturnIcon = ({ iconName, onPress, size = 24, color = "#fff" }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        ButtonStyles.base,
        ButtonStyles.icons,
      ]}
      onPress={onPress}
    >
      <AntDesign name={iconName} size={size} color={color} />
    </Pressable>
  );
};


export const Heart = ({ iconName, onPress, size = wp("20%"), color = Colors.kellyGreen, label = "", value = "" }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        ButtonStyles.heartRatesBtn,
      ]}
      onPress={onPress}
    >
      <Entypo name={iconName} size={size} color={color} />
      <Text style={[TextStyles.small, { color: '#fff' }]}>
        {label}
      </Text>
      <Text style={TextStyles.heartData}>
        {value}
      </Text>
    </Pressable>
  );
};

/**
 * BUTTON OPTIONS
  ALERT  
  <CustomButton title="Click Me" onPress={() => alert("Button Pressed!")} />
  
  ICON
  <IconButton iconName="add" onPress={() => alert("Icon Pressed!")} />

  <CustomButton title="LogOut" onPress={() => {}} size="logOut" />
  
  SIZE
  <CustomButton title="Small Button" onPress={() => {}} size="small" />
  <CustomButton title="Large Button" onPress={() => {}} size="large" />
 */

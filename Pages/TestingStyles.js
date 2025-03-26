import { Text, View } from "react-native";
import { CustomButton, Heart, IconButton } from "../Components/CustomButton";


export default function TestingStyles() {
    return (
        <View>

            <Text >HOME PAGE</Text>

            <CustomButton title="Click Me" onPress={() => alert("Button Pressed!")} />

            <IconButton iconName="add" onPress={() => alert("Icon Pressed!")} />


            <CustomButton title="LogOut" onPress={() => { }} size="logOut" />


            <CustomButton title="Small Button" onPress={() => { }} size="small" />
            <CustomButton title="Large Button" onPress={() => { }} size="large" />

            <Heart iconName="heart" />
            
        </View>
    );
}

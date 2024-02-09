import { View, Text, SafeAreaView } from "react-native";

import Button from "../components/Button";

const AboutScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View className="px-4">
        <Text>About Screen</Text>
        <Button label="Go Home" type="default" onPress={() => navigation.navigate("Home")} />
      </View>
    </SafeAreaView>
  );
};

export default AboutScreen;

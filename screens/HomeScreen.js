
import { View, Text, SafeAreaView } from "react-native";
import Button from "../components/Button";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View className="px-4">
        <Text>Home Screen</Text>

        <Button label="Go to About" type="default" onPress={() => navigation.navigate("About")} />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

import { View, Text } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context'

import RouterLink from "../components/Link";

export default About = () => {
  return (
    <SafeAreaView>
      <View className="p-4">
        <Text>About Screen</Text>

        <RouterLink href="/" label="Home" type="primary"  />
      </View>
    </SafeAreaView>
  );
};

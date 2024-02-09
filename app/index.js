import { View, Text } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context'

import RouterLink from "../components/Link";

export default Home = () => {
  return (
    <SafeAreaView>
      <View className="p-4">
        <Text>Home Screen</Text>

        <RouterLink href="/about" label="About" type="danger" />
      </View>
    </SafeAreaView>
  );
};

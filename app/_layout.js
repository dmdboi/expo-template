import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function AppLayout() {
  return (
    <Tabs
      screenOptions={() => ({
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 70, // Adjust the height as needed
        },
      })}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Home",
          header: () => null,
          tabBarIcon: ({ color, size }) => <Ionicons name="home-outline" color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          tabBarLabel: "About",
          header: () => null,
          tabBarIcon: ({ color, size }) => <Ionicons name="information-circle-outline" color={color} size={size} />,
        }}
      />
    </Tabs>
  );
}

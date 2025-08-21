import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { BottomTabBar } from "@react-navigation/bottom-tabs";
import FloatingPlayer from "@/components/FloatingPlayer";

export default function TabsLayout() {
  return (
    <Tabs
      tabBar={(props) => (
        <>
          <FloatingPlayer />
          <BottomTabBar {...props} />
        </>
      )}
      screenOptions={{ tabBarShowLabel: false, headerTitleAlign: "center" }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Library",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="library-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="discover"
        options={{
          title: "Discover",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="exit-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

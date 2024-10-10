import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function TabsLayout() {
    return <Tabs screenOptions={{ tabBarActiveTintColor: "#e91e63", tabBarShowLabel: false  }}>
         <Tabs.Screen name="feed" options={{ headerTitle: "For you", tabBarIcon: ({ color, size }) => <FontAwesome name="home" size={size} color={color} /> }} />

        <Tabs.Screen name="index" options={{ headerTitle: "Write", tabBarIcon: ({ color, size }) => <FontAwesome name="pencil" size={size} color={color} /> }} />
        <Tabs.Screen name="profile" options={{ headerTitle: "Profile", tabBarIcon: ({ color, size }) => <FontAwesome name="user" size={size} color={color} /> }} />
    </Tabs>
}
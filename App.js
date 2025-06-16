import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Settings, User, Info } from "lucide-react-native";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let IconComponent;

            // Determine which icon to display based on the route name

            if (route.name === "Home") {
              IconComponent = Home;
            } else if (route.name === "Settings") {
              IconComponent = Settings;
            } else if (route.name === "Profile") {
              IconComponent = User;
            } else if (route.name === "About") {
              IconComponent = Info;
            }
            return <IconComponent size={size} color={color} />;
          },
          tabBarActiveTintColor: "#6200EE",
          tabBarInactiveTintColor: "gray",

          tabBarStyle: {
            backgroundColor: "#ffffff",
            borderTopWidth: 1,
            borderTopColor: "#f0f0f0",
            height: Dimensions.get("window").height * 0.10,
            paddingBottom: Dimensions.get("window").height * 0.05,
            paddingTop: Dimensions.get("window").height * 0.01,
          },

          tabBarLabelStyle: {
            fontSize: Dimensions.get("window").width * 0.03,
            fontWeight: "600",
          },
          headerShown: false,
        })}>
        {/* Define each screen that will appear as a tab */}

        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="About" component={AboutScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenTitle}>Home Screen</Text>
      <Text style={styles.screenText}>Welcome to the main application view.</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenTitle}>Settings Screen</Text>
      <Text style={styles.screenText}>Welcome settings view.</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenTitle}>Profile Screen</Text>
      <Text style={styles.screenText}>Welcome profile view.</Text>
    </View>
  );
}

function AboutScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenTitle}>About Screen</Text>
      <Text style={styles.screenText}>About us view.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E0E0E0",
    padding: 20,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },

  screenTitle: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#333",
    textAlign: "center",
  },

  screenText: {
    fontSize: 18,
    color: "#555",
    textAlign: "center",
    marginHorizontal: 20,
  },
});

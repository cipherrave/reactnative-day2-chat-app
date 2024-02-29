import * as React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Chats from "./screens/Chats";
import Settings from "./screens/Settings";
import Updates from "./screens/Updates";
import Calls from "./screens/Calls";
import Communities from "./screens/Communities";

import { Linking, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const PERSISTENCE_KEY = "NAVIGATION_STATE_V1";

const Tab = createBottomTabNavigator();

export default function App() {
  const [isReady, setIsReady] = React.useState(Platform.OS === "web"); // Don't persist state on web since it's based on URL
  const [initialState, setInitialState] = React.useState();
  React.useEffect(() => {
    const restoreState = async () => {
      try {
        const initialUrl = await Linking.getInitialURL();

        if (initialUrl == null) {
          // Only restore state if there's no deep link
          const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
          const state = savedStateString
            ? JSON.parse(savedStateString)
            : undefined;

          if (state !== undefined) {
            setInitialState(state);
          }
        }
      } finally {
        setIsReady(true);
      }
    };

    if (!isReady) {
      restoreState();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }

  return (
    <NavigationContainer
      initialState={initialState}
      onStateChange={(state) =>
        AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))
      }
    >
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerStyle: {
            backgroundColor: "#075E54",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {},
          tabBarActiveTintColor: "#075E54",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen
          name="Updates"
          component={Updates}
          options={{
            tabBarLabel: "Updates",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="update" size={size} color={color} />
            ),
            tabBarBadge: 3,
          }}
        />
        <Tab.Screen
          name="Calls"
          component={Calls}
          options={{
            tabBarLabel: "Calls",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="call" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Communities"
          component={Communities}
          options={{
            tabBarLabel: "Communities",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="people" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Chats"
          component={Chats}
          options={{
            tabBarLabel: "Chats",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="call" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarLabel: "Settings",
            tabBarIcon: ({ color, size }) => (
              <Feather name="settings" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

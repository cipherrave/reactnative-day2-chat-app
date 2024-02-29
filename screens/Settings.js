import { View, ScrollView, Text } from "react-native";
import { Paragraph, Header } from "../components/typography";
import { Linking, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import "react-native-gesture-handler";
import modalUser from "./Settings/User";
import modalStarredMessages from "./Settings/StarredMessages";
import modalBroadcastLists from "./Settings/BroadcastLists";
import modalLinkedDevices from "./Settings/LinkedDevices";

export default function Settings({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ScrollView></ScrollView>
    </View>
  );
}

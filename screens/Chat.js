import { SafeAreaView, Text } from "react-native";

export default function Chat({ route }) {
  // this is the name of the user that was passed from the Home screen

  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text>Chat with</Text>
    </SafeAreaView>
  );
}

import {
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  View,
  RefreshControl,
  Pressable,
} from "react-native";
import { useState } from "react";
import { Header, Paragraph, Small } from "../components/typography";

const MESSAGES = [
  {
    image: "https://reactnative.dev/img/tiny_logo.png",
    name: "React Native 1",
    message: "Hello, World!",
  },
  {
    image: "https://reactnative.dev/img/tiny_logo.png",
    name: "React Native 2",
    message: "Hello, World!",
  },
  {
    image: "https://reactnative.dev/img/tiny_logo.png",
    name: "React Native 3",
    message: "Hello, World!",
  },
  {
    image: "https://reactnative.dev/img/tiny_logo.png",
    name: "React Native 4",
    message: "Hello, World!",
  },
  {
    image: "https://reactnative.dev/img/tiny_logo.png",
    name: "React Native 5",
    message: "Hello, World!",
  },
  {
    image: "https://reactnative.dev/img/tiny_logo.png",
    name: "React Native 1",
    message: "Hello, World!",
  },
  {
    image: "https://reactnative.dev/img/tiny_logo.png",
    name: "React Native 2",
    message: "Hello, World!",
  },
  {
    image: "https://reactnative.dev/img/tiny_logo.png",
    name: "React Native 3",
    message: "Hello, World!",
  },
  {
    image: "https://reactnative.dev/img/tiny_logo.png",
    name: "React Native 4",
    message: "Hello, World!",
  },
  {
    image: "https://reactnative.dev/img/tiny_logo.png",
    name: "React Native 5",
    message: "Hello, World!",
  },
  {
    image: "https://reactnative.dev/img/tiny_logo.png",
    name: "React Native 1",
    message: "Hello, World!",
  },
  {
    image: "https://reactnative.dev/img/tiny_logo.png",
    name: "React Native 2",
    message: "Hello, World!",
  },
  {
    image: "https://reactnative.dev/img/tiny_logo.png",
    name: "React Native 3",
    message: "Hello, World!",
  },
  {
    image: "https://reactnative.dev/img/tiny_logo.png",
    name: "React Native 4",
    message: "Hello, World!",
  },
  {
    image: "https://reactnative.dev/img/tiny_logo.png",
    name: "React Native 5",
    message: "Hello, World!",
  },
];

export default function Calls({ navigation }) {
  // this is the name of the user that was passed from the Home screen
  const [refreshing, setRefreshing] = useState(false);
  function onRefresh() {
    // this is a fake async function that simulates a network request
    console.log(MESSAGES, "Refreshing messages");
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }

  return (
    <SafeAreaView
      style={{
        backgroundColor: "white",
        flex: 1,
      }}
    >
      <View style={{ paddingHorizontal: 16 }}>
        <ScrollView
          style={{ marginHorizontal: -16, paddingHorizontal: 16 }}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <View
            style={{
              paddingVertical: 0,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          ></View>
          {MESSAGES.map((message, index) => (
            <MessageCard key={index} {...message} navigation={navigation} />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

function MessageCard({ image, name, message, navigation }) {
  function openChat() {
    console.log("Opening chat", name);
    navigation.navigate("Chat", { name });
  }
  return (
    <Pressable onPress={openChat}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 12,
          borderBottomWidth: 1,
          borderBottomColor: "#f0f0f0",
          paddingVertical: 8,
        }}
      >
        <Image
          style={{ width: 50, height: 50, borderRadius: 1000 }}
          source={{
            uri: image || "https://reactnative.dev/img/tiny_logo.png",
          }}
        />
        <View>
          <Paragraph style={{ fontWeight: 600 }}>
            {name || "No name provided"}
          </Paragraph>
          <Small>{message || "No message provided"}</Small>
        </View>
      </View>
    </Pressable>
  );
}

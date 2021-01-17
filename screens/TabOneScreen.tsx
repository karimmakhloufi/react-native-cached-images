import * as React from "react";
import { StyleSheet, Image, ScrollView } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text } from "../components/Themed";
import { Image as CachedImage } from "react-native-expo-image-cache";

const images = [
  "https://images.unsplash.com/photo-1548802673-380ab8ebc7b7",
  "https://images.unsplash.com/photo-1542108226-9130e1e83cc4",
  "https://images.unsplash.com/photo-1574231164645-d6f0e8553590",
  "https://images.unsplash.com/photo-1455970022149-a8f26b6902dd",
];

export default function TabOneScreen() {
  return (
    <ScrollView>
      {images.map((uri, index) => (
        <CachedImage
          key={index}
          style={{ height: 100, width: 100 }}
          {...{ uri }}
        />
      ))}
      {images.map((uri, index) => (
        <Image
          key={index}
          style={{ height: 100, width: 100 }}
          source={{
            uri: uri,
          }}
        />
      ))}
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

import { View, Text, Pressable, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import PlaybackBar from "@/components/PlaybackBar";

import dummyBooks from "@/dummyBooks";

export default function Player() {
  const book = dummyBooks[0];

  return (
    <SafeAreaView className="flex-1 bg-nord1 p-4 py-20 gap-4">
      <Pressable
        onPress={() => router.back()}
        className="absolute top-16 left-4 bg-nord0 rounded-full p-2"
      >
        <Ionicons name="chevron-down" size={24} color="white" />
      </Pressable>

      <Image
        source={{ uri: book.thumbnail_url }}
        className="w-[95%] aspect-square rounded-2xl self-center"
      />

      <View className="gap-8 flex-1 justify-end">
        <Text className="text-nord5 text-2xl font-bold text-center">
          {book.title}
        </Text>
        <PlaybackBar value={0.1} />

        <View className="flex-row items-center justify-between mt-8">
          <Ionicons name="play-skip-back" size={24} color="#e5e9f0" />
          <Ionicons name="play-back" size={24} color="#e5e9f0" />
          <Ionicons name="play" size={50} color="#d8dee9" />
          <Ionicons name="play-forward" size={24} color="#e5e9f0" />
          <Ionicons name="play-skip-forward" size={24} color="#e5e9f0" />
        </View>
      </View>
    </SafeAreaView>
  );
}

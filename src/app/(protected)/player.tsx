import { View, Text, Pressable, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAudioPlayer, useAudioPlayerStatus } from "expo-audio";

import PlaybackBar from "@/components/PlaybackBar";

import dummyBooks from "@/dummyBooks";

export default function Player() {
  const book = dummyBooks[0];

  const player = useAudioPlayer({ uri: book.audio_url });
  const playerStatus = useAudioPlayerStatus(player);

  console.log(JSON.stringify(playerStatus, null, 2));
  console.log(JSON.stringify(player, null, 2));

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
        <PlaybackBar
          currentTime={playerStatus.currentTime}
          duration={playerStatus.duration}
        />

        <View className="flex-row items-center justify-between mt-8">
          <Ionicons
            onPress={() => player.seekTo(0)}
            name="play-skip-back"
            size={24}
            color="#e5e9f0"
          />
          <Ionicons
            onPress={() => player.seekTo(playerStatus.currentTime - 10)}
            name="play-back"
            size={24}
            color="#e5e9f0"
          />
          <Ionicons
            onPress={() =>
              playerStatus.playing ? player.pause() : player.play()
            }
            name={playerStatus.playing ? "pause" : "play"}
            size={50}
            color="#d8dee9"
          />

          <Ionicons
            onPress={() => player.seekTo(playerStatus.currentTime + 10)}
            name="play-forward"
            size={24}
            color="#e5e9f0"
          />
          <Ionicons
            onPress={() => player.seekTo(playerStatus.duration)}
            name="play-skip-forward"
            size={24}
            color="#e5e9f0"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

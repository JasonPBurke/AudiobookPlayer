import { View, Text, Pressable, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAudioPlayerStatus } from "expo-audio";

import PlaybackBar from "@/components/PlaybackBar";
import { usePlayer } from "@/providers/PlayerProvider";

export default function PlayerScreen() {
  const { player, book } = usePlayer();
  const playerStatus = useAudioPlayerStatus(player);

  // console.log(JSON.stringify(playerStatus, null, 2));

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
          onSeek={(seconds: number) => player.seekTo(seconds)}
          currentTime={playerStatus.currentTime}
          duration={playerStatus.duration}
        />

        <View className="flex-row items-center justify-around mt-8">
          <MaterialCommunityIcons
            onPress={() => player.seekTo(0)}
            name="step-backward"
            size={24}
            color="#e5e9f0"
          />
          <MaterialCommunityIcons
            onPress={() => player.seekTo(playerStatus.currentTime - 15)}
            name="rewind-15"
            size={28}
            color="#e5e9f0"
          />
          <Pressable
            hitSlop={12}
            onPress={() =>
              playerStatus.playing ? player.pause() : player.play()
            }
            className="bg-nord0 rounded-full p-2"
          >
            <MaterialCommunityIcons
              name={playerStatus.playing ? "pause" : "play"}
              size={50}
              color="#bf616a"
            />
          </Pressable>

          <MaterialCommunityIcons
            onPress={() => player.seekTo(playerStatus.currentTime + 15)}
            name="fast-forward-15"
            size={28}
            color="#e5e9f0"
          />
          <MaterialCommunityIcons
            onPress={() => player.seekTo(playerStatus.duration)}
            name="av-timer"
            size={24}
            color="#e5e9f0"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

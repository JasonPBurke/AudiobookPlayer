import { Text, View, Image, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Link } from "expo-router";

import dummyBooks from "@/dummyBooks";
import { useAudioPlayer, useAudioPlayerStatus } from "expo-audio";

export default function FloatingPlayer() {
  const book = dummyBooks[0];

  const player = useAudioPlayer({ uri: book.audio_url });
  const playerStatus = useAudioPlayerStatus(player);

  return (
    <Link href="/player" asChild>
      <Pressable className="flex-row gap-4 items-center p-2 bg-nord1">
        <Image
          source={{ uri: book.thumbnail_url }}
          className="w-20 aspect-square rounded-sm"
        />
        <View className="gap-2 flex-1">
          <Text className="text-xl font-bold text-nord6">{book.title}</Text>
          <Text className="text-red-400">{book.author}</Text>
        </View>
        <AntDesign
          className=""
          name={playerStatus.playing ? "pausecircleo" : "playcircleo"}
          size={24}
          color="#d8dee9"
          onPress={() =>
            playerStatus.playing ? player.pause() : player.play()
          }
        />
      </Pressable>
    </Link>
  );
}

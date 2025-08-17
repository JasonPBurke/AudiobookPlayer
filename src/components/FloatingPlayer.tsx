import { Text, View, Image, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Link } from "expo-router";

import { useAudioPlayerStatus } from "expo-audio";
import { usePlayer } from "@/providers/PlayerProvider";

export default function FloatingPlayer() {
  const { player, book } = usePlayer();
  const playerStatus = useAudioPlayerStatus(player);

  if (!book) return null;

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
          name={
            playerStatus.isBuffering
              ? "clouddownloado"
              : playerStatus.playing
                ? "pausecircleo"
                : "playcircleo"
          }
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

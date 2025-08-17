import { Text, View } from "react-native";

type PlaybackBarProps = {
  currentTime: number;
  duration: number;
};

export default function PlaybackBar({
  currentTime,
  duration,
}: PlaybackBarProps) {
  function formatTime(totalSeconds: number) {
    const dateObj = new Date(totalSeconds * 1000);
    const hours = dateObj.getUTCHours();
    const minutes = dateObj.getUTCMinutes();
    const seconds = dateObj.getSeconds();

    return (
      hours.toString().padStart(2, "0") +
      ":" +
      minutes.toString().padStart(2, "0") +
      ":" +
      seconds.toString().padStart(2, "0")
    );
  }

  return (
    <View className="gap-1">
      <View className="w-full bg-nord0 h-2 rounded-full justify-center self-center">
        <View
          className="bg-nord11 h-full rounded-full"
          style={{ width: `${(currentTime / duration) * 100}%` }}
        />
        <View
          className="absolute w-3 h-3 -translate-x-1/2 rounded-full bg-nord11"
          style={{ left: `${(currentTime / duration) * 100}%` }}
        />
      </View>
      <View className="flex-row justify-between">
        <Text className="text-nord4 opacity-40">{formatTime(currentTime)}</Text>
        <Text className="text-nord4 opacity-40">{`-${formatTime(duration - currentTime)}`}</Text>
      </View>
    </View>
  );
}

import { View } from "react-native";

export default function PlaybackBar({ value }: { value: number }) {
  return (
    <View className="w-[95%] bg-nord0 h-2 rounded-full justify-center self-center">
      <View
        className="bg-nord11 h-full rounded-full"
        style={{ width: `${value * 100}%` }}
      />
      <View
        className="absolute w-3 h-3 -translate-x-1/2 rounded-full bg-nord11"
        style={{ left: `${value * 100}%` }}
      />
    </View>
  );
}

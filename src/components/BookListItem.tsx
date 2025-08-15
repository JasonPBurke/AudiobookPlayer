import { Text, View, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";

type Book = {
  id: string;
  title: string;
  author: string;
  audio_url: string;
  thumbnail_url?: string;
};

type BookListItemProps = {
  book: Book;
};

export default function BookListItem({ book }: BookListItemProps) {
  return (
    <View className="flex-row gap-4 items-center top-10">
      <Image
        source={{ uri: book.thumbnail_url }}
        className="w-20 aspect-square rounded-sm"
      />
      <View className="gap-2 flex-1">
        <Text className="text-xl font-bold text-gray-100">{book.title}</Text>
        <Text className="text-gray-400">{book.author}</Text>
      </View>
      <AntDesign className="" name="playcircleo" size={24} color="gainsboro" />
    </View>
  );
}

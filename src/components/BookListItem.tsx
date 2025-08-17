import { Text, View, Image, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { usePlayer } from "@/providers/PlayerProvider";

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
  const { setBook } = usePlayer();

  return (
    <Pressable
      onPress={() => setBook(book)}
      className="flex-row gap-4 items-center"
    >
      <Image
        source={{ uri: book.thumbnail_url }}
        className="w-20 aspect-square rounded-sm"
      />
      <View className="gap-2 flex-1">
        <Text className="text-xl font-bold text-nord4">{book.title}</Text>
        <Text className="text-red-400">{book.author}</Text>
      </View>
      <AntDesign className="" name="playcircleo" size={24} color="#d8dee9" />
    </Pressable>
  );
}

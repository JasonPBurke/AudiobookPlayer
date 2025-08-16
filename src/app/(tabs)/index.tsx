import { View, FlatList } from "react-native";
import BookListItem from "@/components/BookListItem";

import books from "@/dummyBooks";

export default function App() {
  return (
    <FlatList
      data={books}
      contentContainerClassName="gap-24 p-2"
      renderItem={({ item }) => <BookListItem book={item} />}
    />
  );
}
